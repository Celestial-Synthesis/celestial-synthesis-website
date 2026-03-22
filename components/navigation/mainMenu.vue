<template>
	<div id="main-menu" :class="{ 'theme-flowr-menu': isFlowRPage }">
		<button
			id="mobile-menu__toggle-button"
			type="button"
			@click="toggleMobileMenu()"
			:class="{ mobileMenuOpen: mobileMenuActive }"
			:aria-expanded="mobileMenuActive ? 'true' : 'false'"
			aria-controls="site-navigation"
			aria-label="Toggle navigation menu"
		>
			<span class="toggle-icon">{{ mobileMenuActive ? '×' : '☰' }}</span>
			<span class="toggle-label">{{ mobileMenuActive ? 'Close' : 'Menu' }}</span>
		</button>

		<nav id="site-navigation" :class="{ mobileMenuOpen: mobileMenuActive }">
			<div class="mobile-menu-panel">
				<menu class="main-menu__basic">
					<NuxtLink to="/" class="menu-item item--home" prefetch>
						<span>Home</span>
					</NuxtLink>
					<NuxtLink to="/product/flowr" class="menu-item" prefetch>
						<span>FlowR</span>
					</NuxtLink>
					<NuxtLink to="/about" class="menu-item" prefetch>
						<span>About Us</span>
					</NuxtLink>
					<NuxtLink to="/contact" class="menu-item" prefetch>
						<span>Contact</span>
					</NuxtLink>
				</menu>
				<NuxtLink to="/contact" class="header-cta" prefetch>
					Talk to the team
				</NuxtLink>
			</div>
		</nav>
	</div>
</template>

<script setup>
const mobileMenuActive = ref(false);
const route = useRoute();
const isFlowRPage = computed(() => route.path === '/product/flowr');
watch(route, () => {
	mobileMenuActive.value = false;
});

function toggleMobileMenu() {
	mobileMenuActive.value = !mobileMenuActive.value;
}

watch(
	// closes menu on route change
	() => route.path,
	() => {
		mobileMenuActive.value = false
	}
)

</script>

<style lang="scss" scoped>
nav {
	display: flex;
	align-items: center;
	gap: $spacing2;

	@include media(xsm) {
		position: fixed;
		inset: 0;
		display: none;
		padding: 4.9rem $spacing4 $spacing4;
		background: rgba(255, 255, 255, 0.72);
		backdrop-filter: blur(10px);
	}
}

.mobile-menu-panel {
	display: flex;
	align-items: center;
	gap: $spacing2;

	@include media(xsm) {
		display: grid;
		align-content: start;
		gap: $spacing2;
		width: 100%;
		padding: $spacing3 $spacing3 $spacing2;
		border-radius: 1rem;
		background: rgba(255, 255, 255, 0.97);
		border: 1px solid rgba(30, 43, 61, 0.08);
		box-shadow: 0 1.2em 2.4em rgba(23, 37, 58, 0.08);
	}
}

.theme-flowr-menu .mobile-menu-panel {
	@include media(xsm) {
		padding-top: $spacing2;
	}
}

.main-menu__basic {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	gap: $spacing1;
	margin: 0;
	padding: 0;

	@include media(xsm) {
		position: relative;
		display: grid;
		gap: 0;
		height: auto;
		margin: 0;
		padding-left: 0;
		width: 100%;
		background: $white;
		border-top: 1px solid rgba(30, 43, 61, 0.12);
	}

	span {
		padding: $spacing1 $spacing2;
		width: auto;
		@include media(xsm) {
			width: 100%;
			padding: $spacing2 0;
		}
	}

	.menu-item {
		cursor: pointer;
		@include media(xsm) {
			width: 100%;
		}

		span {
			display: block;
			text-align: center;
			list-style: none;
			font-family: $font-accent;
			text-transform: none;
			letter-spacing: 0.01em;
			font-weight: 600;
			font-size: $font-size8;
			border-radius: 999px;
			transition: $transition1;

			@include media(xsm) {
				text-align: left;
				font-size: $font-size6;
				border-radius: 0;
				background: transparent;
				border: 0;
				border-bottom: 1px solid rgba(30, 43, 61, 0.12);
				color: $dark-grey;
			}
		}

		&.router-link-active span,
		&:hover span {
			background: #edf4fb;
			color: $base-color;
		}

		@include media(xsm) {
			&.router-link-active span,
			&:hover span {
				background: transparent;
				border-color: rgba(30, 43, 61, 0.22);
				color: $base-color;
			}
		}
	}
}

