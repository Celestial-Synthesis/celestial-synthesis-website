<template>
	<footer>
		<div id="company-footer">
			<p>© {{ new Date().getFullYear() }} Celestial Synthesis. All rights reserved.</p>
			<nav aria-label="Footer">
				<NuxtLink to="/about">About Us</NuxtLink>
				<a href="http://flowr.celestialsynthesis.com/">FlowR</a>
				<NuxtLink to="/contact">Contact</NuxtLink>
			</nav>
		</div>
	</footer>
</template>

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

</style>
