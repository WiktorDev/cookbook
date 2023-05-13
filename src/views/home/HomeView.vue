<template>
  <div class="grid grid-cols-4 justify-items-center mx-20">
		<RecipeCard v-for="index in 5" :key="index"/>
	</div>
</template>
<script setup>
import RecipeCard from "@/views/home/RecipeCard.vue";
</script>
