<template>
	<FlowrPlaygroundShell
		title="Recording warm-up surfaces"
		description="Start with obvious targets: buttons, hover cards, expanding details, and long scroll sections that are easy to record and easy to replay."
		:checklist="checklist"
	>
		<section class="playground-card">
			<div class="section-heading">
				<p class="section-kicker">Buttons</p>
				<h2>Button bank</h2>
				<p>Use this zone to capture clicks, hover states, and button sequencing in one recording. Every click updates the feedback panel so the step has an obvious result.</p>
			</div>
			<div class="button-bank" aria-label="Playground buttons">
				<button
					v-for="button in actionButtons"
					:key="button.label"
					type="button"
					class="action-btn"
					:class="[button.className, { 'is-active': activeButton === button.label }]"
					@click="triggerAction(button)"
				>
					{{ button.label }}
				</button>
			</div>
			<div class="segmented-control" role="group" aria-label="Capture mode">
				<button
					v-for="mode in captureModes"
					:key="mode"
					type="button"
					class="segment"
					:class="{ 'is-active': activeMode === mode }"
					@click="setMode(mode)"
				>
					{{ mode }}
				</button>
			</div>
			<div class="button-bank-status" aria-live="polite">
				<p class="status-label">Latest visible result</p>
				<strong>{{ latestAction }}</strong>
				<p>Current capture mode: {{ activeMode }}</p>
				<ul>
					<li v-for="entry in recentActions" :key="entry">{{ entry }}</li>
				</ul>
			</div>
		</section>

		<section class="playground-card">
			<div class="section-heading">
				<p class="section-kicker">Hover</p>
				<h2>Hover target gallery</h2>
				<p>Hover or tab through these cards to test highlight overlays and selector stability around nested content. During recording, right-click the hovered element when you want to capture a dedicated hover step.</p>
			</div>
			<p class="instruction-tip">Tip: right-click the hovered element while recording to explicitly add a hover step instead of relying on a later click.</p>
			<div class="hover-grid">
				<article v-for="card in hoverCards" :key="card.title" class="hover-card" tabindex="0">
					<p class="hover-card__eyebrow">{{ card.kicker }}</p>
					<h3>{{ card.title }}</h3>
					<p>{{ card.description }}</p>
				</article>
			</div>
		</section>

		<section class="playground-card">
			<div class="section-heading">
				<p class="section-kicker">Expanding content</p>
				<h2>Nested reveal patterns</h2>
				<p>These details blocks are useful for recording expansion behavior and replaying the correct order.</p>
			</div>
			<div class="detail-stack">
				<details v-for="item in detailsItems" :key="item.title" class="detail-item">
					<summary>{{ item.title }}</summary>
					<p>{{ item.body }}</p>
				</details>
			</div>
		</section>

		<section class="playground-card">
			<div class="section-heading">
				<p class="section-kicker">Scrolling</p>
				<h2>Long capture lane</h2>
				<p>Scroll through this vertical sequence to test whether recorded steps stay understandable when the page moves far below the fold.</p>
			</div>
			<div
				class="scroll-instruction-anchor"
				@contextmenu.prevent="openContextMenu($event, 'scroll instruction anchor')"
			>
				<p class="scroll-instruction-anchor__label">Manual instruction anchor</p>
				<p>Right-click this section during recording to add a manual instruction that tells the user to keep scrolling until this part of the page is visible.</p>
			</div>
			<div class="scroll-lane">
				<article v-for="checkpoint in checkpoints" :key="checkpoint.id" class="scroll-step">
					<div class="scroll-step__rail">
						<span class="checkpoint-card__number">{{ checkpoint.id }}</span>
					</div>
					<div class="scroll-step__body">
						<p class="scroll-step__eyebrow">Scroll checkpoint</p>
						<h3>{{ checkpoint.title }}</h3>
						<p>{{ checkpoint.description }}</p>
						<button type="button" class="checkpoint-card__action" @click="markScrollCheckpoint(checkpoint)">Mark for replay</button>
					</div>
				</article>
			</div>
			<p class="scroll-status" aria-live="polite">{{ scrollStatus }}</p>
		</section>

		<section class="playground-card">
			<div class="section-heading">
				<p class="section-kicker">Right-click practice</p>
				<h2>Custom menu sandbox</h2>
				<p>Right-click any tile below to open a custom helper menu. This gives users a safe place to practice the right-click gesture before they do it on a real page.</p>
			</div>
			<div class="menu-sandbox" aria-label="Right-click practice tiles">
				<button
					v-for="target in contextTargets"
					:key="target.title"
					type="button"
					class="context-menu-target"
					@contextmenu.prevent="openContextMenu($event, target.title)"
				>
					<p class="context-menu-target__kicker">{{ target.kicker }}</p>
					<h3>{{ target.title }}</h3>
					<p>{{ target.description }}</p>
				</button>
			</div>
			<p class="menu-feedback" aria-live="polite">{{ contextFeedback }}</p>
			<div
				v-if="contextMenu.visible"
				class="context-helper-menu"
				role="menu"
				aria-label="Instruction helper menu"
				:style="contextMenuStyle"
			>
				<button v-for="option in contextMenuOptions" :key="option" type="button" class="context-helper-menu__item" @click="chooseContextAction(option)">{{ option }}</button>
			</div>
		</section>
	</FlowrPlaygroundShell>
