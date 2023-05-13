<template>
	<div v-if="!item" class="h-[calc(100vh-200px)] flex items-center justify-center">
		<h1 class="text-4xl font-semibold text-center pr-3 border-r-2">404</h1>
		<h3 class="text-3xl pl-3">Ten przepis nie został odnaleziony!</h3>
	</div>
	<div v-else>
		{{ item }}
	</div>
</template>
<script setup>
import {useRoute} from "vue-router";
import {Recipe} from "@/objects/Recipe";

const items = [
	new Recipe("Sernik", "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/sernik-krolewski-00_0.jpg", true),
	new Recipe("Ciasto leśny mech", "https://static.fajnegotowanie.pl/media/uploads/media_image/original/przepis/554/ciasto-lesny-mech.jpg")
]
const slug = useRoute().params.slug

const props = defineProps({
	test: {
		type: String
	}
})
console.log(props.test)
const item = items.find(item => item.name.toLowerCase() === slug.replaceAll("-", " "))
</script>
