import { Serie } from "./Serie";

export class Category
{

	constructor(
		private name: string,
		private description: string,
		private series: Array<Serie>
	){}

	getSeries(): Array<Serie> {
		
		return this.series;
	}

	getSerie(name: string) : Serie | undefined {
		let ans = undefined;
		for(const serie of this.series){
			if(serie.isYourName(name)){
				ans = serie;
				break;
			}
		}
		return ans;
	}

	getCollaborator(name: string) {
		let ans = undefined;
		for(const serie of this.series){
			let collaborator = serie.getCollaborator(name);
			if(collaborator!=undefined){
				ans = collaborator;
				break;
			}
		}
		return ans;
	}
    
}