</template>

<script setup>
useSeoMeta({
	title: 'FlowR Playground | Recording Warm-Up | Celestial Synthesis',
	description: 'A multi-page FlowR playground for testing recording and replay on buttons, hover states, and long scrolling layouts.',
});

const checklist = [
	'Click several buttons and confirm the visible feedback panel changes each time.',
	'Hover the cards, then right-click the element you want to capture as a hover step.',
	'Expand the details blocks and verify the replay sequence.',
	'Right-click the scroll instruction anchor so the replay can tell users to keep scrolling.',
	'Open the custom helper menu at least once to practice the right-click gesture.',
];

const actionButtons = [
	{ label: 'Create walkthrough', className: 'action-btn--primary', feedback: 'Create walkthrough triggered a visible draft-created state.' },
	{ label: 'Preview tooltip', className: 'action-btn--secondary', feedback: 'Preview tooltip opened a visible helper state for the next step.' },
	{ label: 'Skip this step', className: 'action-btn--ghost', feedback: 'Skip this step moved the workflow forward without changing the rest of the mock page.' },
	{ label: 'Flag selector drift', className: 'action-btn--alert', feedback: 'Flag selector drift marked the current step for repair review.' },
	{ label: 'Add annotation', className: 'action-btn--pill', feedback: 'Add annotation created a visible note marker for the walkthrough.' },
];

const captureModes = ['Pointer', 'Keyboard', 'Hybrid'];
const activeButton = ref(actionButtons[0].label);
const activeMode = ref(captureModes[0]);
const latestAction = ref(actionButtons[0].feedback);
const recentActions = ref([
	'Create walkthrough triggered a visible draft-created state.',
	'Pointer mode is active for direct click capture.',
]);

const contextTargets = [
	{ kicker: 'Hover', title: 'Tooltip launcher tile', description: 'Practice right-clicking a small hover target after you pause on it.' },
	{ kicker: 'Instruction', title: 'Manual note tile', description: 'Open the helper menu and choose a manual instruction action for this region.' },
	{ kicker: 'Repair', title: 'Selector repair tile', description: 'Try the right-click menu on a card that looks more like a real product surface.' },
];

const contextMenu = reactive({
	visible: false,
	x: 0,
	y: 0,
	target: '',
});

const contextMenuOptions = ['Record hover step', 'Add manual instruction', 'Attach screenshot'];
const contextFeedback = ref('Right-click a tile or the scroll instruction anchor to open the helper menu.');
const scrollStatus = ref('No scroll checkpoint has been marked yet.');

const contextMenuStyle = computed(() => ({
	left: `${contextMenu.x}px`,
	top: `${contextMenu.y}px`,
}));

const hoverCards = [
	{ kicker: 'Menu', title: 'Primary navigation card', description: 'Useful for testing container-level hover states that wrap multiple text nodes.' },
	{ kicker: 'Tooltip', title: 'Context panel trigger', description: 'A good target when you want the replay step to explain why a user should pause here.' },
	{ kicker: 'Status', title: 'Checklist summary tile', description: 'Hover patterns often fail when a class changes after design polish, so this is a useful repair target.' },
	{ kicker: 'Export', title: 'Share workflow card', description: 'Nested headings, paragraphs, and focus states make this a realistic recording target.' },
];

const detailsItems = [
	{ title: 'Reveal onboarding notes', body: 'New operators usually need extra context before they begin a replay. This block simulates that progressive disclosure pattern.' },
	{ title: 'Reveal escalation rules', body: 'Use this to test whether FlowR catches the correct summary element and not just the surrounding section wrapper.' },
	{ title: 'Reveal maintenance hints', body: 'When a selector drifts, this kind of disclosure widget is a good place to practice step repair.' },
];

