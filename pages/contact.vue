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
						<div class="contact-channels" aria-label="WhatsApp contact numbers">
							<a href="https://wa.me/6594869825?text=Hi%20Celestial%20Synthesis,%20I%20would%20like%20to%20ask%20about%20an%20IT%20or%20software%20solution." target="_blank" rel="noreferrer">WhatsApp SG: +65 9486 9825</a>
							<a href="https://wa.me/60166823630?text=Hi%20Celestial%20Synthesis,%20I%20would%20like%20to%20ask%20about%20an%20IT%20or%20software%20solution." target="_blank" rel="noreferrer">WhatsApp MY: +60 1668 23630</a>
						</div>
						<div class="actions">
							<a class="btn btn-primary" href="http://flowr.celestialsynthesis.com/">Explore FlowR</a>
							<NuxtLink class="btn btn-secondary" to="/about">About Celestial Synthesis</NuxtLink>
						</div>
					</div>
					<div class="art">
						<div class="hero-visual">
							<img src="/images/header/contact-us-illustration.webp" width="1200" height="760" alt="Contact and collaboration visual" />
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="contact-links band-white" aria-label="Quick links">
			<div class="section-inner contact-links-layout">
				<header class="section-header contact-links-header">
					<p class="section-eyebrow">Start Here</p>
					<h2>Start with the right path.</h2>
					<p>Whether you want to understand FlowR, learn more about our company, or start a practical software conversation, here is the fastest route.</p>
				</header>
				<div class="contact-links-list">
					<article class="contact-link-row">
					<p class="link-kicker">Product</p>
					<div>
						<h3>FlowR</h3>
						<p>See how FlowR helps people explain websites, internal tools, and new features with clearer guidance and less repeated effort.</p>
						<a class="text-link" href="http://flowr.celestialsynthesis.com/">Open FlowR Page</a>
					</div>
					</article>
					<article class="contact-link-row">
					<p class="link-kicker">Company</p>
					<div>
						<h3>About Us</h3>
						<p>Learn about our experience, how we think about software, and why we focus on smart, elegant solutions to practical business problems.</p>
						<NuxtLink class="text-link" to="/about">Read About Us</NuxtLink>
					</div>
					</article>
				</div>
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
		padding-block: $spacing3 $spacing5;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
			align-items: start;
			padding-block: $spacing2 $spacing4;
		}
	}

	.copy {
		max-width: 42em;
		padding-top: $spacing2;
	}

	.art {
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		padding-top: $spacing1;

		@include media(xsm, sm) {
			align-items: center;
			padding-top: 0;
		}
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

	.contact-channels {
		display: grid;
		gap: $spacing2;
		margin-top: $spacing2;

		a {
			display: inline-flex;
			align-items: center;
			justify-content: flex-start;
			width: fit-content;
			padding: 0.7rem 1rem;
			border-radius: 999px;
			background: #eff8f1;
			border: 1px solid rgba(26, 155, 32, 0.16);
			color: #146e18;
			font-family: $font-accent;
			font-weight: 600;
		}
	}

	.hero-visual {
		position: relative;
		width: min(100%, 34rem);
		padding: clamp(0.85rem, 0.55rem + 1vw, 1.5rem) clamp(0.9rem, 0.45rem + 1vw, 1.5rem) 0 0;

		@include media(xsm, sm) {
			width: min(100%, 26rem);
			padding-right: 0;

			&::before {
				inset: 7% 6% 0 6%;
			}

			&::after {
				right: 0.15rem;
				bottom: 0.8rem;
				width: 5rem;
			}
		}
	}

	.hero-visual img {
		position: relative;
		width: 100%;
		height: auto;
		display: block;
		border-radius: $border-radius3;
		background: rgba(255, 255, 255, 0.5);
		box-shadow: 0 1.25em 2.4em rgba(30, 43, 61, 0.08);
		z-index: 1;
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

	.contact-links-layout {
		display: grid;
		grid-template-columns: minmax(16rem, 0.78fr) minmax(0, 1.22fr);
		gap: clamp(1.75rem, 1.2rem + 1.5vw, 4rem);
		align-items: start;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
		}
	}

	.contact-links-header {
		margin-bottom: 0;

		p:last-child {
			max-width: 30em;
		}
	}

	.contact-links-list {
		display: grid;
		gap: $spacing3;
		position: relative;
		padding-left: clamp(0.6rem, 0.3rem + 0.8vw, 1.2rem);

		&::before {
			content: "";
			position: absolute;
			left: 0.35rem;
			top: 0.4rem;
			bottom: 0.4rem;
			width: 1px;
			background: linear-gradient(rgba(42, 77, 111, 0.18), rgba(42, 77, 111, 0.04));
		}
	}

	.contact-link-row {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: $spacing3;
		align-items: start;
		padding: $spacing2 0 $spacing3;
		position: relative;

		&::before {
			content: "";
			position: absolute;
			left: calc(-1 * clamp(0.6rem, 0.3rem + 0.8vw, 1.2rem));
			top: 0.45rem;
			width: 0.7rem;
			height: 0.7rem;
			border-radius: 999px;
			background: $base-color;
			box-shadow: 0 0 0 0.45rem rgba(142, 197, 255, 0.16);
		}

		&:not(:last-child) {
			border-bottom: 1px solid rgba(42, 77, 111, 0.1);
		}

		h3 {
			margin-bottom: $spacing2;
		}

		p:last-of-type {
			margin-bottom: 0;
		}
	}

	.link-kicker {
		margin: 0;
		font-size: $font-size8;
		font-weight: 700;
		letter-spacing: 0.08em;
		color: $base-color;
		text-transform: uppercase;
		min-width: 3.4rem;
		padding-top: 0.02rem;
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
	}
}
</style>