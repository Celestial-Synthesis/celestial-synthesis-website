<template>
	<footer :class="{ 'theme-flowr-footer': isFlowRPage }">
		<div id="company-footer">
			<p>© {{ new Date().getFullYear() }} Celestial Synthesis. All rights reserved.</p>
			<nav aria-label="Footer">
				<NuxtLink to="/about">About Us</NuxtLink>
				<NuxtLink to="/product/flowr">FlowR</NuxtLink>
				<NuxtLink to="/contact">Contact</NuxtLink>
			</nav>
		</div>
	</footer>
</template>

<script setup>
const route = useRoute();
const isFlowRPage = computed(() => route.path === '/product/flowr');
</script>

<style lang="scss" scoped>
	footer {
		position: relative;
		display: block;
		margin: $spacing6 $spacing4 $spacing4;
		opacity: 0;
		animation: 5s ease 3s forwards appear;
		@keyframes appear {
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
		@include media(xsm) {
			display: block;
			height: auto;
			margin: $spacing3 $spacing4;
		}
	}

	footer.theme-flowr-footer {
		background: $white;
	}

	#company-footer {
		max-width: 72em;
		margin-inline: auto;
		padding: $spacing2 0;
		border-top: 0.1em solid $light-grey;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: $spacing2;
		flex-wrap: wrap;

		p {
			margin: 0;
			font-family: $font-main;
			color: $grey;
			font-size: $font-size8;
		}

		nav {
			display: flex;
			gap: $spacing3;
			align-items: center;
			flex-wrap: wrap;
			a {
				font-family: $font-accent;
				font-size: $font-size8;
				letter-spacing: 0.01em;
				font-weight: 600;
				color: $grey;
			}
		}
	}

	.theme-flowr-footer #company-footer {
		background: $white;
	}

	.theme-flowr-footer #company-footer nav a,
	.theme-flowr-footer #company-footer nav a:visited {
		color: #8d2e3a;
	}

	.theme-flowr-footer #company-footer nav a:hover,
	.theme-flowr-footer #company-footer nav a.router-link-active,
	.theme-flowr-footer #company-footer nav a.router-link-exact-active {
		color: #5a1c24;
	}
</style>
