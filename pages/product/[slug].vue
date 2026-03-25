<template>
	<main :key="route.params.slug" class="product-page">
		<template v-if="isFlowR">
			<section class="flowr-hero band-hero">
				<div class="section-inner flowr-hero-shell">
					<div class="flowr-hero-copy">
						<p class="section-eyebrow">{{ resolvedProduct.title }}</p>
						<h1>Clarity for browser workflows.</h1>
						<p class="lead">{{ resolvedProduct.description }} Capture the steps once, guide the next person with context, and keep the workflow usable as interfaces change.</p>
						<div class="hero-actions">
							<a class="btn btn-primary" :href="chromeStoreUrl" target="_blank" rel="noreferrer">Start free on Chrome</a>
							<NuxtLink class="btn btn-secondary" to="/contact">Get a custom solution</NuxtLink>
						</div>
						<p class="browser-note" aria-label="Browser availability">Available on Chrome now. Safari and Firefox coming soon.</p>
					</div>
					<div class="flowr-hero-art">
						<div class="flowr-hero-visual">
							<img class="hero-preview-image" src="/images/products/flowr-illustration.webp" width="1400" height="840" alt="FlowR illustration" />
						</div>
					</div>
				</div>
			</section>

			<section class="flowr-features band-white" aria-label="FlowR key features">
				<div class="section-inner flowr-section-inner">
					<header class="section-header section-header--wide">
						<p class="section-eyebrow">Key Features</p>
						<h2>Core capabilities, presented without extra noise.</h2>
					</header>
					<div class="feature-stack">
						<article v-for="feature in flowrFeatures" :key="feature.title" class="feature-row">
							<p class="feature-index">{{ feature.number }}</p>
							<div>
								<p class="feature-kicker">{{ feature.kicker }}</p>
								<h3>{{ feature.title }}</h3>
							</div>
							<p class="feature-description">{{ feature.description }}</p>
						</article>
					</div>
				</div>
			</section>

			<section class="flowr-comparison band-light" aria-label="FlowR compared with screen recording">
				<div class="section-inner flowr-section-inner">
					<header class="section-header section-header--wide">
						<p class="section-eyebrow">Comparison</p>
						<h2>What changes when replay is guided, not passive.</h2>
						<p>FlowR is built for repeatable browser tasks. Video still works for quick one-off demos.</p>
					</header>
					<div class="comparison-table-wrap">
						<table class="comparison-table" aria-label="FlowR comparison table">
							<thead>
								<tr>
									<th scope="col">Aspect</th>
									<th scope="col">FlowR</th>
									<th scope="col">Conventional screen recording</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="row in flowrComparisonRows" :key="row.aspect">
									<th scope="row">{{ row.aspect }}</th>
									<td>{{ row.flowr }}</td>
									<td>{{ row.recording }}</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="comparison-mobile-list" aria-label="FlowR comparison cards">
						<article v-for="row in flowrComparisonRows" :key="`${row.aspect}-mobile`" class="comparison-mobile-card">
							<h3>{{ row.aspect }}</h3>
							<div class="comparison-mobile-entry comparison-mobile-entry--flowr">
								<p class="comparison-mobile-label">FlowR</p>
								<p>{{ row.flowr }}</p>
							</div>
							<div class="comparison-mobile-entry comparison-mobile-entry--recording">
								<p class="comparison-mobile-label">Conventional screen recording</p>
								<p>{{ row.recording }}</p>
							</div>
						</article>
					</div>
				</div>
			</section>

			<section class="flowr-faq band-white" aria-label="FlowR frequently asked questions">
				<div class="section-inner flowr-section-inner">
					<header class="section-header section-header--wide">
						<p class="section-eyebrow">FAQ</p>
						<h2>Practical questions, answered clearly.</h2>
					</header>
					<div class="faq-list">
						<article v-for="item in flowrFaqs" :key="item.question" class="faq-item">
							<h3>{{ item.question }}</h3>
							<p>{{ item.answer }}</p>
						</article>
					</div>
				</div>
			</section>

			<section class="flowr-cta band-accent">
				<div class="section-inner flowr-cta-inner">
					<p class="section-eyebrow">Start Free</p>
					<h2>Put it into a real workflow and see how much easier it becomes to guide, repeat, and hand off.</h2>
					<div class="hero-actions hero-actions--centered">
						<a class="btn btn-primary" :href="chromeStoreUrl" target="_blank" rel="noreferrer">Start free</a>
						<NuxtLink class="btn btn-secondary" to="/contact">Get a custom solution</NuxtLink>
					</div>
				</div>
			</section>

			<section class="product-legal band-white" aria-label="Legal links">
				<div class="section-inner legal-inner">
					<p>
						Looking for policy details?
						<NuxtLink class="legal-link" to="/product/flowr/privacy">Privacy Policy</NuxtLink>
						and
						<NuxtLink class="legal-link" to="/product/flowr/terms">Terms of Use</NuxtLink>.
					</p>
				</div>
			</section>
		</template>

		<template v-else-if="resolvedProduct">
			<section class="product-hero band-hero">
				<div class="section-inner hero-inner">
					<div class="product-copy">
						<p class="section-eyebrow">Product Detail</p>
						<h1>{{ resolvedProduct.title }}</h1>
						<p class="lead">{{ resolvedProduct.description }}</p>
						<div class="hero-actions">
							<NuxtLink class="btn btn-primary" to="/contact">Discuss this product</NuxtLink>
							<NuxtLink class="btn btn-secondary" to="/products">View all products</NuxtLink>
						</div>
					</div>
					<div class="hero-panel">
						<p class="panel-label">Built For Repeatable Browser Work</p>
						<MediaRespImage :url="resolvedProduct.image" :lightbox="true" :color="imageAccentColor" />
					</div>
				</div>
			</section>

			<section class="product-content band-white">
				<div class="section-inner content-inner content-inner--single">
					<div class="content-shell">
						<header class="section-header section-header--compact">
							<p class="section-eyebrow">Product Overview</p>
							<h2>What the product does, where it fits, and how teams use it.</h2>
						</header>
						<MDC :value="resolvedProduct.content" />
					</div>
				</div>
			</section>

			<section class="product-cta band-accent">
				<div class="section-inner cta-inner">
					<p class="section-eyebrow">Need A Closer Look?</p>
					<h2>Bring us your workflow and we’ll show where capture, replay, and maintenance become easier.</h2>
					<div class="hero-actions hero-actions--centered">
						<NuxtLink class="btn btn-primary" to="/contact">Get a custom solution</NuxtLink>
						<NuxtLink class="btn btn-secondary" to="/about">Read our approach</NuxtLink>
					</div>
				</div>
			</section>
		</template>

		<template v-else>
			<section class="product-content band-white">
				<div class="section-inner content-inner content-inner--single">
					<div class="content-shell">
						<header class="section-header section-header--compact">
							<p class="section-eyebrow">Product Unavailable</p>
							<h2>This product page is not available right now.</h2>
						</header>
						<p>Please return to the products page or contact us if you need details about this product.</p>
						<div class="hero-actions">
							<NuxtLink class="btn btn-primary" to="/products">View all products</NuxtLink>
							<NuxtLink class="btn btn-secondary" to="/contact">Talk to the team</NuxtLink>
						</div>
					</div>
				</div>
			</section>
		</template>
	</main>
