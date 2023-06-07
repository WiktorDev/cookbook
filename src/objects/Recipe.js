export class Recipe {
	constructor(name, time, description, imageUrl, ingredients, isLiked=false) {
		this.name = name
		this.time = time
		this.description = description
		this.imageUrl = imageUrl
		this.ingredients = ingredients
		this.isLiked = isLiked
	}
}
