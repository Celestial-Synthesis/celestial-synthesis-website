<template>
	<main class="products-page">
		<section class="products-hero band-soft">
			<div class="section-inner products-hero-inner">
				<div class="hero-copy">
					<p class="section-eyebrow">Products</p>
					<h1>Software products designed to make operational work easier to understand and repeat.</h1>
					<p class="lead">Explore the systems and tools Celestial Synthesis is building, starting with FlowR.</p>
					<NuxtLink class="btn btn-primary" to="/contact">Talk to the team</NuxtLink>
				</div>
				<div class="hero-visual">
					<img src="/images/products/flowr-illustration.webp" width="1400" height="840" alt="Product illustration" />
				</div>
			</div>
		</section>

		<section class="catalog band-white">
			<div class="section-inner catalog-inner">
				<div class="catalog-intro">
					<header class="section-header section-header--compact">
						<p class="section-eyebrow">Current Catalog</p>
						<h2>Focused tools, presented clearly.</h2>
					</header>
					<div class="catalog-visual">
						<img src="/images/header/about-us-illustration.webp" width="1200" height="760" alt="Product systems illustration" />
					</div>
				</div>
				<div class="cards-grid">
				<article class="product-card" v-for="product in productsList" :key="product._path">
					<NuxtLink :to="'/product/' + returnSlug(product.title)">
						<img :src="product.image" :alt="product.title" />
						<div class="card-copy">
							<p class="card-kicker">Product</p>
							<h3>{{ product.title }}</h3>
							<p>{{ product.description }}</p>
							<span class="text-link">View Details</span>
						</div>
					</NuxtLink>
				</article>
				</div>
			</div>
		</section>

		<section class="products-cta band-blue">
			<div class="section-inner products-cta-inner">
				<p class="section-eyebrow">Need A Product Walkthrough?</p>
				<h2>Bring us your workflow and we’ll show where our products reduce delivery friction.</h2>
				<NuxtLink class="btn btn-primary" to="/contact">Talk to the team</NuxtLink>
			</div>
		</section>
	</main>
</template>

<script setup>
const { data: productsList } = reactive(await useAsyncData("products", () =>
	queryContent("/products/").find())
);

function returnSlug(s) {
	return s.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase();
}

useSeoMeta({
	title: "Products | Celestial Synthesis",
	description: "Discover software products by Celestial Synthesis, including FlowR.",
});
</script>

<style lang="scss" scoped>
.products-page {
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
}

	.section-eyebrow,
	.card-kicker {
		font-size: $font-size8;
		font-weight: 600;
		letter-spacing: 0.01em;
		color: $base-color;
	}

	.lead {
		font-size: $font-size5;
		line-height: 1.7;
		max-width: 34em;
	}

	.band-soft {
		background: #edf5fc;
	}

	.band-white {
		background: $white;
	}

	.band-blue {
		background: #eef5fd;
	}

	.products-hero-inner {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: $spacing6;
		align-items: center;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
		}
	}

	.hero-copy {
		max-width: 40em;

		h1 {
			max-width: 10ch;
		}
	}

	.hero-visual img,
	.catalog-visual img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: $border-radius3;
		background: rgba(255, 255, 255, 0.74);
		box-shadow: 0 1.2em 2.4em rgba(30, 43, 61, 0.08);
	}

	.catalog-inner {
		display: grid;
		gap: $spacing5;
	}

	.catalog-intro {
		display: grid;
		grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
		gap: $spacing5;
		align-items: center;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
		}
	}

	.catalog .section-header {
		max-width: 34em;
	}

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18em, 1fr));
		gap: $spacing4;
	}

.product-card {
	border-radius: $border-radius3;
	background: #f3f8fd;
	overflow: hidden;
	transition: $transition2;
	box-shadow: 0 1.2em 2.4em rgba(30, 43, 61, 0.06);

	a {
		display: block;
	}

	img {
		width: 100%;
		height: 14em;
		object-fit: cover;
	}

	.card-copy {
		padding: $spacing3;
	}

	h3 {
		margin-bottom: $spacing1;
	}

	p {
		margin-bottom: $spacing2;
	}

	.text-link {
		font-weight: 600;
		color: $base-color;
	}

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 1.4em 2.6em rgba(30, 43, 61, 0.1);
	}
}

	.products-cta-inner {
		text-align: center;

		h2 {
			max-width: 18ch;
			margin: 0 auto $spacing3;
		}
	}

	.btn {
		display: inline-block;
		padding: $spacing1 $spacing3;
		border-radius: 999px;
		font-weight: 600;
	}

	.btn-primary {
		background: $base-color;
		color: $white;
		border: 1px solid $base-color;
	}
</style>