<template>
	<template v-if="!item">
    <ErrorView message="Ten przepis nie został odnaleziony!" :code="404"/>
  </template>
  <template v-else>
    <div class="lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <h2 class="text-2xl font-semibold pb-5">Informacje ogólne</h2>
        <y-input caption="Nazwa potrawy" class="mb-5" v-model="item.name" :disabled="true"/>
        <y-input caption="Czas przygotowania" type="text" class="mb-5" v-model="item.time" :disabled="true"/>
        <y-textarea caption="Treść przepisu" v-model="item.description" :disabled="true"/>
      </div>
      <div>
        <h2 class="text-2xl font-semibold pb-5">Składniki</h2>
        <div class="flex gap-2 pb-5" v-for="(ingredient, index) in item.ingredients" :key="index">
          <y-input caption="Skladnik" class="w-64" v-model="ingredient.name" :disabled="true"/>
          <y-input caption="Ilość" class="flex-1 w-32" v-model="ingredient.count" :disabled="true"/>
        </div>
        <img :src="item.imageUrl" class="h-fit w-[224px] rounded-[35px]" >
      </div>
    </div>
  </template>
</template>
<script setup>
import {useRoute} from "vue-router";
import {useRecipesStore} from "@/stores/recipes";
import ErrorView from "@/views/ErrorView.vue";

const slug = useRoute().params.slug
const item = useRecipesStore().getRecipe(slug)
</script>