</template>

<script setup>
const route = useRoute();
const routeSlug = computed(() => String(route.params.slug || ""));
const isFlowR = computed(() => routeSlug.value === "flowr");
const contentSlug = computed(() => routeSlug.value);
const chromeStoreUrl = "https://example.com/flowr-chrome";

const flowrProductFallback = {
	title: "FlowR",
	description: "Record and replay guided website workflows with clarity and control.",
	image: "/images/products/flowr-illustration.webp",
	content: `## Value Proposition

FlowR helps teams turn browser workflows into reusable guided walkthroughs that are easier to share, replay, and maintain than static documentation.

## Where FlowR Fits

FlowR works well when teams need to explain repeatable browser tasks across onboarding, support, internal operations, and training handoff.

## Privacy and Security Notes

FlowR is local-first by default, with optional cloud sync for collaboration. Privacy and security expectations should still be reviewed against your setup, operating requirements, and legal guardrails.

## Get Started

FlowR is available first as a Chrome extension, with Safari and Firefox support planned.

If you need a tailored walkthrough for your team, contact us at [contact@celestialsynthesis.com](mailto:contact@celestialsynthesis.com).`,
};

const { data: product } = await useAsyncData("product", () =>
	queryContent("/products", contentSlug.value).findOne()
);

const resolvedProduct = computed(() => product.value || (isFlowR.value ? flowrProductFallback : null));

