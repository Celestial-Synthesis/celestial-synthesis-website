<template>
	<main class="flowr-playground-page">
		<section class="playground-hero">
			<div class="playground-hero__copy">
				<p class="playground-eyebrow">{{ eyebrow }}</p>
				<h1>{{ title }}</h1>
				<p class="playground-lead">{{ description }}</p>
				<div class="playground-hero__actions">
					<NuxtLink class="playground-btn playground-btn--primary" to="/product/flowr">Back to FlowR</NuxtLink>
					<NuxtLink class="playground-btn playground-btn--secondary" to="/contact">Talk to the team</NuxtLink>
				</div>
			</div>
			<div class="playground-hero__panel">
				<p class="playground-panel__label">Why this exists</p>
				<p>This playground is intentionally packed with realistic website patterns so teams can test FlowR recording, guided replay, and step repair on a safe surface.</p>
				<ul>
					<li>Use the section tabs below to move across different URLs.</li>
					<li>Record buttons, forms, hover states, right-click helper menus, and scroll-heavy sections.</li>
					<li>Use the premium conditional-steps page to practice visible and not-visible rules.</li>
				</ul>
			</div>
		</section>

		<nav class="playground-route-nav" aria-label="FlowR playground sections">
			<NuxtLink
				v-for="item in pageLinks"
				:key="item.to"
				:to="item.to"
				class="playground-route-link"
				:class="{ 'is-active': route.path === item.to }"
			>
				<span class="playground-route-link__eyebrow">{{ item.kicker }}</span>
				<span class="playground-route-link__title">{{ item.label }}</span>
			</NuxtLink>
		</nav>

		<section class="playground-workbench">
			<div class="playground-workbench__main">
				<slot />
			</div>
			<aside class="playground-workbench__aside" aria-label="Practice checklist">
				<h2>Suggested capture checklist</h2>
				<ol>
					<li v-for="item in checklist" :key="item">{{ item }}</li>
				</ol>
			</aside>
		</section>

		<nav class="playground-pager" aria-label="Playground pagination">
			<NuxtLink
				v-if="previousPage"
				class="playground-pager__link"
				:to="previousPage.to"
			>
				<span>Previous</span>
				<strong>{{ previousPage.label }}</strong>
			</NuxtLink>
			<div v-else class="playground-pager__spacer" aria-hidden="true"></div>
			<NuxtLink
				v-if="nextPage"
				class="playground-pager__link playground-pager__link--next"
				:to="nextPage.to"
			>
				<span>Next</span>
				<strong>{{ nextPage.label }}</strong>
			</NuxtLink>
			<div v-else class="playground-pager__spacer" aria-hidden="true"></div>
		</nav>
	</main>
</template>

