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

	createSerie(name: string, image: string){
		let serie = new Serie(image,name,[],[]);
		this.series.push(serie);
		return serie;
	}

	createActor(name: string, image: string, description: string, serieName: string){
		let ans = undefined;
		let serie = this.getSerie(serieName);
		if(serie != undefined){
			ans = serie.createActor(name,image,description);
		}
		return ans;
	}

	createDirector(name: string, image: string, description: string, serieName: string){
		let ans = undefined;
		let serie = this.getSerie(serieName);
		if(serie != undefined){
			ans = serie.createDirector(name,image,description);
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

	addSerie(serie: Serie){
		let ans = false;
		let serieA = this.getSerie(serie.getName());
		if(serieA == undefined){
			this.series.push(serie);
			ans = true;
		}
		return ans;
	}
    
}

