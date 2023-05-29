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
    
}

