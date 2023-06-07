<template>
<!--	<ErrorView v-if="!item" message="Ten przepis nie został odnaleziony!" :code="404"/>-->
  <p>{{ item }}</p>
</template>
<script setup>
import {useRoute} from "vue-router";
import {useRecipesStore} from "@/stores/recipes";

const slug = useRoute().params.slug
const item = useRecipesStore().getRecipe(slug)
</script>