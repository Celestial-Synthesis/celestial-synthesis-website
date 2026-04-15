<template>
	<FlowrPlaygroundShell
		title="Form capture lab"
		description="This page concentrates common form patterns into one place so users can practice recording inputs, selections, validation, and submission flows."
		:checklist="checklist"
	>
		<section class="playground-card">
			<div class="section-heading">
				<p class="section-kicker">Form inputs</p>
				<h2>Walkthrough intake form</h2>
				<p>Record the fields in sequence, then replay to check whether FlowR restores focus and highlights the correct controls. The date field can also be right-clicked when you want to add a manual instruction instead of selecting a date value.</p>
			</div>
			<form class="capture-form" @submit.prevent>
				<div class="field-grid">
					<label class="field">
						<span class="field-label">Workflow name</span>
						<div class="field-control">
							<input v-model="form.workflowName" type="text" placeholder="Quarterly invoice handoff" />
						</div>
					</label>
					<label class="field">
						<span class="field-label">Owner email</span>
						<div class="field-control">
							<input v-model="form.ownerEmail" type="email" placeholder="ops@company.com" />
						</div>
					</label>
					<label class="field">
						<span class="field-label">Replay URL</span>
						<div class="field-control">
							<input v-model="form.replayUrl" type="url" placeholder="https://example.com/portal" />
						</div>
					</label>
					<label class="field field--date-instruction" @contextmenu.prevent="openInstructionMenu($event, 'date field')">
						<span class="field-label">Run date</span>
						<div class="field-control field-control--date">
							<input v-model="form.runDate" type="date" />
						</div>
						<small>Right-click this date field during recording if you want a manual instruction instead of a real date selection.</small>
					</label>
					<label class="field field--full">
						<span class="field-label">Instruction note</span>
						<div class="field-control field-control--textarea">
							<textarea v-model="form.note" rows="4" placeholder="Explain what the operator should watch for on this page."></textarea>
						</div>
					</label>
				</div>
			</form>
		</section>

		<section class="playground-card manual-instruction-card" @contextmenu.prevent="openInstructionMenu">
			<div class="section-heading">
				<p class="section-kicker">Decision controls</p>
				<h2>Checkbox, radio, dropdown, and slider practice</h2>
				<p>For checkbox, radio, dropdown, and slider sections, you can right-click this whole area during recording to add a manual instruction instead of changing a real choice just to create a step.</p>
			</div>
			<div class="manual-instruction-content">
				<p class="instruction-tip">Try the live controls if you want, but the right-click gesture is the main practice target for this section.</p>
				<div class="field-grid field-grid--controls">
					<label class="field">
						<span class="field-label">Environment</span>
						<div class="field-control field-control--select">
							<select v-model="form.environment">
								<option value="staging">Staging</option>
								<option value="production">Production</option>
								<option value="sandbox">Sandbox</option>
							</select>
						</div>
					</label>
					<label class="field field--range">
						<span class="field-label">Replay speed</span>
						<div class="field-control field-control--range">
							<input v-model="form.speed" type="range" min="1" max="5" step="1" />
						</div>
						<small>Current speed: {{ form.speed }}x</small>
					</label>
				</div>

				<div class="choice-grid">
					<fieldset class="choice-group">
						<legend>Capture options</legend>
						<label v-for="option in captureOptions" :key="option.value" class="choice-row">
							<input v-model="form.captureModes" type="checkbox" :value="option.value" />
							<span>{{ option.label }}</span>
						</label>
					</fieldset>

					<fieldset class="choice-group">
						<legend>Share level</legend>
						<label v-for="option in shareOptions" :key="option.value" class="choice-row">
							<input v-model="form.shareLevel" type="radio" name="share-level" :value="option.value" />
							<span>{{ option.label }}</span>
						</label>
					</fieldset>
				</div>

				<label class="toggle-row">
					<input v-model="form.includeScreenshots" type="checkbox" />
					<span>Include screenshots for every step</span>
				</label>

				<div class="form-actions">
					<button type="button" class="form-btn form-btn--primary" @click="saveDraft">Save walkthrough draft</button>
					<button type="button" class="form-btn form-btn--secondary" @click="resetForm">Reset form</button>
				</div>
				<p class="manual-instruction-feedback" aria-live="polite">{{ instructionFeedback }}</p>
			</div>
			<div
				v-if="instructionMenu.visible"
				class="instruction-menu"
				role="menu"
				aria-label="Manual instruction menu"
				:style="instructionMenuStyle"
			>
				<button v-for="option in instructionOptions" :key="option" type="button" class="instruction-menu__item" @click="chooseInstruction(option)">{{ option }}</button>
			</div>
		</section>

		<section class="playground-card">
			<div class="section-heading">
				<p class="section-kicker">Live summary</p>
				<h2>Replay configuration preview</h2>
				<p>This summary changes as the form changes, which makes it useful for verifying replay clarity after multiple input steps.</p>
			</div>
			<div class="preview-grid">
				<div class="preview-item">
					<span class="preview-label">Workflow</span>
					<strong>{{ form.workflowName || 'Not named yet' }}</strong>
				</div>
				<div class="preview-item">
					<span class="preview-label">Owner</span>
					<strong>{{ form.ownerEmail || 'No email entered' }}</strong>
				</div>
				<div class="preview-item">
					<span class="preview-label">Environment</span>
					<strong>{{ form.environment }}</strong>
				</div>
				<div class="preview-item">
					<span class="preview-label">Share level</span>
					<strong>{{ form.shareLevel }}</strong>
				</div>
				<div class="preview-item preview-item--full">
					<span class="preview-label">Capture modes</span>
					<strong>{{ form.captureModes.length ? form.captureModes.join(', ') : 'No modes selected' }}</strong>
				</div>
			</div>
		</section>
	</FlowrPlaygroundShell>
