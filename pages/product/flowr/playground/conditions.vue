<template>
	<FlowrPlaygroundShell
		title="Conditional step lab"
		description="Practice FlowR conditional steps by changing which elements are visible and previewing whether a guarded step should run or be skipped."
		:checklist="checklist"
	>
		<section class="playground-card premium-card">
			<p class="premium-pill">Premium feature</p>
			<h2>Conditional steps for visible and not-visible logic</h2>
			<p>Conditional steps are a premium FlowR feature. During recording, right-click the step you want to guard, then set whether a target element must be visible or not visible before replay continues.</p>
			<p class="premium-note">Use the quick visibility toggles below while recording so you can deliberately show and hide elements before attaching the conditional rule.</p>
		</section>

		<section class="playground-card">
			<div class="section-heading">
				<p class="section-kicker">Condition builder</p>
				<h2>Simple visibility toggle playground</h2>
				<p>Pick whether the step should run when the target is visible or not visible, then use the single toggle below to show or hide the component. This keeps the conditional-step practice straightforward.</p>
			</div>
			<div class="visibility-toggle-panel">
				<p class="visibility-toggle-panel__kicker">Quick visibility toggles</p>
				<p>Turn the target component on or off while recording, then attach the conditional rule to the step you want FlowR to run or skip.</p>
				<div class="visibility-toggle-list visibility-toggle-list--single">
					<label class="visibility-checkbox">
						<input v-model="targetVisible" type="checkbox" />
						<span>Show confirmation banner</span>
					</label>
					<p class="visibility-state" aria-live="polite">Current state: {{ targetVisible ? 'Visible' : 'Hidden' }}</p>
				</div>
			</div>
			<div class="condition-layout">
				<div class="condition-builder">
					<label class="field">
						<span>Condition type</span>
						<select v-model="condition.operator">
							<option value="visible">Element is visible</option>
							<option value="not visible">Element is not visible</option>
						</select>
					</label>

					<div class="choice-group choice-group--instruction">
						<p class="choice-group__title">How to use this page</p>
						<p>1. Toggle the confirmation banner on or off.</p>
						<p>2. Record the step you want to guard.</p>
						<p>3. Set the conditional rule to visible or not visible.</p>
					</div>
				</div>

				<div class="mock-surface">
					<p class="mock-surface__kicker">Mock application surface</p>
					<div class="mock-surface__stage">
						<div v-if="targetVisible" class="mock-element">
							<h3>Confirmation banner</h3>
							<p>This component is currently visible. Use this state to test a “visible” conditional step.</p>
						</div>
						<p v-else class="mock-surface__empty">The confirmation banner is fully hidden right now. Use this state to test a “not visible” conditional step.</p>
					</div>

					<div class="condition-outcome" aria-live="polite">
						<p class="condition-outcome__kicker">Current outcome</p>
						<h3>{{ outcome.title }}</h3>
						<p>{{ outcome.description }}</p>
					</div>
				</div>
			</div>
		</section>
	</FlowrPlaygroundShell>
</template>

<script setup>
useSeoMeta({
	title: 'FlowR Playground | Conditional Steps | Celestial Synthesis',
	description: 'A FlowR premium playground page for practicing visible and not-visible conditional steps.',
});

const condition = reactive({
	operator: 'visible',
});

const targetVisible = ref(true);

const checklist = [
	'Notice that conditional steps are marked as a premium feature.',
	'Switch between visible and not-visible rules.',
	'Use the single on/off toggle to show and hide the target component while recording.',
	'Confirm the outcome changes between run and skip states.',
];

const stepRuns = computed(() => (
	condition.operator === 'visible' ? targetVisible.value : !targetVisible.value
));

const outcome = computed(() => {
	if (stepRuns.value) {
		return {
			title: 'Step will run',
			description: `The confirmation banner currently satisfies the “${condition.operator}” rule, so replay would continue into this step.`,
		};
	}

	return {
		title: 'Step will be skipped',
		description: `The confirmation banner does not satisfy the “${condition.operator}” rule right now, so replay would skip this step.`,
	};
});
</script>

<style lang="scss" scoped>
.section-heading {
	margin-bottom: $spacing3;
}

