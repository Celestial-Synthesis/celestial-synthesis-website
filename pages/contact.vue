<template>
	<main class="contact-page">
		<section class="contact-hero band-soft">
			<div class="section-inner contact-layout">
				<div class="copy">
					<p class="section-eyebrow">Contact</p>
					<h1>Talk to us when you need a clearer path from product intent to execution.</h1>
					<p>
						For inquiries, partnerships, and product questions, reach us at
						<a href="mailto:contact@celestialsynthesis.com">contact@celestialsynthesis.com</a>.
					</p>
					<p class="lead">We typically reply within one business day and keep early conversations direct, practical, and useful.</p>
					<div class="actions">
						<NuxtLink class="btn btn-primary" to="/product/flow-r">View FlowR</NuxtLink>
						<NuxtLink class="btn btn-secondary" to="/about">About Celestial Synthesis</NuxtLink>
					</div>
				</div>
				<div class="art">
					<img src="/images/header/contact-visual.svg" width="1200" height="760" alt="Contact and collaboration visual" />
				</div>
				</div>
		</section>

		<section class="contact-links band-white" aria-label="Quick links">
			<div class="section-inner quick-links">
				<header class="section-header section-header--compact">
					<p class="section-eyebrow">Start Here</p>
					<h2>Choose the conversation that matches what you need now.</h2>
				</header>
				<div class="quick-links-visual">
					<img src="/images/header/celestial-hero.svg" width="1400" height="900" alt="Collaboration illustration" />
				</div>
				<article>
					<h3>Product Demo</h3>
					<p>Interested in FlowR for your team? Start with the product overview and use cases.</p>
					<NuxtLink class="text-link" to="/product/flow-r">Open FlowR Page</NuxtLink>
				</article>
				<article>
					<h3>Company Info</h3>
					<p>Learn about our engineering philosophy and how we partner with product teams.</p>
					<NuxtLink class="text-link" to="/about">Read About Us</NuxtLink>
				</article>
			</div>
		</section>

		<section class="contact-cta band-blue">
			<div class="section-inner contact-cta-inner">
				<p class="section-eyebrow">Need A Direct Answer?</p>
				<h2>Email us and we’ll point you to the right next step quickly.</h2>
			</div>
		</section>
	</main>
</template>

<script setup>
useSeoMeta({
	title: "Contact | Celestial Synthesis",
	description: "Get in touch with Celestial Synthesis for software collaboration and FlowR product questions.",
});
</script>

<style lang="scss" scoped>
.contact-page {
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

	.section-eyebrow {
		font-size: $font-size8;
		font-weight: 600;
		letter-spacing: 0.01em;
		color: $base-color;
	}

	.lead {
		font-size: $font-size5;
		line-height: 1.7;
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

	.contact-layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: $spacing6;
		align-items: center;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
		}
	}

	.copy {
		max-width: 42em;
	}

	.art img {
		width: 100%;
		height: auto;
		border-radius: $border-radius3;
		background: rgba(255, 255, 255, 0.72);
		box-shadow: 0 1.2em 2.4em rgba(30, 43, 61, 0.08);
	}

	.actions {
		display: flex;
		gap: $spacing2;
		justify-content: flex-start;
		flex-wrap: wrap;
		margin-top: $spacing3;

		.btn {
			padding: $spacing1 $spacing3;
			border-radius: 999px;
			font-weight: 600;
		}

		.btn-primary {
			background: $base-color;
			color: $white;
			border: 1px solid $base-color;
		}

		.btn-secondary {
			border: 1px solid currentColor;
		}
	}

	.quick-links {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: $spacing3;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
		}

		.section-header {
			grid-column: 1 / -1;
			margin-bottom: $spacing1;
		}

		.quick-links-visual {
			grid-column: 1 / -1;

			img {
				width: 100%;
				height: auto;
				display: block;
				border-radius: $border-radius3;
				background: #eef5fd;
				box-shadow: 0 1.2em 2.4em rgba(30, 43, 61, 0.06);
			}
		}

		article {
			border-radius: $border-radius3;
			padding: $spacing3;
			background: #f3f8fd;
			box-shadow: 0 1em 2em rgba(30, 43, 61, 0.04);
		}
	}

	.text-link {
		display: inline-block;
		margin-top: $spacing2;
		font-weight: 600;
		color: $base-color;
	}

	.contact-cta-inner {
		text-align: center;

		h2 {
			max-width: 22ch;
			margin-inline: auto;
		}
	}
}
</style>