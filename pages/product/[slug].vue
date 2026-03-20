<template>
	<main :key="route.params.slug" class="product-page">
		<section class="product-hero band-hero">
			<div class="section-inner hero-inner">
				<div class="product-copy">
					<p class="section-eyebrow">Product Detail</p>
					<h1>{{ product.title }}</h1>
					<p class="lead">{{ product.description }}</p>
					<div class="hero-actions">
						<NuxtLink class="btn btn-primary" to="/contact">Discuss this product</NuxtLink>
						<NuxtLink class="btn btn-secondary" to="/products">View all products</NuxtLink>
					</div>
					<p class="hero-note">Guided workflow capture, replay, and maintenance for teams that need operational knowledge to stay usable.</p>
				</div>
				<div class="hero-rail">
					<div class="hero-panel">
						<p class="panel-label">Built For Repeatable Browser Work</p>
						<MediaRespImage :url="product.image" :lightbox="true" :color="imageAccentColor" />
					</div>
					<div class="hero-stat-grid">
						<article v-for="item in productHighlights" :key="item.title">
							<span>{{ item.number }}</span>
							<h2>{{ item.title }}</h2>
							<p>{{ item.description }}</p>
						</article>
					</div>
				</div>
			</div>
		</section>

		<section v-if="isFlowR" class="product-lanes band-light" aria-label="FlowR product strengths">
			<div class="section-inner">
				<header class="section-header section-header--compact">
					<p class="section-eyebrow">Why Teams Use FlowR</p>
					<h2>A product page with the same landing-page rhythm as the rest of the site.</h2>
				</header>
				<div class="lane-grid">
					<article v-for="lane in flowrLanes" :key="lane.title" class="lane-card">
						<p class="lane-kicker">{{ lane.kicker }}</p>
						<h3>{{ lane.title }}</h3>
						<p>{{ lane.description }}</p>
					</article>
				</div>
			</div>
		</section>

		<section class="product-content band-white">
			<div class="section-inner content-inner">
				<div class="content-shell">
					<header class="section-header">
						<p class="section-eyebrow">Product Overview</p>
						<h2>What the product does, where it fits, and how teams use it.</h2>
					</header>
					<MDC :value="product.content" />
				</div>
				<aside class="content-aside">
					<div class="aside-card">
						<p class="lane-kicker">Good Fit For</p>
						<ul>
							<li v-for="useCase in productUseCases" :key="useCase">{{ useCase }}</li>
						</ul>
					</div>
					<div class="aside-card aside-card--accent">
						<img class="aside-illustration" src="/images/products/flowr-cover.svg" width="1400" height="840" alt="FlowR illustration" />
						<p class="lane-kicker">Next Step</p>
						<h3>See how FlowR would map to your workflow.</h3>
						<p>We can walk through the browser processes your team repeats most often and show where FlowR removes handoff friction.</p>
						<NuxtLink class="text-link" to="/contact">Talk to the team</NuxtLink>
					</div>
				</aside>
			</div>
		</section>

		<section class="product-cta band-accent">
			<div class="section-inner cta-inner">
				<p class="section-eyebrow">Need A Closer Look?</p>
				<h2>Bring us your workflow and we’ll show where capture, replay, and maintenance become easier.</h2>
				<div class="hero-actions hero-actions--centered">
					<NuxtLink class="btn btn-primary" to="/contact">Request a walkthrough</NuxtLink>
					<NuxtLink class="btn btn-secondary" to="/about">Read our approach</NuxtLink>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup>
const route = useRoute();
const isFlowR = computed(() => route.params.slug === "flow-r");

const { data: product } = reactive(await useAsyncData("product", () =>
	queryContent("/products", route.params.slug).findOne())
);

useSeoMeta({
	title: computed(() => product.value?.title ? `${product.value.title} | Celestial Synthesis` : "Product | Celestial Synthesis"),
	description: computed(() => product.value?.description || "Product details from Celestial Synthesis."),
});