useSeoMeta({
	title: computed(() => resolvedProduct.value?.title ? `${resolvedProduct.value.title} | Celestial Synthesis` : "Product | Celestial Synthesis"),
	description: computed(() => resolvedProduct.value?.description || "Product details from Celestial Synthesis."),
});

const flowrFeatures = [
	{ number: "01", kicker: "Capture", title: "Workflow recording", description: "Record clicks, inputs, navigation, and user actions so repeated browser tasks can be captured once and reused." },
	{ number: "02", kicker: "Guide", title: "Guided replay", description: "Replay workflows with highlights and contextual step instructions so the next person knows where to focus." },
	{ number: "03", kicker: "Maintain", title: "Step fixing", description: "Repair workflows when interfaces change so your process knowledge does not decay with each product update." },
	{ number: "04", kicker: "Share", title: "Team access", description: "Share workflows across the team with permission-aware access so the right people can view and maintain them." },
	{ number: "05", kicker: "Document", title: "Screenshot and export support", description: "Capture supporting screenshots and export material when workflows need to be handed off or documented outside the extension." },
];

const flowrComparisonRows = [
	{ aspect: "Live guidance", flowr: "Guides users on the live site, step by step.", recording: "Shows a video, so users map it back to the live page themselves." },
	{ aspect: "Updating after changes", flowr: "Fix a step without rebuilding the whole workflow.", recording: "Changes often mean rerecording the video." },
	{ aspect: "Finding the right step", flowr: "Jump straight to the step you need.", recording: "Scrub and rewind to find the right moment." },
	{ aspect: "File size", flowr: "Stores steps and instructions, so files stay smaller.", recording: "Stores full video, so files are usually larger." },
	{ aspect: "Multiple instruction languages", flowr: "Reuse one workflow with localized instructions.", recording: "Usually requires separate videos, subtitles, or voiceovers." },
	{ aspect: "Team handoff", flowr: "Built for repeatable onboarding, support, and training.", recording: "Useful for one-offs, but harder to keep current." },
];

