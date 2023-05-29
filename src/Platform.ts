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

	getSeries(): Set<Serie> {
		const ans: Set<Serie> = new Set();
		this.categories.forEach(category => category.getSeries().forEach(serie => ans.add(serie)));
		return ans;
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

	
}