.section-kicker,
.condition-outcome__kicker,
.mock-surface__kicker,
.visibility-toggle-panel__kicker {
	margin: 0 0 0.4rem;
	font-size: $font-size8;
	font-weight: 700;
	letter-spacing: 0.03em;
	text-transform: uppercase;
	color: #8e5560;
}

.premium-card {
	background: linear-gradient(135deg, rgba(141, 46, 58, 0.08) 0%, rgba(255, 248, 246, 0.9) 100%);
}

.premium-pill {
	display: inline-flex;
	align-items: center;
	padding: 0.35rem 0.7rem;
	border-radius: 999px;
	background: rgba(141, 46, 58, 0.12);
	border: 1px solid rgba(141, 46, 58, 0.26);
	box-shadow: none;
	color: #6f1f2b;
	font-size: $font-size8;
	font-weight: 700;
	letter-spacing: 0.03em;
	text-transform: uppercase;
}

.premium-note {
	margin-top: $spacing2;
	padding: $spacing2 $spacing3;
	border-radius: 1rem;
	background: rgba(248, 237, 240, 0.76);
	border: 1px solid rgba(141, 46, 58, 0.14);
	color: #7a4851;
}

.visibility-toggle-panel {
	margin-bottom: $spacing3;
	padding: $spacing3;
	border-radius: 1.2rem;
	background: rgba(255, 248, 246, 0.86);
	border: 1px solid rgba(141, 46, 58, 0.12);
}

.visibility-toggle-list {
	display: grid;
	grid-template-columns: minmax(0, 1fr);
	gap: $spacing2;
	margin-top: $spacing2;
}

.visibility-toggle-list--single {
	max-width: 28rem;
}

.visibility-checkbox {
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	gap: $spacing2;
	padding: $spacing3;
	border: 1px solid rgba(141, 46, 58, 0.16);
	border-radius: 1rem;
	background: #fffaf8;
	color: #5a1c24;
	font-weight: 700;
	cursor: pointer;
}

.visibility-state {
	margin: 0;
	padding: $spacing2 $spacing3;
	border-radius: 1rem;
	background: rgba(248, 237, 240, 0.72);
	border: 1px solid rgba(141, 46, 58, 0.12);
	color: #7a4851;
}

.condition-layout {
	display: grid;
	grid-template-columns: minmax(16rem, 20rem) minmax(0, 1fr);
	gap: $spacing3;

	@include media(xsm, sm) {
		grid-template-columns: 1fr;
	}
}

.condition-builder,
.mock-surface {
	display: grid;
	gap: $spacing3;
}

.field,
.choice-group {
	display: grid;
	gap: 0.45rem;
}

.field span,
.choice-group legend {
	font-weight: 700;
	color: #5a1c24;
}

.field select {
	width: 100%;
	padding: $spacing2;
	border-radius: 0.9rem;
	border: 1px solid rgba(141, 46, 58, 0.18);
	background: #fffaf8;
	font: inherit;
	color: #4f2b32;
}

.choice-group {
	margin: 0;
	padding: $spacing3;
	border-radius: 1rem;
	border: 1px solid rgba(141, 46, 58, 0.12);
	background: rgba(255, 248, 246, 0.7);
}

.choice-group--instruction {
	gap: $spacing1;

	.choice-group__title,
	.choice-group__title + p {
		margin-top: 0;
	}
}

.choice-group__title {
	margin: 0 0 $spacing1;
	font-weight: 700;
	color: #5a1c24;
}

.mock-surface__stage {
	min-height: 11rem;
	display: grid;
	align-content: center;
}

.mock-element,
.condition-outcome {
	padding: $spacing3;
	border-radius: 1.2rem;
	background: rgba(255, 248, 246, 0.86);
	border: 1px solid rgba(141, 46, 58, 0.12);
}

.mock-surface__empty {
	margin: 0;
	padding: $spacing3;
	border-radius: 1.2rem;
	border: 1px dashed rgba(141, 46, 58, 0.22);
	background: rgba(248, 237, 240, 0.52);
	color: #7a4851;
}

.condition-outcome {
	background: rgba(141, 46, 58, 0.08);

	h3 {
		margin-bottom: $spacing1;
	}
}
</style>