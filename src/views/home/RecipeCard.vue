<template>
  <div class="relative bg-[#EDEDE9] rounded-[35px] h-[325px] w-[300px] select-none mb-8 hover:shadow-md transition-all duration-300 ease-in-out">
    <div class="absolute w-full flex justify-end p-6 z-10">
      <div class="text-3xl px-4 py-3 bg-[#EDEDE9] rounded-[15px]" @click="like">
        <IconHeart v-if="isLiked" class="text-[#F40469]"/>
        <IconHeartRegular v-else/>
      </div>
    </div>
    <router-link :to="uri">
      <img :src="props.item.imageUrl" class="h-[224px] w-full rounded-[35px]" draggable="false" alt="">
      <h2 class="text-2xl font-semibold text-center mt-5">{{ props.item.name }}</h2>
      <div class="flex justify-center mt-3 items-center">
        <IconStar class="text-[#FFB703]" v-for="index in 5" :key="index"/>
        <h3 class="ml-3">5/5 (11)</h3>
      </div>
    </router-link>
  </div>
</template>
<script setup>
import IconStar from "@/components/icons/IconStar.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconHeartRegular from "@/components/icons/IconHeartRegular.vue";
import {ref} from "vue";
import {Recipe} from "@/objects/Recipe";

const props = defineProps({
	item: {
		type: Recipe,
		required: true
	}
})
const isLiked = ref(props.item.isLiked)
const uri = `/przepis/${props.item.name.toLowerCase().replaceAll(" ", "-")}
`
function like() {
	isLiked.value = !isLiked.value
}
</script>