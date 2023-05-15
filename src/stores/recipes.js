import { defineStore } from 'pinia'
import {Recipe} from "@/objects/Recipe";

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = [
		new Recipe("Sernik", "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/sernik-krolewski-00_0.jpg", true),
		new Recipe("Ciasto leśny mech", "https://static.fajnegotowanie.pl/media/uploads/media_image/original/przepis/554/ciasto-lesny-mech.jpg")
	]

  function getRecipe(slug) {
		return recipes.find(item => item.name.toLowerCase() === slug.replaceAll("-", " "))
  }

  return { recipes, getRecipe }
})
