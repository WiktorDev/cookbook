<template>
  <nav class="flex justify-between p-2 items-center h-24 mx-20 mb-8">
		<router-link to="/" class="flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/512/1021/1021460.png" class="w-12 mr-4" alt="">
      <h1 class="text-2xl font-bold">Przepisownik.pl</h1>
		</router-link>
    <IconBars class="text-2xl font-bold" @click="state.switchState()"/>
  </nav>
  <div v-if="state.isOpen" class="fixed top-0 left-0 w-full h-full z-20 bg-white transition-all duration-300 ease-in-out">
		<div class="absolute z-20 w-full flex justify-end py-10 px-20" @click="state.switchState()">
			<IconClose />
		</div>
    <ul class="h-screen flex flex-col items-center justify-center">
			<NavbarLink name="Wszystkie przepisy" link="/"/>
      <NavbarLink name="Ulubione przepisy" link="/"/>
      <NavbarLink name="Dodaj przepis" link="/nowy-przepis"/>
    </ul>
  </div>
</template>
<script setup>
import NavbarLink from "@/components/navbar/NavbarLink.vue";
import IconBars from "@/components/icons/IconBars.vue";
import IconClose from "@/components/icons/IconClose.vue";
import {useNavbarState} from "@/stores/navbarState";

const state = useNavbarState()
</script>
