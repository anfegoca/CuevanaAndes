import { Platform } from "./Platform";
import { Serie } from "./Serie";
import { Category } from "./Category";
import { Collaborator } from "./Collaborator";


    
export class CuevanaAndes
{
    
	constructor(
		private platforms: Array<Platform>
		){}
    
	getSeries(): Array<Serie> {
		const ans: Set<Serie> = new Set();
		this.platforms.forEach(platform => platform.getSeries().forEach(serie => ans.add(serie)));
		return Array.from(ans);
	}
	
	getSerie(name: string): Serie | undefined{
		let ans = undefined;
		for(const platform of this.platforms){
			let serie = platform.getSerie(name);
			if(serie != undefined){
				ans = serie;
				break;
			}
		}
		return ans;
	}
	
	getCategories(): Array<Category> {
		const ans: Set<Category> = new Set();
		this.platforms.forEach(platform => platform.getCategories().forEach(category => ans.add(category)));
		return Array.from(ans);
	}

	getCollaboratorsBySerie(name: string): Array<Collaborator> | undefined{
		let ans = undefined;
		let serie = this.getSerie(name);
		if(serie!=undefined){
			ans = serie.getCollaborators();
		}
		return ans;
	}
	
	getCollaborator(name: string): Collaborator | undefined {
		let ans = undefined;
		for(const platform of this.platforms){
			let collaborator = platform.getCollaborator(name);
			if(collaborator != undefined){
				ans = collaborator;
				break;
			}
		}
		return ans;
	}
	
	getPlatforms(): Array<Platform> {
		return this.platforms;
	}
	
	getPlatform(name: string): Platform | undefined{
		let ans = undefined
		for (const platform of this.platforms){
			if(platform.isYourName(name)){
				ans = platform;
			}
		}
		return ans; 
	}
	/*
	createSerie(categoryName: string, image: string, nameSerie: string, platformName: string): Serie {
		return null; //TODO: Implement
	}
	
	createCategory(platformName: string, CategoryName: string, descriptionCategory: string): Category {
		return null; //TODO: Implement
	}
	
	createActor(name: string, image: string, description: string, serieName: string): Actor {
		return null; //TODO: Implement
	}
	
	createDirector(name: string, image: string, description: string, nameSerie): Director {
		return null; //TODO: Implement
	}
	
	addCategoryToSerie(nameCategory: string, nameSerie: string): boolean {
		return false; //TODO: Implement
	}
	
	addActorToSerie(nameActor: string, nameSerie: string): boolean {
		return false; //TODO: Implement
	}
	
	addDirectorToSerie(nameDirector: string, nameSerie: string): boolean {
		return false; //TODO: Implement
	}
	
	 
	// Implemented operations
	*/
}

