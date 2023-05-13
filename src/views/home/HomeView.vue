<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center lg:mx-20">
		<RecipeCard v-for="(item, index) in items" :key="index" :item="item"/>
	</div>
</template>
<script setup>
import RecipeCard from "@/views/home/RecipeCard.vue";
import {Recipe} from "@/objects/Recipe";

const items = [
	new Recipe("Sernik", "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/sernik-krolewski-00_0.jpg", true),
	new Recipe("Ciasto leśny mech", "https://static.fajnegotowanie.pl/media/uploads/media_image/original/przepis/554/ciasto-lesny-mech.jpg")
]
</script>
