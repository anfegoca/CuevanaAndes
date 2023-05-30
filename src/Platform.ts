import { Category } from "./Category";
import { Plan } from "./Plan";
import { Serie } from "./Serie";
   
export class Platform
{

	constructor(
		private name: string,
		private webSite: string,
		private categories: Array<Category>,
		private plans: Array<Plan>
		){}

	getSeries(): Array<Serie> {
		const ans: Set<Serie> = new Set();
		this.categories.forEach(category => category.getSeries().forEach(serie => ans.add(serie)));
		return Array.from(ans);
	}

	getSerie(name: string) : Serie | undefined{
		let ans = undefined;
		for(const category of this.categories){
			let serie = category.getSerie(name);
			if(serie != undefined){
				ans = serie;
				break;
			}
		}
		return ans;
	}

	getCollaborator(name: string) {
		let ans = undefined;
		for(const category of this.categories){
			let collaborator = category.getCollaborator(name);
			if(collaborator != undefined){
				ans = collaborator;
				break;
			}
		}
		return ans;
	}

	createCategory(name: string, description: string){
		let category = new Category(name,description,[]);
		this.categories.push(category);
		return category;
	}

	createSerie(categoryName: string, name: string, image: string) : Serie | undefined{
		let ans = undefined;
		let category = this.getCategory(categoryName);
		if(category != undefined){
			ans = category.createSerie(name,image);
		}
		return ans;
	}

	isYourName(name: string) : boolean {
		let ans : boolean = false;
		if(this.name == name){
			ans = true;
		}
		return ans;
	}

	getCategory(name: string){
		let ans = undefined;
		for(const category of this.categories){
			if(category.isYourName(name)){
				ans = category;
				break;
			}
		}
		return ans;
	}

	createActor(name: string, image: string, description: string, serieName: string){
		let ans = undefined;
		for(const category of this.categories){
			ans = category.createActor(name,image,description,serieName);
			if(ans != undefined){
				break;
			}
		}
		return ans;
	}

	createDirector(name: string, image: string, description: string, serieName: string){
		let ans = undefined;
		for(const category of this.categories){
			ans = category.createDirector(name,image,description,serieName);
			if(ans != undefined){
				break;
			}
		}
		return ans;
	}

	addCategoryToSerie(categoryName: any, nameSerie: string): boolean {
		let ans = false;
		let category = this.getCategory(categoryName);
		let serie = this.getSerie(nameSerie);
		if(category != undefined && serie != undefined){
			ans = category.addSerie(serie);
		}
		return ans;
	}

	addActorToSerie(nameActor: string, nameSerie: string) : boolean{
		let ans = false;
		let serie = this.getSerie(nameSerie);
		let actor = this.getCollaborator(nameActor);
		if(serie!=undefined && actor!=undefined){
			serie.addActor(actor);
			ans = true;
		}
		return ans;
	}

	addDirectorToSerie(nameDirector: string, nameSerie: string) {
		let ans = false;
		let serie = this.getSerie(nameSerie);
		let director = this.getCollaborator(nameDirector);
		if(serie!=undefined && director!=undefined){
			serie.addDirector(director);
			ans = true;
		}
		return ans;
	}


	

	getCategories(){
		return this.categories;
	}

	
}