</template>

<script setup>
useSeoMeta({
	title: 'FlowR Playground | Form Capture Lab | Celestial Synthesis',
	description: 'A FlowR practice page for text fields, checkboxes, radio buttons, selects, and other common form elements.',
});

const captureOptions = [
	{ value: 'clicks', label: 'Clicks and taps' },
	{ value: 'keyboard', label: 'Keyboard entries' },
	{ value: 'hover', label: 'Hover and focus states' },
	{ value: 'scroll', label: 'Scroll checkpoints' },
];

const shareOptions = [
	{ value: 'Private', label: 'Private draft' },
	{ value: 'Team', label: 'Team replay access' },
	{ value: 'Public', label: 'Public demo link' },
];

const createInitialForm = () => ({
	workflowName: '',
	ownerEmail: '',
	replayUrl: '',
	runDate: '2026-04-02',
	note: '',
	environment: 'staging',
	speed: 3,
	captureModes: ['clicks', 'keyboard'],
	shareLevel: 'Team',
	includeScreenshots: true,
});

const form = reactive(createInitialForm());

const instructionMenu = reactive({
	visible: false,
	x: 0,
	y: 0,
	target: 'decision-controls section',
});

const instructionOptions = ['Add manual instruction', 'Add warning note', 'Add scroll guidance'];
const instructionFeedback = ref('Right-click the decision-controls card to practice adding a manual instruction without changing the live control values.');
const instructionMenuStyle = computed(() => ({
	left: `${instructionMenu.x}px`,
	top: `${instructionMenu.y}px`,
}));

const checklist = [
	'Record text, email, URL, date, and textarea inputs in one pass.',
	'Right-click the date field once so you can practice adding a manual instruction there too.',
	'Right-click the decision-controls card to add a manual instruction for checkbox, radio, dropdown, or slider content.',
	'Toggle at least one real control after that so you can compare the two recording approaches.',
	'Use the reset button to practice a second replay from a clean state.',
];

function resetForm() {
	Object.assign(form, createInitialForm());
	instructionFeedback.value = 'The form was reset. Right-click the decision-controls card to add a manual instruction from a clean state.';
}

function saveDraft() {
	instructionFeedback.value = `Draft saved for ${form.workflowName || 'unnamed walkthrough'} at ${form.speed}x replay speed.`;
}

