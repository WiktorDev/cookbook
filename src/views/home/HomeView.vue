<template>
<!--	grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-20-->
<!--	flex flex-wrap gap-8 lg:mx-20-->
  <div class="flex flex-wrap gap-8 lg:mx-20">
		<RecipeCard v-for="(item, index) in items" :key="index" :item="item"/>
	</div>
</template>
<script setup>
import RecipeCard from "@/views/home/RecipeCard.vue";
import {useRecipesStore} from "@/stores/recipes";

const items = useRecipesStore().recipes
</script>