<script setup>
const props = defineProps({
	eyebrow: {
		type: String,
		default: 'FlowR Playground',
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	checklist: {
		type: Array,
		default: () => [],
	},
});

const route = useRoute();

const pageLinks = [
	{ to: '/product/flowr/playground', label: 'Recording Warm-Up', kicker: 'Page 1' },
	{ to: '/product/flowr/playground/forms', label: 'Form Capture Lab', kicker: 'Page 2' },
	{ to: '/product/flowr/playground/conditions', label: 'Conditional Steps', kicker: 'Page 3' },
];

const activeIndex = computed(() => pageLinks.findIndex((item) => item.to === route.path));
const previousPage = computed(() => activeIndex.value > 0 ? pageLinks[activeIndex.value - 1] : null);
const nextPage = computed(() => activeIndex.value >= 0 && activeIndex.value < pageLinks.length - 1 ? pageLinks[activeIndex.value + 1] : null);
</script>

<style lang="scss" scoped>
.flowr-playground-page {
	--playground-accent: #8d2e3a;
	--playground-accent-deep: #5a1c24;
	--playground-soft: #fbf3f4;
	--playground-paper: #fffaf8;
	--playground-line: rgba(141, 46, 58, 0.16);
	position: relative;
	margin-inline: calc(50% - 50vw);
	width: auto;
	padding: 0 $spacing4 $spacing7;
	background:
		radial-gradient(circle at top right, rgba(141, 46, 58, 0.12), transparent 28%),
		linear-gradient(180deg, #f8edef 0%, #fff9f7 40%, #fff 100%);

	@include media(xsm, sm) {
		padding: 0 $spacing3 $spacing6;
	}
}

.playground-hero,
.playground-route-nav,
.playground-workbench,
.playground-pager {
	max-width: 86em;
	margin-inline: auto;
}

.playground-hero {
	display: grid;
	grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
	gap: clamp(1.5rem, 1rem + 1.6vw, 3rem);
	padding: $spacing7 0 $spacing5;

	@include media(xsm, sm) {
		grid-template-columns: 1fr;
		padding: $spacing5 0 $spacing4;
	}
}

.playground-eyebrow,
.playground-panel__label,
.playground-route-link__eyebrow,
.playground-pager span {
	margin: 0;
	font-size: $font-size8;
	font-weight: 700;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	color: #8e5560;
}

.playground-hero h1,
.playground-workbench h2,
.playground-workbench h3 {
	color: var(--playground-accent-deep);
	margin-top: 0;
}

.playground-hero h1 {
	margin-bottom: $spacing3;
	font-size: clamp(2.7rem, 1.9rem + 2.7vw, 5rem);
	line-height: 0.98;
	max-width: 11ch;

	&::before {
		background-image: linear-gradient(var(--playground-accent), #d98995);
	}
}

.playground-lead,
.playground-hero__panel p,
.playground-hero__panel li,
.playground-workbench :deep(p),
.playground-workbench :deep(li),
.playground-workbench :deep(label),
.playground-workbench :deep(span),
.playground-workbench :deep(td),
.playground-workbench :deep(th) {
	color: #7a4851;
	line-height: 1.65;
}

.playground-hero__actions {
	display: flex;
	flex-wrap: wrap;
	gap: $spacing2;
	margin-top: $spacing3;
}

.playground-btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: $spacing1 $spacing3;
	border-radius: 999px;
	border: 1px solid transparent;
	font-weight: 700;
	transition: transform 160ms ease, background-color 160ms ease, border-color 160ms ease, color 160ms ease;

	&:hover {
		transform: translateY(-1px);
	}

	&--primary,
	&--primary:link,
	&--primary:visited {
		background: var(--playground-accent);
		border-color: var(--playground-accent);
		color: #fff;
	}

	&--secondary,
	&--secondary:link,
	&--secondary:visited {
		background: rgba(255, 255, 255, 0.7);
		border-color: rgba(141, 46, 58, 0.22);
		color: var(--playground-accent);
	}
	}

.playground-hero__panel {
	padding: $spacing4;
	border: 1px solid var(--playground-line);
	border-radius: 1.5rem;
	background: rgba(255, 250, 248, 0.82);
	box-shadow: 0 1.4rem 2.8rem rgba(90, 28, 36, 0.08);
	backdrop-filter: blur(12px);

	ul {
		margin: $spacing2 0 0;
		padding-left: 1.2rem;
		}
	}

.playground-route-nav {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: $spacing2;

	@include media(xsm, sm) {
		grid-template-columns: 1fr;
	}
}

.playground-route-link {
	display: grid;
	gap: 0.35rem;
	padding: $spacing3;
	border-radius: 1.4rem;
	border: 1px solid rgba(141, 46, 58, 0.12);
	background: rgba(255, 255, 255, 0.7);
	box-shadow: 0 0.7rem 1.5rem rgba(90, 28, 36, 0.04);
	transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease;

	&:hover,
	&.is-active {
		transform: translateY(-2px);
		border-color: rgba(141, 46, 58, 0.28);
		background: rgba(248, 237, 240, 0.9);
		box-shadow: 0 1rem 2rem rgba(90, 28, 36, 0.08);
	}
	}

.playground-route-link__title {
	font-size: $font-size6;
	font-weight: 700;
	color: var(--playground-accent-deep);
}

.playground-workbench {
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(15rem, 20rem);
	gap: $spacing4;
	align-items: start;
	margin-top: $spacing4;

	@include media(xsm, sm) {
		grid-template-columns: 1fr;
	}
}

.playground-workbench__main :deep(.playground-card) {
	padding: $spacing4;
	border-radius: 1.5rem;
	border: 1px solid var(--playground-line);
	background: rgba(255, 255, 255, 0.82);
	box-shadow: 0 1rem 2.4rem rgba(90, 28, 36, 0.06);

	& + .playground-card {
		margin-top: $spacing3;
	}

	@include media(xsm, sm) {
		padding: $spacing3;
	}
}

.playground-workbench__aside {
	position: sticky;
	top: 6.8rem;
	padding: $spacing3;
	border-radius: 1.3rem;
	border: 1px solid var(--playground-line);
	background: rgba(255, 248, 246, 0.86);

	ol {
		margin: $spacing2 0 0;
		padding-left: 1.2rem;
		display: grid;
		gap: 0.6rem;
	}

	@include media(xsm, sm) {
		position: static;
	}
}

.playground-pager {
	display: flex;
	justify-content: space-between;
	gap: $spacing3;
	margin-top: $spacing4;

	@include media(xsm, sm) {
		flex-direction: column;
	}
}

.playground-pager__link,
.playground-pager__spacer {
	flex: 1 1 0;
	min-height: 5rem;
}

.playground-pager__link {
	display: grid;
	align-content: center;
	gap: 0.35rem;
	padding: $spacing3;
	border-radius: 1.3rem;
	background: rgba(255, 255, 255, 0.84);
	border: 1px solid rgba(141, 46, 58, 0.12);
	transition: transform 160ms ease, border-color 160ms ease;

	strong {
		color: var(--playground-accent-deep);
		font-size: $font-size6;
	}

	&:hover {
		transform: translateY(-2px);
		border-color: rgba(141, 46, 58, 0.24);
	}
	}

.playground-pager__link--next {
	text-align: right;
}
</style>