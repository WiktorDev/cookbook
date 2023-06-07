import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import RecipeDetailsView from "@/views/details/RecipeDetailsView.vue";
import ErrorView from "@/views/ErrorView.vue";
import NewRecipeView from "@/views/new-recipe/NewRecipeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
		{
			path: '/nowy-przepis',
			name: 'new-recipe',
			component: NewRecipeView
		},
		{
			path: '/przepis/:slug',
			name: 'recipe',
			component: RecipeDetailsView
		},
		{
			path: '/:catchAll(.*)',
			name: 'ErrorView',
			component: ErrorView,
			props: {
				code: 404,
				message: 'Ta strona nie została odnaleziona!'
			}
		}
  ]
})

export default router
