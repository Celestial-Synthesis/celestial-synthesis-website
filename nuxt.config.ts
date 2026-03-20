// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			title: "Celestial Synthesis",
		},
	},
	modules: ["@nuxt/content"],
	content: {
		markdown: {
			anchorLinks: false
		}
	},
	runtimeConfig: {
		public: {
			cloudinaryEnvUrl: 'https://res.cloudinary.com/sailsnake-api-test',
		}
	},
	css: [
		"@/assets/scss/normalize.css",
		"@/assets/scss/fonts.scss",
		"@/assets/scss/main.scss",
		"@/assets/scss/type.scss",
		"@/assets/scss/forms.scss",
		"@/assets/scss/cards.scss",
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/mixins.scss"; @import "@/assets/scss/variables.scss";',
				},
			},
		},
	},
});
