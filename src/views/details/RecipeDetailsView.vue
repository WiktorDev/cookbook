<template>
<!--	<ErrorView v-if="!item" message="Ten przepis nie został odnaleziony!" :code="404"/>-->
	<div >
		{{ item }}
	</div>
</template>
<!--<script setup>-->
<!--import {useRoute} from "vue-router";-->
<!--import ErrorView from "@/views/ErrorView.vue";-->
<!--import {useRecipesStore} from "@/stores/recipes";-->

<!--const slug = useRoute().params.slug-->
<!--const item = useRecipesStore().getRecipe(slug)-->
<!--</script>-->
<script>
import {useRecipesStore} from "@/stores/recipes";
import {computed} from "vue";
import {useRoute} from "vue-router";

export default {
	// components: {
	// 	ErrorView
	// },
	setup() {
		const slug = useRoute().params.slug
		console.log(useRecipesStore().getRecipe(slug))
		return {
			item: computed(() => useRecipesStore().getRecipe(slug))
		}
	}
}
</script>