function openInstructionMenu(event, target = 'decision-controls section') {
	const maxX = process.client ? Math.max(window.innerWidth - 240, 16) : event.clientX;
	const maxY = process.client ? Math.max(window.innerHeight - 180, 16) : event.clientY;
	instructionMenu.visible = true;
	instructionMenu.x = Math.min(event.clientX, maxX);
	instructionMenu.y = Math.min(event.clientY, maxY);
	instructionMenu.target = target;
	instructionFeedback.value = `Manual instruction menu opened for the ${target}.`;
}

function closeInstructionMenu() {
	instructionMenu.visible = false;
}

function chooseInstruction(option) {
	instructionFeedback.value = `${option} selected for the ${instructionMenu.target}.`;
	closeInstructionMenu();
}

onMounted(() => {
	window.addEventListener('click', closeInstructionMenu);
	window.addEventListener('scroll', closeInstructionMenu, { passive: true });
});

onBeforeUnmount(() => {
	window.removeEventListener('click', closeInstructionMenu);
	window.removeEventListener('scroll', closeInstructionMenu);
});
</script>

<style lang="scss" scoped>
.section-heading {
	margin-bottom: $spacing3;
}

.section-kicker,
.preview-label {
	margin: 0 0 0.4rem;
	font-size: $font-size8;
	font-weight: 700;
	letter-spacing: 0.03em;
	text-transform: uppercase;
	color: #8e5560;
}

.instruction-tip,
.manual-instruction-feedback {
	padding: $spacing2 $spacing3;
	border-radius: 1rem;
	background: rgba(248, 237, 240, 0.72);
	border: 1px solid rgba(141, 46, 58, 0.12);
	color: #7a4851;
}

.capture-form {
	display: grid;
	gap: $spacing3;
}

.field-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: $spacing3 $spacing2;
	align-items: start;

	@include media(xsm, sm) {
		grid-template-columns: 1fr;
	}
}

.field-grid--controls {
	margin-bottom: 0;
	padding: $spacing4;
	border-radius: 1.2rem;
	border: 1px solid rgba(141, 46, 58, 0.12);
	background: rgba(255, 248, 246, 0.62);
}

.manual-instruction-content {
	display: grid;
	gap: $spacing4;
	margin-top: $spacing3;
}

.field,
.choice-group,
.toggle-row {
	display: grid;
	gap: 0.55rem;
	align-content: start;
}

.field--full {
	grid-column: 1 / -1;
}

.field-label,
.choice-group legend {
	font-weight: 700;
	color: #5a1c24;
}


.field-control {
	display: flex;
	align-items: center;
	min-height: 4.75rem;
	padding: 0 clamp(1rem, 0.9rem + 0.3vw, 1.25rem);
	border-radius: 1.1rem;
	border: 1px solid rgba(141, 46, 58, 0.18);
	background: linear-gradient(180deg, rgba(255, 252, 251, 0.98) 0%, rgba(255, 248, 246, 0.94) 100%);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.82);
	transition: border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease;

	&:focus-within {
		border-color: rgba(141, 46, 58, 0.34);
		background: rgba(255, 252, 251, 1);
		box-shadow: 0 0 0 0.18rem rgba(141, 46, 58, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.92);
	}
	}

.field-control--textarea {
	align-items: stretch;
	min-height: 8.6rem;
	padding-block: $spacing2;
	}