const productHighlights = computed(() => {
	if (isFlowR.value) {
		return [
			{ number: "01", title: "Capture Clearly", description: "Record clicks, inputs, and browser steps without relying on static documentation alone." },
			{ number: "02", title: "Replay With Guidance", description: "Guide teammates through the exact workflow with context, highlights, and step-by-step direction." },
			{ number: "03", title: "Maintain Over Time", description: "Repair or re-record broken steps as interfaces evolve so workflows stay useful." },
		];
	}

	return [
		{ number: "01", title: "Clear Positioning", description: "A structured product page that explains the value, fit, and next step without clutter." },
		{ number: "02", title: "Practical Usage", description: "The core product content stays readable while the page carries more brand structure." },
		{ number: "03", title: "Consistent Experience", description: "The visual language now aligns more closely with the homepage and other landing pages." },
	];
});

const flowrLanes = [
	{ kicker: "Recording", title: "Capture the workflow once", description: "Turn browser interactions into reusable guided walkthroughs your team can actually revisit." },
	{ kicker: "Replay", title: "Guide the next person through it", description: "Surface the right step, at the right moment, with less interpretation required from the user." },
	{ kicker: "Maintenance", title: "Keep it current as interfaces move", description: "Fix broken steps and keep workflow knowledge current instead of letting it decay in docs." },
];

const productUseCases = computed(() => {
	if (isFlowR.value) {
		return [
			"Customer onboarding and implementation walkthroughs",
			"Internal operations that rely on browser tools",
			"Training and handoff for repeatable web workflows",
			"Support teams that need fast, consistent reproduction steps",
		];
	}

	return [
		"Teams evaluating where the product fits",
		"Buyers who need a clear overview before a conversation",
		"Operators looking for a direct next step",
	];
});

const imageAccentColor = computed(() => isFlowR.value ? "#8d2e3a" : undefined);
</script>

