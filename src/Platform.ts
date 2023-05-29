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

	isYourName(name: string) : boolean {
		let ans : boolean = false;
		if(this.name == name){
			ans = true;
		}
		return ans;
	}

	getCategories(){
		return this.categories;
	}

	
}