.field-control--select {
	position: relative;
	padding-right: calc(#{$spacing3} + 1.2rem);

	&::after {
		content: '';
		position: absolute;
		right: 1.15rem;
		top: 50%;
		width: 0.6rem;
		height: 0.6rem;
		border-right: 2px solid rgba(90, 28, 36, 0.72);
		border-bottom: 2px solid rgba(90, 28, 36, 0.72);
		transform: translateY(-65%) rotate(45deg);
		pointer-events: none;
	}
	}

.field-control--range {
	padding-inline: 0.35rem;
	min-height: 4rem;
}

.field input,
.field textarea,
.field select {
	width: 100%;
	flex: 1 1 auto;
	box-sizing: border-box;
	min-height: 100%;
	padding: 0;
	border: 0;
	background: transparent;
	font: inherit;
	color: #4f2b32;
	outline: none;
	box-shadow: none;
	line-height: 1.4;
}

.field input[type='text'],
.field input[type='email'],
.field input[type='url'],

.field input[type='date'],
.field select,
.field textarea {
	appearance: none;
	-webkit-appearance: none;
	margin: 0;
	background-clip: padding-box;
}

.field input::placeholder,
.field textarea::placeholder {
	color: rgba(79, 43, 50, 0.64);
}

.field textarea {
	resize: vertical;
	min-height: 7rem;
	padding-top: 0.1rem;
}

.field input[type='range'] {
	min-height: auto;
	padding-inline: $spacing2;
	box-shadow: none;
	background: transparent;
}

.field select {
	padding-right: 1rem;
	cursor: pointer;
}

.field input[type='date'] {
	padding-right: 0.2rem;
	}

.field input[type='date']::-webkit-date-and-time-value {
	text-align: left;
	}

.field--date-instruction {
	cursor: context-menu;

	small {
		display: block;
		max-width: 30rem;
		color: #8e5560;
		line-height: 1.5;
	}
}

.manual-instruction-card {
	position: relative;
	cursor: context-menu;
}

.choice-group {
	margin: 0;
	padding: $spacing3;
	border-radius: 1rem;
	border: 1px solid rgba(141, 46, 58, 0.12);
	background: rgba(255, 248, 246, 0.7);
	display: grid;
	gap: $spacing1;
	height: 100%;
}

.choice-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: $spacing4;

	@include media(xsm, sm) {
		grid-template-columns: 1fr;
	}
}

.choice-row {
	display: flex;
	align-items: center;
	gap: clamp(0.9rem, 0.8rem + 0.3vw, 1.15rem);
	color: #7a4851;
	padding-block: $spacing1;

	input {
		width: 1.05rem;
		height: 1.05rem;
		margin: 0;
		flex: 0 0 auto;
	}

	span {
		flex: 1 1 auto;
		line-height: 1.45;
	}

	& + .choice-row {
		border-top: 1px solid rgba(141, 46, 58, 0.1);
	}
}

.toggle-row {
	display: grid;
	grid-template-columns: 1.15rem 1fr;
	align-items: center;
	column-gap: clamp(0.9rem, 0.8rem + 0.3vw, 1.15rem);
	color: #7a4851;
	padding: $spacing3;
	border-radius: 1rem;
	background: rgba(248, 237, 240, 0.72);
	border: 1px solid rgba(141, 46, 58, 0.12);
	justify-content: start;
}

.form-actions {
	display: flex;
	flex-wrap: wrap;
	gap: $spacing2;
	margin-top: $spacing3;
}

.form-btn {
	border: 0;
	border-radius: 999px;
	padding: $spacing1 $spacing3;
	font: inherit;
	font-weight: 700;
	cursor: pointer;
	transition: transform 160ms ease, background-color 160ms ease;

	&:hover {
		transform: translateY(-1px);
	}
}

.form-btn--primary {
	background: #8d2e3a;
	color: #fff;
}

.form-btn--secondary {
	background: #f7e9ec;
	color: #8d2e3a;
}

.preview-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: $spacing2;

	@include media(xsm, sm) {
		grid-template-columns: 1fr;
	}
}

.preview-item {
	padding: $spacing3;
	border-radius: 1rem;
	background: rgba(255, 248, 246, 0.86);
	border: 1px solid rgba(141, 46, 58, 0.12);

	strong {
		display: block;
		font-size: $font-size6;
		color: #5a1c24;
	}
}

.preview-item--full {
	grid-column: 1 / -1;
}

.instruction-menu {
	position: fixed;
	z-index: 130;
	min-width: 14rem;
	padding: 0.45rem;
	border-radius: 1rem;
	background: rgba(53, 32, 43, 0.96);
	box-shadow: 0 1.2rem 2.2rem rgba(53, 32, 43, 0.22);
	border: 1px solid rgba(255, 255, 255, 0.08);
}

.instruction-menu__item {
	display: block;
	width: 100%;
	padding: $spacing2;
	border: 0;
	border-radius: 0.8rem;
	background: transparent;
	color: #fff7f8;
	text-align: left;
	cursor: pointer;

	&:hover {
		background: rgba(255, 255, 255, 0.1);
	}
}
</style>