import { defineStore } from 'pinia'
import {Recipe} from "@/objects/Recipe";
import {Ingredient} from "@/objects/Ingredient";

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = [
		new Recipe("sernik", "30 min", "", "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/sernik-krolewski-00_0.jpg", [], true),
		new Recipe("Ciasto leśny mech", "40 min", "lorem", "https://static.fajnegotowanie.pl/media/uploads/media_image/original/przepis/554/ciasto-lesny-mech.jpg", [new Ingredient("test", "1 szkl")], false),
	]

  function getRecipe(slug) {
		return recipes.find(item => item.name.toLowerCase() === slug.replaceAll("-", " "))
  }
  function newRecipe(recipe) {
      recipes.push(recipe)
  }

  return { recipes, getRecipe, newRecipe }
})