const checkpoints = [
	{ id: '01', title: 'Landing section handoff', description: 'Start the recording at the top, then move downward as if you were guiding a teammate through a long SOP.' },
	{ id: '02', title: 'Action highlight zone', description: 'Hover the card, click the button, and confirm the replay still points to the correct target after scroll movement.' },
	{ id: '03', title: 'Viewport change checkpoint', description: 'Pause here and use the instruction anchor above if the replay needs to tell the user to keep scrolling.' },
	{ id: '04', title: 'Near-fold decision point', description: 'This is a useful place to test sticky headers and whether the overlay avoids covering the next click target.' },
	{ id: '05', title: 'Deep scroll confirmation', description: 'Capture a step well below the fold so the replay has to scroll the user back into context.' },
	{ id: '06', title: 'Completion marker', description: 'Use the final card to confirm the walkthrough ends clearly and that the user understands what changed.' },
];

function prependAction(entry) {
	recentActions.value = [entry, ...recentActions.value.filter((item) => item !== entry)].slice(0, 4);
}

function triggerAction(button) {
	activeButton.value = button.label;
	latestAction.value = button.feedback;
	prependAction(button.feedback);
}

function setMode(mode) {
	activeMode.value = mode;
	prependAction(`${mode} mode is active for this capture rehearsal.`);
}

function markScrollCheckpoint(checkpoint) {
	scrollStatus.value = `${checkpoint.title} is marked. This is a good place to add a manual instruction telling users they must scroll to reach it.`;
	prependAction(`${checkpoint.title} was marked for replay review.`);
}

function openContextMenu(event, target) {
	const maxX = process.client ? Math.max(window.innerWidth - 230, 16) : event.clientX;
	const maxY = process.client ? Math.max(window.innerHeight - 180, 16) : event.clientY;
	contextMenu.visible = true;
	contextMenu.x = Math.min(event.clientX, maxX);
	contextMenu.y = Math.min(event.clientY, maxY);
	contextMenu.target = target;
	contextFeedback.value = `Helper menu opened for ${target}.`;
}

function closeContextMenu() {
	contextMenu.visible = false;
}

function chooseContextAction(option) {
	contextFeedback.value = `${option} selected for ${contextMenu.target}.`;
	prependAction(`${option} selected for ${contextMenu.target}.`);
	closeContextMenu();
}

onMounted(() => {
	window.addEventListener('click', closeContextMenu);
	window.addEventListener('scroll', closeContextMenu, { passive: true });
});

onBeforeUnmount(() => {
	window.removeEventListener('click', closeContextMenu);
	window.removeEventListener('scroll', closeContextMenu);
});
</script>

<style lang="scss" scoped>
.section-heading {
	margin-bottom: $spacing3;
}

.section-kicker,
.hover-card__eyebrow,
.checkpoint-card__number,
.status-label,
.scroll-step__eyebrow,
.context-menu-target__kicker {
	margin: 0 0 0.4rem;
	font-size: $font-size8;
	font-weight: 700;
	letter-spacing: 0.03em;
	text-transform: uppercase;
	color: #8e5560;
}

.instruction-tip,
.menu-feedback,
.scroll-status {
	padding: $spacing2 $spacing3;
	border-radius: 1rem;
	background: rgba(248, 237, 240, 0.72);
	border: 1px solid rgba(141, 46, 58, 0.12);
	color: #7a4851;
}

.button-bank {
	display: flex;
	flex-wrap: wrap;
	gap: $spacing2;
	margin-bottom: $spacing3;
}

.button-bank-status {
	margin-top: $spacing3;
	padding: $spacing3;
	border-radius: 1.1rem;
	background: rgba(255, 248, 246, 0.86);
	border: 1px solid rgba(141, 46, 58, 0.12);

	strong {
		display: block;
		font-size: $font-size6;
		color: #5a1c24;
		margin-bottom: $spacing2;
	}

	ul {
		margin: $spacing2 0 0;
		padding-left: 1.2rem;
	}
	}

.action-btn,
.segment,
.checkpoint-card__action {
	border: 0;
	border-radius: 999px;
	padding: $spacing1 $spacing3;
	font: inherit;
	font-weight: 700;
	cursor: pointer;
	transition: transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease, color 160ms ease;

	&:hover {
		transform: translateY(-1px);
	}
}

.action-btn.is-active {
	outline: 2px solid rgba(90, 28, 36, 0.28);
	outline-offset: 2px;
}

.action-btn--primary,
.checkpoint-card__action {
	background: #8d2e3a;
	color: #fff;
	box-shadow: 0 0.8rem 1.8rem rgba(141, 46, 58, 0.18);
}

.action-btn--secondary {
	background: #f7e9ec;
	color: #8d2e3a;
}

.action-btn--ghost {
	background: transparent;
	color: #8d2e3a;
	border: 1px solid rgba(141, 46, 58, 0.25);
}