<style lang="scss">
.product-page {
	--product-accent: #8d2e3a;
	--product-accent-soft: #7a3a42;
	--product-heading: #5a1c24;
	--product-light: #fbf5f6;
	--product-paper: #fff7f8;
	--product-panel: rgba(255, 248, 249, 0.92);
	--product-border: #e8d7da;
	position: relative;
	margin-inline: calc(50% - 50vw);
	width: auto;
	padding: 0;

	.section-inner {
		max-width: 86em;
		margin-inline: auto;
		padding: $spacing9 $spacing4;

		@include media(xsm, sm) {
			padding: $spacing6 $spacing4;
		}
	}

	.section-eyebrow,
	.lane-kicker,
	.panel-label {
		font-size: $font-size8;
		font-weight: 600;
		letter-spacing: 0.01em;
		color: var(--product-accent-soft);
	}

	h1,
	h2,
	h3 {
		color: var(--product-heading);
		margin-top: 0;
	}

	h1::before {
		background-image: linear-gradient(var(--product-accent), #d98995);
	}

	p,
	li {
		color: var(--product-accent-soft);
	}

	a:not(.btn):not(.text-link),
	a:not(.btn):not(.text-link):link,
	a:not(.btn):not(.text-link):visited,
	.content-shell a,
	.content-shell a:link,
	.content-shell a:visited,
	.content-shell a[href^="http"],
	.content-shell a[href^="http"]:link,
	.content-shell a[href^="http"]:visited,
	.content-shell a[href^="mailto:"],
	.content-shell a[href^="mailto:"]:link,
	.content-shell a[href^="mailto:"]:visited {
		color: var(--product-accent);
		font-weight: 600;
		text-decoration: underline;
		text-decoration-thickness: 0.08em;
		text-underline-offset: 0.16em;
		text-decoration-color: rgba(141, 46, 58, 0.38);
		transition: color 180ms ease, text-decoration-color 180ms ease;
	}

	a:not(.btn):not(.text-link):hover,
	.content-shell a:hover,
	.content-shell a[href^="http"]:hover,
	.content-shell a[href^="mailto:"]:hover {
		color: var(--product-heading);
		text-decoration-color: var(--product-accent);
	}

	.lead {
		font-size: clamp(1.1rem, 0.95rem + 0.5vw, 1.5rem);
		line-height: 1.65;
		max-width: 34em;
	}

	.hero-actions {
		display: flex;
		gap: $spacing2;
		flex-wrap: wrap;
		margin-top: $spacing3;
	}

	.hero-actions--centered {
		justify-content: center;
	}

	.btn {
		display: inline-block;
		padding: $spacing1 $spacing3;
		border-radius: 999px;
		font-weight: 600;
	}

	.btn-primary {
		background: var(--product-accent);
		color: $white;
		border: 1px solid var(--product-accent);
	}

	.btn-primary,
	.btn-primary:link,
	.btn-primary:visited {
		color: $white;
	}

	.btn-secondary {
		border: 1px solid currentColor;
		color: var(--product-accent);
	}

	.btn-secondary,
	.btn-secondary:link,
	.btn-secondary:visited,
	.hero-actions .btn-secondary,
	.hero-actions .btn-secondary:link,
	.hero-actions .btn-secondary:visited {
		color: var(--product-accent);
	}

	a.text-link,
	a.text-link:link,
	a.text-link:visited {
		font-weight: 600;
		color: var(--product-accent);
		text-decoration: none;
	}

	a.text-link:hover {
		color: var(--product-heading);
	}

	.band-hero {
		background: #f7ecee;
	}

	.band-light {
		background: #fbf5f6;
	}

	.band-white {
		background: $white;
	}

	.band-accent {
		background: #f3e7ea;
	}

	.hero-inner {
		display: grid;
		grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
		gap: $spacing7;
		align-items: center;
		min-height: 44em;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
			gap: $spacing4;
			min-height: auto;
		}
	}

	.product-copy {
		padding-block: $spacing4;

		h1 {
			font-size: clamp(3rem, 2.1rem + 2.8vw, 5.6rem);
			line-height: 0.95;
			max-width: 7ch;
			margin-bottom: $spacing3;
		}
	}

	.hero-note {
		margin-top: $spacing3;
		font-size: $font-size6;
		max-width: 34em;
	}

	.hero-rail {
		display: grid;
		gap: $spacing3;
		min-width: 0;
	}

	.hero-panel,
	.lane-card,
	.aside-card,
	.hero-stat-grid article {
		border-radius: $border-radius3;
		background: #fff7f8;
		box-shadow: 0 1.2em 2.4em rgba(69, 22, 30, 0.07);
		min-width: 0;
	}

	.hero-panel {
		padding: $spacing3;
		overflow: hidden;

		:deep(img) {
			width: 100%;
			height: auto;
			display: block;
			border-radius: calc($border-radius3 - 0.35rem);
		}

		:deep(.responsive-image) {
			min-width: 0;
		}
	}

	.hero-stat-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: $spacing2;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
		}

		article {
			padding: $spacing3;
		}

		span {
			display: inline-block;
			margin-bottom: $spacing1;
			font-weight: 700;
			color: var(--product-accent);
		}

		h2 {
			font-size: $font-size5;
			margin-bottom: $spacing1;
		}
	}

	.section-header {
		max-width: 46em;
		margin-bottom: $spacing5;
	}

	.section-header--compact {
		max-width: 40em;
	}

	.lane-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: $spacing3;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
		}
	}

	.lane-card {
		padding: $spacing3;
	}

	.content-inner {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(18em, 0.8fr);
		gap: $spacing4;
		align-items: start;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
		}
	}

	.content-shell {
		padding: $spacing5;
		border-radius: $border-radius3;
		background: var(--product-paper);
		box-shadow: 0 1em 2em rgba(69, 22, 30, 0.05);

		@include media(xsm, sm) {
			padding: $spacing4;
		}
	}

	.content-aside {
		display: grid;
		gap: $spacing3;
		position: sticky;
		top: 8.5rem;

		@include media(xsm, sm) {
			position: static;
		}
	}

	.aside-card {
		padding: $spacing3;

		ul {
			padding-left: 1.2rem;
			margin: $spacing2 0 0;
		}
	}

	.aside-card--accent {
		background: #f8edf0;
	}

	.aside-illustration {
		width: 100%;
		height: auto;
		display: block;
		margin-bottom: $spacing2;
		border-radius: $border-radius2;
		background: rgba(255, 255, 255, 0.55);
	}

	.content-shell,
	.aside-card,
	.lane-card,
	.hero-panel,
	.hero-stat-grid article {
		backdrop-filter: blur(10px);
	}

	.cta-inner {
		text-align: center;

		h2 {
			max-width: 16ch;
			margin: 0 auto $spacing3;
		}
	}

	.content-shell h2,
	.content-shell h3,
	.content-shell strong {
		color: var(--product-heading);
	}

	.content-shell p,
	.content-shell li,
	.content-shell ol,
	.content-shell ul {
		color: var(--product-accent-soft);
	}

	.content-shell ul {
		padding-left: 1.2rem;
	}

}
</style>