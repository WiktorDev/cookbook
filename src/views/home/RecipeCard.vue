<template>
  <div class="relative bg-[#EDEDE9] rounded-[35px] h-[450px] w-[400px] select-none mb-8">
    <div class="absolute w-full flex justify-end p-6 z-10">
      <div class="text-3xl px-4 py-3 bg-[#EDEDE9] rounded-[15px]" @click="like">
        <IconHeart v-if="isLiked" class="text-[#F40469]"/>
				<IconHeartRegular v-else/>
      </div>
    </div>
    <img src="https://cdn.aniagotuje.com/pictures/articles/2022/08/31553217-v-1500x1500.jpg" class="h-[324px] w-full rounded-[35px]" draggable="false" alt="">
    <h2 class="text-2xl font-semibold text-center mt-5">Pizza pepperoni</h2>
    <div class="flex justify-center mt-3 items-center">
      <IconStar class="text-[#FFB703]" v-for="index in 5" :key="index"/>
      <h3 class="ml-3">5/5 (11)</h3>
    </div>
  </div>
</template>
<script setup>
import IconStar from "@/components/icons/IconStar.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import IconHeartRegular from "@/components/icons/IconHeartRegular.vue";
import {ref} from "vue";

const isLiked = ref(false)
function like() {
	isLiked.value = !isLiked.value
}
</script>
