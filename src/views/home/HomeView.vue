<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center lg:mx-20">
		<RecipeCard v-for="(item, index) in items" :key="index" :item="item"/>
	</div>
</template>
<script setup>
import RecipeCard from "@/views/home/RecipeCard.vue";
import {useRecipesStore} from "@/stores/recipes";

const items = useRecipesStore().recipes
</script>
