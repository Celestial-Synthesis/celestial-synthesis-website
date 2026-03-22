<template>
	<main class="about-page">
		<section class="about-hero band-soft">
			<div class="section-inner">
				<div class="about-hero-inner">
					<div class="copy">
						<p class="section-eyebrow">About Celestial Synthesis</p>
						<h1>Thoughtful software for real business needs.</h1>
						<p class="lead">
							Celestial Synthesis is built by engineers with more than a decade of software experience and a track record of contributing to products used by millions. We build our own products and help businesses create digital solutions that make work clearer, faster, and easier to manage.
						</p>
					</div>
					<div class="art">
						<img src="/images/header/about-us-illustration.webp" width="1200" height="760" alt="Celestial Synthesis studio visual" />
					</div>
				</div>
				<div class="about-points" aria-label="About highlights">
					<div class="about-point">
						<span>01</span>
						<p>Real product experience, not just theory.</p>
					</div>
					<div class="about-point">
						<span>02</span>
						<p>Smart, elegant solutions over unnecessary complexity.</p>
					</div>
					<div class="about-point">
						<span>03</span>
						<p>Practical guidance before expensive decisions.</p>
					</div>
				</div>
			</div>
		</section>

		<section class="principles band-white" aria-label="Core principles">
			<div class="section-inner principles-layout">
				<header class="section-header principles-header">
					<p class="section-eyebrow">How We Work</p>
					<h2>Practical thinking. Broad capability.</h2>
					<p>
						We work across products, internal tools, and tailored software solutions, but the principle stays the same: understand the real problem first, then build what is genuinely useful.
					</p>
				</header>
				<div class="principles-list">
					<article class="principle-row">
						<p class="pillar-kicker">01</p>
						<div>
							<h3>Software With Purpose</h3>
							<p>We build products, internal tools, and digital solutions that help teams reduce repetitive work and move through operations with less friction.</p>
						</div>
					</article>
					<article class="principle-row">
						<p class="pillar-kicker">02</p>
						<div>
							<h3>Consultation Before Complexity</h3>
							<p>We take time to understand the real problem first, so businesses can choose a solution that fits their needs instead of paying for unnecessary complexity.</p>
						</div>
					</article>
					<article class="principle-row">
						<p class="pillar-kicker">03</p>
						<div>
							<h3>Products That Prove Our Thinking</h3>
							<p>FlowR is the first product we built at Celestial Synthesis, and it reflects the way we approach software: clear, useful, and designed to solve everyday communication and training problems.</p>
						</div>
					</article>
				</div>
			</div>
		</section>

		<section class="about-cta band-blue">
			<div class="section-inner about-cta-inner">
				<p class="section-eyebrow">Want To See How We Build?</p>
				<h2>Explore FlowR or talk to our team.</h2>
				<div class="actions">
					<NuxtLink class="btn btn-primary" to="/product/flowr">Explore FlowR</NuxtLink>
					<NuxtLink class="btn btn-secondary" to="/contact">Talk to the team</NuxtLink>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup>
useSeoMeta({
	title: "About Us | Celestial Synthesis",
	description: "Learn about Celestial Synthesis, our product-building experience, and how we create practical software for real business needs.",
});
</script>

<style lang="scss" scoped>
.about-page {
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
		font-size: clamp(2.7rem, 2rem + 2vw, 4.7rem);
		line-height: 0.98;
		letter-spacing: -0.03em;
		margin-bottom: $spacing3;
		max-width: 12ch;
	}

	h2 {
		font-size: clamp(2rem, 1.55rem + 1.2vw, 3.1rem);
		line-height: 1.02;
		letter-spacing: -0.02em;
	}

	.lead {
		font-size: clamp(1.08rem, 0.95rem + 0.36vw, 1.35rem);
		line-height: 1.7;
		max-width: 34em;
		color: $grey;
	}

	.section-header {
		max-width: 44em;
		margin-bottom: $spacing5;

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

	.about-hero-inner {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(18rem, 0.8fr);
		gap: clamp(1.75rem, 1.2rem + 1.4vw, 3.5rem);
		align-items: start;
		padding-block: $spacing3 $spacing5;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
			padding-block: $spacing2 $spacing4;
		}
	}

	.copy {
		max-width: 46em;
		padding-top: $spacing2;
	}

	.art {
		display: flex;
		justify-content: flex-end;
		padding-top: $spacing1;

		@include media(xsm, sm) {
			justify-content: center;
			padding-top: 0;
		}
	}

	.art img {
		width: min(100%, 31rem);
		height: auto;
		display: block;
		border-radius: $border-radius3;
		background: rgba(255, 255, 255, 0.5);

		@include media(xsm, sm) {
			width: min(100%, 26rem);
		}
	}

	.about-points {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: $spacing3;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
		}
	}

	.about-point {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: $spacing2;
		align-items: start;
		padding: $spacing3;
		border-radius: $border-radius3;
		background: rgba(255, 255, 255, 0.72);
		border: 1px solid rgba(42, 77, 111, 0.08);
		box-shadow: 0 1em 2em rgba(30, 43, 61, 0.04);

		span {
			font-size: $font-size8;
			font-weight: 700;
			color: $base-color;
			min-width: 2rem;
		}

		p {
			margin: 0;
		}
	}

	.principles-layout {
		display: grid;
		grid-template-columns: minmax(16rem, 0.78fr) minmax(0, 1.22fr);
		gap: clamp(1.75rem, 1.2rem + 1.5vw, 4rem);
		align-items: start;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
		}
	}

	.principles-header {
		margin-bottom: 0;

		p:last-child {
			max-width: 30em;
		}
	}

	.principles-list {
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

	.principle-row {
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

		p:last-child {
			margin-bottom: 0;
		}
	}

	.pillar-kicker {
		margin: 0;
		font-size: $font-size8;
		font-weight: 700;
		letter-spacing: 0.08em;
		color: $base-color;
		min-width: 2.2rem;
		padding-top: 0.02rem;
	}

	.about-cta-inner {
		max-width: 46em;
		margin-inline: auto;
		text-align: center;

		h2 {
			max-width: 14ch;
			margin-inline: auto;
		}
	}

	.actions {
		display: flex;
		justify-content: center;
		gap: $spacing2;
		flex-wrap: wrap;
		margin-top: $spacing3;
	}

	p {
		line-height: 1.7;
	}

	.btn {
		display: inline-block;
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

	@include media(xsm, sm) {
		h1 {
			max-width: none;
		}
	}
}
</style>