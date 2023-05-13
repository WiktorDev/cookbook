<template>
  <nav class="flex justify-between p-2 items-center h-24 mx-20 mb-8">
    <div class="flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/512/1021/1021460.png" class="w-12 mr-4" alt="">
      <h1 class="text-2xl font-bold">Przepisownik.pl</h1>
    </div>
    <IconBars class="text-2xl font-bold" @click="open"/>
  </nav>
  <div v-if="isOpen" class="fixed top-0 left-0 w-full h-full z-20 bg-white transition-all duration-300 ease-in-out">
		<div class="absolute z-20 w-full flex justify-end py-10 px-20" @click="open">
			<IconClose />
		</div>
    <ul class="h-screen flex flex-col items-center justify-center">
			<NavbarLink name="Wszystkie przepisy" link="/r"/>
      <NavbarLink name="Ulubione przepisy" link="/r"/>
      <NavbarLink name="Dodaj przepis" link="/r"/>
    </ul>
  </div>
</template>
<script setup>
import NavbarLink from "@/components/navbar/NavbarLink.vue";
import {ref} from "vue";
import IconBars from "@/components/icons/IconBars.vue";
import IconClose from "@/components/icons/IconClose.vue";

const isOpen = ref(false)
function open() {
	isOpen.value = !isOpen.value
}
</script>
