<template>
	<main class="contact-page">
		<section class="contact-hero band-soft">
			<div class="section-inner">
				<div class="contact-layout">
					<div class="copy">
						<p class="section-eyebrow">Contact</p>
						<h1>Talk to us about FlowR or your next software move.</h1>
						<p class="lead">We keep early conversations approachable, practical, and useful, whether you are exploring FlowR or looking for the right solution for your business.</p>
						<p class="contact-line">
							Email us at
							<a class="contact-email" href="mailto:contact@celestialsynthesis.com">contact@celestialsynthesis.com</a>
						</p>
						<p class="contact-note">For inquiries, partnerships, and product questions. We typically reply within one business day.</p>
						<div class="actions">
							<NuxtLink class="btn btn-primary" to="/product/flow-r">Explore FlowR</NuxtLink>
							<NuxtLink class="btn btn-secondary" to="/about">About Celestial Synthesis</NuxtLink>
						</div>
					</div>
					<div class="art">
						<img src="/images/header/contact-visual.svg" width="1200" height="760" alt="Contact and collaboration visual" />
					</div>
				</div>
				</div>
		</section>

		<section class="contact-links band-white" aria-label="Quick links">
			<div class="section-inner quick-links">
				<header class="section-header section-header--compact">
					<p class="section-eyebrow">Start Here</p>
					<h2>Start with the right path.</h2>
					<p>Whether you want to understand FlowR, learn more about our company, or start a practical software conversation, here is the fastest route.</p>
				</header>
				<article class="link-card">
					<p class="link-kicker">Product</p>
					<h3>FlowR</h3>
					<p>See how FlowR helps people explain websites, internal tools, and new features with clearer guidance and less repeated effort.</p>
					<NuxtLink class="text-link" to="/product/flow-r">Open FlowR Page</NuxtLink>
				</article>
				<article class="link-card">
					<p class="link-kicker">Company</p>
					<h3>About Us</h3>
					<p>Learn about our experience, how we think about software, and why we focus on smart, elegant solutions to practical business problems.</p>
					<NuxtLink class="text-link" to="/about">Read About Us</NuxtLink>
				</article>
			</div>
		</section>

		<section class="contact-cta band-blue">
			<div class="section-inner contact-cta-inner">
				<p class="section-eyebrow">Need A Direct Answer?</p>
				<h2>Email us and we will point you in the right direction.</h2>
				<a class="email-link" href="mailto:contact@celestialsynthesis.com">contact@celestialsynthesis.com</a>
			</div>
		</section>
	</main>
</template>

<script setup>
useSeoMeta({
	title: "Contact | Celestial Synthesis",
	description: "Get in touch with Celestial Synthesis about FlowR, software ideas, or practical digital solutions for your business.",
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
		font-family: $font-accent;
		font-size: $font-size8;
		font-weight: 600;
		letter-spacing: 0.01em;
		color: $base-color;
		margin: 0 0 $spacing1;
	}

	h1,
	h2,
	h3 {
		margin-top: 0;
	}

	h1 {
		font-size: clamp(2.6rem, 2rem + 1.9vw, 4.6rem);
		line-height: 0.98;
		letter-spacing: -0.03em;
		margin-bottom: $spacing3;
		max-width: 12ch;
	}

	h2 {
		font-size: clamp(2rem, 1.55rem + 1.2vw, 3.2rem);
		line-height: 1.02;
		letter-spacing: -0.02em;
	}

	.lead {
		font-size: clamp(1.08rem, 0.95rem + 0.36vw, 1.4rem);
		line-height: 1.7;
		color: $grey;
	}

	.section-header {
		max-width: 42em;
		margin-bottom: $spacing4;

		p:last-child {
			font-size: $font-size6;
			line-height: 1.7;
			color: $grey;
		}
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
		grid-template-columns: minmax(0, 1.12fr) minmax(18rem, 0.78fr);
		gap: clamp(1.75rem, 1.2rem + 1.4vw, 3.5rem);
		align-items: center;
		padding-block: $spacing3;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
		}
	}

	.copy {
		max-width: 42em;
		padding: $spacing3 clamp(0rem, 0.4rem + 1vw, $spacing2) $spacing3 0;
	}

	.art {
		display: flex;
		justify-content: flex-end;
	}
	.contact-line {
		margin: $spacing3 0 $spacing1;
		font-size: $font-size6;
		line-height: 1.7;
		color: $grey;
	}

	.contact-email,
	.email-link {
		display: inline-block;
		font-size: clamp(1.05rem, 0.96rem + 0.28vw, 1.2rem);
		font-weight: 700;
		letter-spacing: -0.01em;
		color: $dark-grey;
	}

	.contact-note {
		margin: 0;
		line-height: 1.7;
		color: $grey;
	}

	.art img {
		width: min(100%, 31rem);
		height: auto;
		display: block;
		border-radius: $border-radius3;
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
			transition: transform $transition2, box-shadow $transition2, background-color $transition2;

			&:hover {
				transform: translateY(-1px);
			}
		}

		.btn-primary {
			background: $base-color;
			color: $white;
			border: 1px solid $base-color;
			box-shadow: 0 0.8em 1.6em rgba(42, 77, 111, 0.18);
		}

		.btn-secondary {
			border: 1px solid currentColor;
			background: rgba(255, 255, 255, 0.76);
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
			margin-bottom: $spacing2;
		}

		.link-card {
			border-radius: $border-radius3;
			padding: $spacing4;
			background: linear-gradient(180deg, #f8fbff, #eef5fd);
			box-shadow: 0 1em 2em rgba(30, 43, 61, 0.05);
			border: 1px solid rgba(42, 77, 111, 0.08);

			h3 {
				margin-bottom: $spacing2;
			}

			p:last-of-type {
				margin-bottom: 0;
			}
		}
	}

	.link-kicker {
		margin: 0 0 $spacing2;
		font-size: $font-size8;
		font-weight: 700;
		letter-spacing: 0.08em;
		color: $base-color;
		text-transform: uppercase;
	}

	.text-link {
		display: inline-block;
		margin-top: $spacing3;
		font-weight: 600;
		color: $base-color;
	}

	.contact-cta-inner {
		text-align: center;
	}

	.contact-cta-inner {
		max-width: 46em;
		margin-inline: auto;

		h2 {
			max-width: 15ch;
			margin-inline: auto;
		}
	}

	.email-link {
		margin-top: $spacing3;
	}

	@include media(xsm, sm) {
		h1 {
			max-width: none;
		}

		.copy {
			padding-right: 0;
		}

		.art {
			justify-content: center;
		}

		.art img {
			width: min(100%, 26rem);
		}
	}
}
</style>