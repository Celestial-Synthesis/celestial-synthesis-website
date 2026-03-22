<template>
	<main class="terms-page">
		<div class="terms-inner">
			<header class="terms-header">
				<p class="terms-kicker">Terms of Use</p>
				<h1>FlowR Terms of Use</h1>
				<p class="terms-updated">Last updated: 19 March 2026</p>
			</header>

			<section class="terms-section">
				<h2>1. Agreement scope</h2>
				<p>These Terms govern access to and use of FlowR software and related services.</p>
			</section>

			<section class="terms-section">
				<h2>2. Eligibility and account use</h2>
				<p>Where accounts are required, users must provide accurate account information and keep that information reasonably up to date. Users are responsible for activity carried out through their accounts and for safeguarding credentials, access methods, and devices used to access the service.</p>
			</section>

			<section class="terms-section">
				<h2>3. Acceptable use</h2>
				<p>Users may not use FlowR in a manner that violates applicable law, infringes third-party rights, records or shares unlawful or unauthorized content, attempts to bypass plan limits or security controls, or reverse engineers, disrupts, or abuses service infrastructure beyond permitted use.</p>
			</section>

			<section class="terms-section">
				<h2>4. User content and permissions</h2>
				<p>Users retain rights in content they create or upload, subject to the rights reasonably necessary for FlowR to operate the service. Users are responsible for ensuring they have the necessary authority and permissions to record, store, and share walkthrough content, screenshots, and related materials.</p>
			</section>

			<section class="terms-section">
				<h2>5. Sharing and collaboration</h2>
				<p>FlowR may support email sharing, access controls, and permission settings for collaboration. Users are responsible for selecting recipients appropriately, managing access settings, and verifying that shared content is disclosed only to authorized parties.</p>
			</section>

			<section class="terms-section">
				<h2>6. Subscription and billing</h2>
				<p>Certain features may require a paid subscription. Billing and subscription workflows may be managed through Stripe or related providers. Plan limits, pricing, and feature availability may vary by subscription tier and may change with notice where required.</p>
			</section>

			<section class="terms-section">
				<h2>7. Service changes</h2>
				<p>FlowR may modify, suspend, or discontinue features, functionality, or portions of the service from time to time. Where practical, reasonable notice may be provided before material changes take effect.</p>
			</section>

			<section class="terms-section">
				<h2>8. Warranties disclaimer</h2>
				<p>To the maximum extent permitted by applicable law, FlowR is provided on an "as is" and "as available" basis without warranties of any kind, whether express, implied, statutory, or otherwise.</p>
			</section>

			<section class="terms-section">
				<h2>9. Limitation of liability</h2>
				<p>To the maximum extent permitted by applicable law, FlowR and its operators are not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenues, data, goodwill, or business interruption arising out of or related to use of the service.</p>
			</section>

			<section class="terms-section">
				<h2>10. Indemnity</h2>
				<p>Users agree to indemnify and hold the provider harmless against claims, liabilities, damages, losses, and expenses arising from misuse of the service, unlawful content, or violations of these Terms, to the extent permitted by applicable law.</p>
			</section>

			<section class="terms-section">
				<h2>11. Termination</h2>
				<p>Access to FlowR may be suspended or terminated where necessary for breach of these Terms, security risk, suspected misuse, legal compliance, or operational protection. Violations of these Terms may result in immediate suspension or permanent loss of access. Where permitted by applicable law, users suspended or terminated for Terms violations may not be eligible for refunds, credits, or prorated reimbursements.</p>
			</section>

			<section class="terms-section">
				<h2>12. Governing law and dispute resolution</h2>
				<p>These Terms are governed by the law and dispute resolution framework specified for the applicable contracting entity and service region. Additional governing law, venue, and dispute resolution details may be provided in a separate order form, commercial agreement, or jurisdiction-specific supplement where applicable.</p>
			</section>

			<section class="terms-section">
				<h2>13. Contact</h2>
				<p>Questions regarding these Terms may be sent to <a href="mailto:support-flowr@celestialsynthesis.com">support-flowr@celestialsynthesis.com</a>.</p>
			</section>
		</div>
	</main>
</template>

<script setup>
useSeoMeta({
	title: "FlowR Terms of Use | Celestial Synthesis",
	description: "Terms of use for the FlowR product experience.",
});
</script>

<style lang="scss" scoped>

.terms-page {
	position: relative;
	margin-inline: calc(50% - 50vw);
	width: auto;
	padding: 0;
	background: #fff;
	color: #111;
	font-family: Georgia, "Times New Roman", serif;
	border-top: 1px solid #d9d9d9;

	a,
	a:link,
	a:visited {
		color: #111;
		text-decoration: underline;
	}
}

.terms-inner {
	max-width: 52rem;
	margin: 0 auto;
	padding: 3.5rem 1.5rem 5rem;

	@include media(xsm, sm) {
		padding: 2.5rem 1rem 4rem;
	}
}

.terms-header {
	padding-bottom: 1.5rem;
	border-bottom: 1px solid #d9d9d9;
	margin-bottom: 2rem;
}

.terms-kicker,
.terms-updated {
	margin: 0;
	font-size: 0.95rem;
	color: #444;
}

.terms-kicker {
	font-weight: 600;
	margin-bottom: 0.75rem;
	text-transform: uppercase;
	letter-spacing: 0.03em;
}

h1,
h2,
h3 {
	color: #111;
	margin-top: 0;
	font-family: Georgia, "Times New Roman", serif;
}

h1 {
	font-size: clamp(2rem, 1.7rem + 1.2vw, 2.8rem);
	line-height: 1.15;
	margin-bottom: 0.75rem;
}

h2 {
	font-size: 1.35rem;
	line-height: 1.3;
	margin-bottom: 0.9rem;
}

p,
li {
	font-size: 1rem;
	line-height: 1.7;
	color: #111;
}

.terms-section {
	padding-top: 1.5rem;
	margin-top: 1.5rem;
	border-top: 1px solid #e5e5e5;

	&:first-of-type {
		padding-top: 0;
		margin-top: 0;
		border-top: 0;
	}
}
</style>