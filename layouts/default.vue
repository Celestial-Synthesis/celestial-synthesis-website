<template>
	<div class="layout-wrapper" :class="{'--firstVisitAnimation': firstVisit }">
		<LayoutHeader />
		<div class="page-wrapper default">
			<slot />
		</div>
		<LayoutFooter />
	</div>
</template>

<script setup>

const route = useRoute();
// initiallize 'firstVisit' state => changed via watch 
const firstVisit = useState("firstVisit", () => route.path === '/' ? true : false);

watch( () => route.fullPath,
	() => {
		firstVisit.value = false
	}
)
</script>