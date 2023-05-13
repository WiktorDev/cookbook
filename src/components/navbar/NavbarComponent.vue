<template>
  <nav class="flex justify-between p-2 items-center h-24 mx-20">
    <div>
      <h1 class="text-2xl font-bold">LOGO</h1>
    </div>
    <div @click="open">
      <h1 class="text-2xl font-bold">H</h1>
    </div>
  </nav>
  <div v-if="isOpen" class="fixed top-0 left-0 w-full h-full z-20 bg-white transition-all duration-300 ease-in-out">
		<div class="absolute z-20 w-full flex justify-end p-10" @click="open">
			X
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

const isOpen = ref(false)
function open() {
	isOpen.value = !isOpen.value
}
</script>
