<template>
	<main class="privacy-page">
		<div class="privacy-inner">
			<header class="privacy-header">
				<p class="privacy-kicker">Privacy Policy</p>
				<h1>FlowR Privacy Policy</h1>
				<p class="privacy-updated">Last updated: 19 March 2026</p>
			</header>

			<section class="privacy-section">
				<h2>1. Who we are</h2>
				<p>FlowR provides a browser extension for recording and replaying guided website walkthroughs.</p>
				<p>Contact: <a href="mailto:support-flowr@celestialsynthesis.com">support-flowr@celestialsynthesis.com</a></p>
			</section>

			<section class="privacy-section">
				<h2>2. Data we process</h2>

				<h3>a) Recording content</h3>
				<p>When a user actively records a walkthrough, FlowR may process and store step metadata such as action type and timestamp, URLs relevant to recorded steps, selector metadata used for replay, instruction text entered by the user, and optional screenshot content where screenshot capture is enabled.</p>

				<h3>b) Account and sharing data</h3>
				<p>If users create an account or sign in, FlowR may process account information such as email address and account identifier. If users share recordings, FlowR may also process recipient email addresses and permission settings.</p>

				<h3>c) Billing/subscription data</h3>
				<p>Subscription and billing workflows may involve payment-related metadata, subscription status, and processor records generated through Stripe.</p>

				<h3>d) Analytics data</h3>
				<p>Some deployments may enable product analytics events, subject to applicable sanitization, redaction, and configuration controls.</p>
			</section>

			<section class="privacy-section">
				<h2>3. Storage model</h2>
				<p>FlowR is designed with a local-first model, which means recordings may be stored locally in browser extension storage. Where cloud sync is available and enabled for signed-in users, recordings and related screenshot artifacts may also be synchronized to cloud services.</p>
			</section>

			<section class="privacy-section">
				<h2>4. Legal bases (EU/UK users)</h2>
				<p>For users in the EU or UK, processing may rely on one or more legal bases depending on the relevant feature or service context, including contract performance for service delivery, legitimate interests for security and reliability, consent for optional analytics or feature toggles where applicable, and legal obligations relating to billing or compliance records.</p>
			</section>

			<section class="privacy-section">
				<h2>5. Data sharing and processors</h2>
				<p>FlowR may rely on service providers and subprocessors to support authentication, storage, billing, analytics, and communications. These may include Supabase for authentication, database, and storage services; Stripe for billing and subscription workflows; Amplitude for analytics where enabled; and email delivery providers used for sharing notifications.</p>
			</section>

			<section class="privacy-section">
				<h2>6. Data retention</h2>
				<p>Retention periods depend on feature usage, account status, and applicable legal or operational requirements. Content stored locally generally remains available until the user deletes it or uninstalls the extension. Cloud-synced content may remain until the user deletes the data, the account is removed, or an applicable retention period expires. Billing records may be retained for longer where required by law.</p>
			</section>

			<section class="privacy-section">
				<h2>7. Security</h2>
				<p>Reasonable technical and organizational measures may be applied to protect personal data and product content. No system or transmission method can be guaranteed to be completely secure.</p>
			</section>

			<section class="privacy-section">
				<h2>8. User rights</h2>
				<p>Depending on the applicable jurisdiction, users may have rights to access, correct, delete, export, or restrict certain processing of their information.</p>
				<p>For requests: <a href="mailto:support-flowr@celestialsynthesis.com">support-flowr@celestialsynthesis.com</a></p>
			</section>

			<section class="privacy-section">
				<h2>9. International transfers</h2>
				<p>Where information is processed across jurisdictions, appropriate safeguards should be applied in accordance with applicable law.</p>
			</section>

			<section class="privacy-section">
				<h2>10. Children</h2>
				<p>FlowR is not intended for children below the applicable age of digital consent.</p>
			</section>

			<section class="privacy-section">
				<h2>11. Changes</h2>
				<p>This policy may be updated from time to time. Material changes should be reflected by updating the effective date shown on this page.</p>
			</section>
		</div>
	</main>
</template>

<script setup>
useSeoMeta({
	title: "FlowR Privacy Policy | Celestial Synthesis",
	description: "Privacy policy for the FlowR product experience.",
});
</script>

<style lang="scss" scoped>

.privacy-page {
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

.privacy-inner {
	max-width: 52rem;
	margin: 0 auto;
	padding: 3.5rem 1.5rem 5rem;

	@include media(xsm, sm) {
		padding: 2.5rem 1rem 4rem;
	}
}

.privacy-header {
	padding-bottom: 1.5rem;
	border-bottom: 1px solid #d9d9d9;
	margin-bottom: 2rem;
}

.privacy-kicker,
.privacy-updated {
	margin: 0;
	font-size: 0.95rem;
	color: #444;
}

.privacy-kicker {
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

h3 {
	font-size: 1.05rem;
	line-height: 1.4;
	margin: 1.25rem 0 0.5rem;
}

p,
li {
	font-size: 1rem;
	line-height: 1.7;
	color: #111;
}

ul {
	padding-left: 1.35rem;
	margin: 0.5rem 0 0;

	li + li {
		margin-top: 0.35rem;
	}

	@include media(xsm, sm) {
		padding-left: 1.15rem;
	}
}

.privacy-section {
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