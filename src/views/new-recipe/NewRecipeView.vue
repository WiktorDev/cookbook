<template>
  <div class="lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
    <div>
      <h2 class="text-2xl font-semibold pb-5">Informacje ogólne</h2>
      <y-input caption="Nazwa potrawy" class="mb-5" v-model="recipe.name"/>
      <y-input caption="Czas przygotowania" type="time" class="mb-5" v-model="recipe.time"/>
      <y-input caption="Link do zdjęcia" type="url" class="mb-5" v-model="recipe.imageUrl"/>
      <y-textarea caption="Treść przepisu" v-model="recipe.description"/>
    </div>
    <div>
      <h2 class="text-2xl font-semibold pb-5">Składniki</h2>
      <div class="flex gap-2 pb-5" v-for="(ingredient, index) in recipe.ingredients" :key="index">
        <y-input caption="Skladnik" class="w-64" v-model="ingredient.name"/>
        <y-input caption="Ilość" class="flex-1 w-32" v-model="ingredient.count"/>
        <y-button name="+" @click="add"/>
        <y-button name="-" color="bg-[#BC4749]" @click="remove(index)"/>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-10">
    <y-button name="Dodaj nowy przepis" color="bg-[#D4A373]" @click="saveRecipe"/>
  </div>
</template>
<script setup>
import {ref} from "vue";
import {useToast} from "vue-toastification";
import {useRouter} from "vue-router";
import {useRecipesStore} from "@/stores/recipes";

const router = useRouter()
const toast = useToast()
const store = useRecipesStore()

const recipe = ref({
  name: null,
  time: null,
  description: null,
  imageUrl: null,
  ingredients: [
    {
      name: null,
      count: null
    }
  ]
})

const fieldsRegex = {
  name: {
    regex: /^.{3,32}/,
    message: 'Nazwa przepisu musi od 1 do 35 znaków!'
  },
  time: {
    regex: /^.{3,32}/,
    message: 'Czas musi miec minimum 4 znaki, np. 30 min'
  },
  imageUrl: {
    regex: /^https?:\/\/.+\.(jpg|jpeg|png|webp|ico|gif)$/,
    message: 'Wpisany URL zdjecia jest niepoprawny!'
  },
  description: {
    regex: /^.{20,200}/,
    message: 'Opis musi zawierac przynajmniej 20 znaków!'
  }
}

function add() {
  recipe.value.ingredients.push({})
}
function remove(index) {
  if (recipe.value.ingredients.length <= 1) return
  recipe.value.ingredients.splice(index, 1)
}
function saveRecipe() {
  let isValid = true
  Object.keys(recipe.value).forEach(key => {
    if (!isValid) return;
    if (!fieldsRegex[key]) return
    const validator = fieldsRegex[key]
    if (!recipe.value[key] || !validator.regex.test(recipe.value[key])) {
      toast.error(validator.message)
      isValid = false
    }
  })
  if (isValid) {
    toast.success('Przepis został pomyślnie dodany!')
    store.newRecipe(recipe.value)
    router.push('/')
  }
}
</script>