const flowrFaqs = [
	{ question: "What is FlowR?", answer: "FlowR is a browser extension for recording website walkthroughs and turning them into guided, replayable experiences that other people can actually follow." },
	{ question: "How does FlowR work?", answer: "You start a recording, move through the workflow you want to teach, and FlowR captures each step. That walkthrough can then be replayed with on-page highlights, tooltips, and step instructions." },
	{ question: "Who is FlowR for?", answer: "FlowR is built for product, customer success, support, operations, onboarding, and training teams. It also works well for anyone who needs to explain a website process clearly to people who are less comfortable navigating digital tools." },
	{ question: "What can I create with FlowR?", answer: "You can create guided walkthroughs for onboarding, internal SOPs, support responses, product demos, training flows, and other repeatable operational processes." },
	{ question: "What actions can FlowR record?", answer: "FlowR records common website interactions such as clicks, text input, page navigation, hover states, scrolling, and keyboard-driven steps." },
	{ question: "How can I record hover, right-click, or scroll steps?", answer: "Right-click the webpage element and choose the action you want to capture." },
	{ question: "Can I replay walkthroughs on a live website?", answer: "Yes. FlowR replays the steps directly in the browser so the walkthrough stays anchored to the actual interface people are using." },
	{ question: "Can I edit a walkthrough after I record it?", answer: "Yes. You can revise instructions, adjust steps, insert new ones, and keep a walkthrough current as the product or process changes." },
	{ question: "What if a website changes and a recorded step stops working?", answer: "FlowR is designed for that reality. You can repair or re-record individual steps instead of rebuilding the full walkthrough from the beginning." },
	{ question: "Can I include screenshots in my walkthroughs?", answer: "Yes. FlowR supports optional screenshots when a step needs extra visual context or a clearer handoff." },
	{ question: "Can I share walkthroughs with my team?", answer: "Yes. Walkthroughs can be shared with teammates so they can be reviewed, reused, and distributed without repeating the explanation manually each time." },
	{ question: "Can I control who can edit a shared walkthrough?", answer: "Yes. Shared walkthroughs can support different permission levels, including view-only and editable access, depending on the plan you are using." },
	{ question: "Do I need an account to use FlowR?", answer: "Not for basic local use. You can create and manage walkthroughs locally, then sign in when you need sync, sharing, or account-based collaboration features." },
	{ question: "Where are my recordings stored?", answer: "Recordings can stay local inside the extension, with optional cloud-backed sync available for signed-in users who need shared access across a team or devices." },
	{ question: "Can I export a walkthrough as a PDF?", answer: "Yes. FlowR can generate a PDF version of a walkthrough for handoffs, documentation, or situations where an offline copy is useful." },
	{ question: "Does FlowR support multiple languages?", answer: "Yes. FlowR supports localized step instructions so walkthroughs can be adapted for different teams, audiences, and regions." },
	{ question: "How does FlowR handle password fields?", answer: "FlowR treats password steps separately and avoids storing the actual password value, which helps keep sensitive inputs out of the recorded data." },
	{ question: "Can I sync recordings across devices?", answer: "Yes. Signed-in users can sync recordings so their walkthrough library is available beyond a single browser session." },
];

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
	.panel-label,
	.feature-kicker {
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

	a:not(.btn):not(.text-link):not(.legal-link),
	a:not(.btn):not(.text-link):not(.legal-link):link,
	a:not(.btn):not(.text-link):not(.legal-link):visited,
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

	a:not(.btn):not(.text-link):not(.legal-link):hover,
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

	a.legal-link:hover {
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

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
			gap: $spacing4;
		}
	}

	.flowr-hero {
		padding-top: 0;
	}

	.flowr-hero-shell {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.8fr);
		gap: clamp(1.75rem, 1.2rem + 1.4vw, 3.5rem);
		align-items: center;
		padding-block: $spacing3 $spacing5;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
			padding-block: $spacing2 $spacing4;
		}
	}

	.flowr-hero-copy,
	.product-copy {
		text-align: left;

		h1 {
			font-size: clamp(3rem, 2.1rem + 2.8vw, 5.6rem);
			line-height: 0.98;
			max-width: 9ch;
			margin-inline: 0;
			margin-bottom: $spacing3;
		}
	}

	.flowr-hero-copy {
		max-width: 46em;
		padding-top: $spacing2;
	}

	.flowr-hero-copy .lead {
		max-width: 34em;
		margin-inline: 0;
	}

	.flowr-hero-copy .hero-actions {
		justify-content: flex-start;
	}

	.browser-note {
		margin-top: $spacing2;
		font-size: $font-size8;
		line-height: 1.6;
		color: var(--product-accent-soft);
	}

	.flowr-hero-art {
		display: flex;
		align-items: center;
		justify-content: center;
		justify-self: center;
		padding-top: 0;

		@include media(xsm, sm) {
			justify-content: center;
			justify-self: center;
			padding-top: 0;
		}
	}

	.flowr-hero-visual {
		position: relative;
		width: min(100%, 34rem);
		padding: clamp(0.85rem, 0.55rem + 1vw, 1.5rem) clamp(0.9rem, 0.45rem + 1vw, 1.5rem) 0 0;

		@include media(xsm, sm) {
			width: min(100%, 26rem);
			padding-right: 0;
		}

		.panel-label {
			display: inline-block;
			margin-bottom: $spacing2;
		}
	}

	.hero-preview-image,
	.preview-frame :deep(img) {
		width: 100%;
		height: auto;
		display: block;
		border-radius: $border-radius3;
	}

	.flowr-hero-visual .hero-preview-image {
		position: relative;
		width: 100%;
		height: auto;
		display: block;
		border-radius: $border-radius3;
		background: rgba(255, 255, 255, 0.5);
		box-shadow: 0 1.25em 2.4em rgba(30, 43, 61, 0.08);
		z-index: 1;
	}

	.section-header {
		margin-bottom: $spacing5;

		p:last-child {
			font-size: $font-size6;
			line-height: 1.7;
		}
	}

	.section-header--compact {
		max-width: 40em;
	}


	.flowr-section-inner {
		max-width: 70em;
	}

	.feature-stack,
	.faq-list {
		border-top: 1px solid rgba(141, 46, 58, 0.14);
	}

	.comparison-table-wrap {
		overflow-x: auto;

		@include media(xsm, sm) {
			display: none;
		}
	}

	.comparison-mobile-list {
		display: none;

		@include media(xsm, sm) {
			display: grid;
			gap: $spacing2;
		}
	}

	.comparison-mobile-card {
		padding: $spacing2 0;
		border-top: 1px solid rgba(141, 46, 58, 0.14);

		h3 {
			margin-bottom: $spacing2;
			font-size: $font-size7;
		}

		&:last-child {
			border-bottom: 1px solid rgba(141, 46, 58, 0.14);
		}
	}

	.comparison-mobile-entry {
		padding: $spacing2;
		border-radius: $border-radius1;
		background: rgba(255, 255, 255, 0.72);

		p:last-child {
			margin-bottom: 0;
			font-size: $font-size7;
			line-height: 1.55;
		}
		
		& + & {
			margin-top: $spacing1;
		}
	}

	.comparison-mobile-entry--flowr {
		background: rgba(141, 46, 58, 0.08);
	}

	.comparison-mobile-label {
		margin-bottom: 0.35rem;
		font-size: $font-size8;
		font-weight: 700;
		letter-spacing: 0.01em;
		color: var(--product-heading);
	}

	.comparison-table {
		width: 100%;
		border-collapse: collapse;
		background: transparent;

		th,
		td {
			padding: $spacing2 $spacing2;
			text-align: left;
			vertical-align: top;
			border-bottom: 1px solid rgba(141, 46, 58, 0.12);
			font-size: $font-size6;
			line-height: 1.65;
		}

		thead th {
			font-size: $font-size7;
			font-weight: 700;
			letter-spacing: 0.01em;
			color: var(--product-heading);
			background: rgba(141, 46, 58, 0.06);
		}

		tbody th {
			width: 20%;
			font-size: $font-size7;
			font-weight: 700;
			letter-spacing: 0.01em;
			color: var(--product-heading);
		}

		tbody td {
			width: 40%;
		}

		tr:last-child th,
		tr:last-child td {
			border-bottom: 0;
		}

		tbody tr:nth-child(odd) {
			background: rgba(255, 255, 255, 0.58);
		}

		th:last-child,
		td:last-child {
			padding-right: 0;
		}

	}

	.comparison-note {
		margin-top: $spacing3;
		font-size: $font-size7;
		line-height: 1.7;
	}

	.feature-row {
		display: grid;
		grid-template-columns: minmax(3rem, 0.12fr) minmax(12rem, 0.34fr) minmax(0, 0.54fr);
		gap: $spacing3;
		align-items: start;
		padding: $spacing3 0;
		border-bottom: 1px solid rgba(141, 46, 58, 0.14);

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
			gap: $spacing1;
		}
	}

	.feature-index {
		font-size: $font-size7;
		font-weight: 700;
		color: var(--product-accent);
		padding-top: 0.15rem;
	}

	.feature-row h3,
	.faq-item h3 {
		margin-bottom: $spacing1;
	}

	.feature-description {
		margin: auto;
	}

	.faq-item p {
		margin: 0;
	}

	.faq-item {
		padding: $spacing3 0;
		border-bottom: 1px solid rgba(141, 46, 58, 0.14);
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

	.content-inner--single {
		grid-template-columns: 1fr;
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

	.content-shell,
	.preview-frame,
	.hero-panel {
		backdrop-filter: blur(10px);
	}

	.flowr-cta-inner,
	.cta-inner {
		text-align: center;

		h2 {
			max-width: 18ch;
			margin: 0 auto $spacing3;
		}
	}

	.legal-inner {
		padding-top: $spacing3;
		padding-bottom: $spacing5;
		text-align: center;

		p {
			font-size: $font-size7;
			color: rgba(122, 58, 66, 0.85);
		}
	}

	a.legal-link,
	a.legal-link:link,
	a.legal-link:visited {
		color: var(--product-accent-soft);
		text-decoration: none;
		font-weight: 600;
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