.theme-flowr-menu .main-menu__basic a.menu-item.router-link-active span,
.theme-flowr-menu .main-menu__basic a.menu-item.router-link-exact-active span,
.theme-flowr-menu .main-menu__basic a.menu-item:hover span {
	background: #f8edf0;
	color: #8d2e3a;
}

.theme-flowr-menu .main-menu__basic a.menu-item.router-link-active span,
.theme-flowr-menu .main-menu__basic a.menu-item.router-link-exact-active span {
	font-weight: 700;
}

@include media(xsm) {
	.theme-flowr-menu .main-menu__basic a.menu-item.router-link-active span,
	.theme-flowr-menu .main-menu__basic a.menu-item.router-link-exact-active span,
	.theme-flowr-menu .main-menu__basic a.menu-item:hover span {
		background: transparent;
		border-color: rgba(90, 28, 36, 0.22);
		color: #8d2e3a;
	}
}

.header-cta {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: $spacing1 $spacing3;
	border-radius: 999px;
	background: $base-color;
	color: $white;
	font-family: $font-accent;
		text-transform: none;
		letter-spacing: 0.01em;
		font-weight: 600;
	font-size: $font-size8;
	white-space: nowrap;
	transition: transform 140ms ease, opacity 140ms ease;

	&:hover {
		transform: translateY(-1px);
		opacity: 0.92;
	}

	@include media(xsm) {
		display: inline-flex;
		width: fit-content;
		padding: $spacing1 0;
		font-size: $font-size7;
		border-radius: 0;
		background: transparent;
		border: 0;
		color: $base-color;
	}
}

.theme-flowr-menu .header-cta {
	background: #8d2e3a;
	border-color: #8d2e3a;
	color: $white;

	&:hover {
		background: #5a1c24;
		border-color: #5a1c24;
	}

	@include media(xsm) {
		background: transparent;
		color: #8d2e3a;

		&:hover {
			background: transparent;
			color: #5a1c24;
		}
	}
}


// toggle states/ mobile

nav {
	@include media(xsm) {
		display: none;
	}
}

nav.mobileMenuOpen {
	@include media(xsm) {
		display: block;
	}
}

#mobile-menu__toggle-button {
	display: none;
	cursor: pointer;
	border: 0;
	background: transparent;
	color: $dark-grey;
	@include media(xsm) {
		position: relative;
		z-index: 99;
		display: inline-flex;
		align-items: center;
		gap: $spacing1;
		font-size: 0.8em;
		text-align: center;
		width: auto;
		padding: $spacing1 0;
		border-radius: 999px;
		border: 0;
		background: transparent;
		box-shadow: none;
	}
	.toggle-icon {
		font-size: $font-size3;
		line-height: 1;
	}

	.toggle-label {
		font-family: $font-accent;
		font-size: $font-size8;
		font-weight: 600;
		letter-spacing: 0.01em;
	}
}

#mobile-menu__toggle-button.mobileMenuOpen {
	@include media(xsm) {
		color: $base-color;
	}
}

.theme-flowr-menu #mobile-menu__toggle-button,
.theme-flowr-menu #mobile-menu__toggle-button.mobileMenuOpen {
	@include media(xsm) {
		color: #5a1c24;
	}
}

#main-menu {
	position: relative;
	@include media(xsm) {
		position: relative;
		z-index: 99;
	}
}
</style>