.action-btn--alert {
	background: #35202b;
	color: #fff7f8;
}

.action-btn--pill {
	background: linear-gradient(135deg, #fff3ef 0%, #f8dfe2 100%);
	color: #5a1c24;
}

.segmented-control {
	display: inline-flex;
	flex-wrap: wrap;
	gap: 0.35rem;
	padding: 0.35rem;
	border-radius: 999px;
	background: #f8edef;
}

.segment {
	background: transparent;
	color: #7a4851;

	&.is-active,
	&:hover {
		background: #fff;
		color: #5a1c24;
		box-shadow: 0 0.4rem 1rem rgba(90, 28, 36, 0.1);
	}
}

.hover-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: $spacing2;

	@include media(xsm, sm) {
		grid-template-columns: 1fr;
	}
}

.hover-card {
	padding: $spacing3;
	border-radius: 1.2rem;
	border: 1px solid rgba(141, 46, 58, 0.12);
	background: linear-gradient(180deg, rgba(255, 250, 248, 0.96) 0%, rgba(250, 236, 239, 0.9) 100%);
	transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

	&:hover,
	&:focus-visible {
		transform: translateY(-4px) rotate(-0.4deg);
		border-color: rgba(141, 46, 58, 0.28);
		box-shadow: 0 1rem 2rem rgba(90, 28, 36, 0.1);
		outline: none;
	}
	}

.detail-stack {
	display: grid;
	gap: $spacing2;
}

.detail-item {
	padding: $spacing2 $spacing3;
	border-radius: 1rem;
	background: #fffaf8;
	border: 1px solid rgba(141, 46, 58, 0.12);

	summary {
		cursor: pointer;
		font-weight: 700;
		color: #5a1c24;
	}

	p {
		margin: $spacing2 0 0;
	}
}

.scroll-instruction-anchor {
	margin-bottom: $spacing3;
	padding: $spacing3;
	border-radius: 1.2rem;
	border: 1px dashed rgba(141, 46, 58, 0.3);
	background: linear-gradient(135deg, rgba(255, 248, 246, 0.92) 0%, rgba(248, 237, 240, 0.72) 100%);
	cursor: context-menu;

	&__label {
		margin: 0 0 0.4rem;
		font-size: $font-size8;
		font-weight: 700;
		letter-spacing: 0.03em;
		text-transform: uppercase;
		color: #8e5560;
	}
	}

.scroll-lane {
	display: grid;
	gap: $spacing3;
}


.scroll-step {
	display: grid;
	grid-template-columns: auto minmax(0, 1fr);
	gap: $spacing3;
	align-items: start;

	&:last-child .scroll-step__rail::after {
		display: none;
	}
	}

.scroll-step__rail {
	position: relative;
	padding-top: 0.1rem;

	&::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 3rem;
		bottom: -$spacing4;
		width: 1px;
		background: rgba(141, 46, 58, 0.18);
		transform: translateX(-50%);
	}
	}

.checkpoint-card__number {
	display: grid;
	place-items: center;
	width: 2.75rem;
	height: 2.75rem;
	margin: 0;
	border-radius: 999px;
	background: rgba(141, 46, 58, 0.12);
	color: #5a1c24;
	font-size: $font-size7;
	font-weight: 700;
	}

.scroll-step__body {
	padding: $spacing3;
	border-radius: 1.2rem;
	background: rgba(255, 248, 246, 0.86);
	border: 1px solid rgba(141, 46, 58, 0.12);
	min-height: 10rem;

	h3 {
		margin-bottom: $spacing1;
	}

	p {
		margin-bottom: $spacing3;
	}
	}

.menu-sandbox {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: $spacing2;

	@include media(xsm, sm) {
		grid-template-columns: 1fr;
	}
}

.context-menu-target {
	padding: $spacing3;
	border-radius: 1.2rem;
	border: 1px solid rgba(141, 46, 58, 0.12);
	background: rgba(255, 248, 246, 0.86);
	text-align: left;
	cursor: context-menu;
	transition: transform 180ms ease, box-shadow 180ms ease;

	&:hover {
		transform: translateY(-3px);
		box-shadow: 0 1rem 2rem rgba(90, 28, 36, 0.08);
	}
	}

.context-helper-menu {
	position: fixed;
	z-index: 130;
	min-width: 13rem;
	padding: 0.45rem;
	border-radius: 1rem;
	background: rgba(53, 32, 43, 0.96);
	box-shadow: 0 1.2rem 2.2rem rgba(53, 32, 43, 0.22);
	border: 1px solid rgba(255, 255, 255, 0.08);
	}

.context-helper-menu__item {
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