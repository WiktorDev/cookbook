<template>
<!--	<ErrorView v-if="!item" message="Ten przepis nie został odnaleziony!" :code="404"/>-->
	<div v-if="item">
		{{ item }}
	</div>
</template>
<!--<script setup>-->
<!--import {useRoute} from "vue-router";-->
<!--import {useRecipesStore} from "@/stores/recipes";-->

<!--const slug = useRoute().params.slug-->
<!--console.log(useRecipesStore().recipes)-->
<!--const item = useRecipesStore().getRecipe(slug)-->
<!--</script>-->
<script>
import {useRecipesStore} from "@/stores/recipes";


export default {
	// components: {
	// 	ErrorView
	// },
  data: () => ({
    item: {},
    items: useRecipesStore().recipes
  }),
  updated() {
    console.log("ee")
    const slug = this.$route.params.slug
    console.log(slug)
        //.find(item => item.name.toLowerCase() === slug.replaceAll("-", " "))
    console.log(useRecipesStore().recipes.filter(item => item.name === slug))
  },
  // setup() {
	// 	const slug = useRoute().params.slug
  //   console.log(slug)
	// 	console.log(useRecipesStore().getRecipe(slug))
	// 	return {
	// 		item: computed(() => useRecipesStore().getRecipe(slug))
	// 	}
	// }
}
</script>
