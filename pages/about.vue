<template>
	<main class="about-page">
		<section class="about-hero band-soft">
			<div class="section-inner about-hero-inner">
				<div class="copy">
					<p class="section-eyebrow">About Celestial Synthesis</p>
					<h1>We bring structure, judgment, and calm to software work that usually feels noisier than it should.</h1>
					<p class="lead">
						At Celestial Synthesis, we believe strong software comes from disciplined synthesis: aligning product intent, technical direction, and execution until the work becomes clearer to build and easier to trust.
					</p>
					<div class="about-points">
						<div>
							<span>01</span>
							<p>We reduce ambiguity before it becomes delivery cost.</p>
						</div>
						<div>
							<span>02</span>
							<p>We design for long-term maintainability, not short-term optics.</p>
						</div>
						<div>
							<span>03</span>
							<p>We partner closely enough to keep decisions coherent from plan to rollout.</p>
						</div>
					</div>
				</div>
				<div class="art">
					<img src="/images/header/about-studio.svg" width="1200" height="760" alt="Celestial Synthesis studio visual" />
				</div>
				</div>
		</section>

		<section class="principles band-white" aria-label="Core principles">
			<div class="section-inner">
				<div class="principles-intro">
					<header class="section-header">
						<p class="section-eyebrow">How We Work</p>
						<h2>Professional by design, not by presentation alone.</h2>
					</header>
					<div class="principles-art">
						<img src="/images/header/celestial-hero.svg" width="1400" height="900" alt="Celestial Synthesis process illustration" />
					</div>
				</div>
				<div class="pillars">
					<article>
						<h3>Clarity Through Design</h3>
						<p>We make difficult systems understandable through thoughtful architecture, crisp interfaces, and strong product judgment.</p>
					</article>
					<article>
						<h3>Durable Engineering</h3>
						<p>Our solutions prioritize reliability and long-term maintainability so teams can grow with confidence.</p>
					</article>
					<article>
						<h3>Focused Collaboration</h3>
						<p>We work closely with teams to align goals, reduce uncertainty, and move from strategy to shipped product quickly.</p>
					</article>
				</div>
			</div>
		</section>

		<section class="about-cta band-blue">
			<div class="section-inner about-cta-inner">
				<p class="section-eyebrow">Need A Steadier Delivery Partner?</p>
				<h2>Bring us in when the work matters too much for vague plans and reactive execution.</h2>
				<div class="actions">
					<NuxtLink class="btn btn-primary" to="/contact">Talk to the team</NuxtLink>
					<NuxtLink class="btn btn-secondary" to="/product/flow-r">Explore FlowR</NuxtLink>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup>
useSeoMeta({
	title: "About Us | Celestial Synthesis",
	description: "Learn about Celestial Synthesis and our approach to building precise, scalable software products.",
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

	.section-header {
		max-width: 38em;
		margin-bottom: $spacing4;
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
		grid-template-columns: 1.1fr 1fr;
		gap: $spacing6;
		align-items: center;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
		}
	}

	.copy {
		max-width: 46em;
	}

	.about-points {
		display: grid;
		gap: $spacing2;
		margin-top: $spacing4;

		div {
			display: grid;
			grid-template-columns: auto 1fr;
			gap: $spacing2;
			align-items: start;
			padding-bottom: $spacing2;
			border-bottom: 1px solid rgba(42, 77, 111, 0.12);
		}

		span {
			font-size: $font-size4;
			font-weight: 700;
			color: $base-color;
		}
	}

	.art img {
		width: 100%;
		height: auto;
		border-radius: $border-radius3;
		background: rgba(255, 255, 255, 0.72);
		box-shadow: 0 1.2em 2.4em rgba(30, 43, 61, 0.08);
	}

	.principles-intro {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: $spacing5;
		align-items: center;
		margin-bottom: $spacing4;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
		}
	}

	.principles-art img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: $border-radius3;
		background: #eef5fd;
		box-shadow: 0 1.2em 2.4em rgba(30, 43, 61, 0.07);
	}

	.pillars {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: $spacing3;

		@include media(xsm, sm) {
			grid-template-columns: 1fr;
		}

		article {
			border-radius: $border-radius3;
			padding: $spacing3;
			background: #f3f8fd;
			box-shadow: 0 1em 2em rgba(30, 43, 61, 0.04);
		}
	}

	.about-cta-inner {
		text-align: center;

		h2 {
			max-width: 20ch;
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
</style>