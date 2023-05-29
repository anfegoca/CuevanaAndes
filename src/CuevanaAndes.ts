import { platform } from "os";
import { Platform } from "./Platform";
import { Serie } from "./Serie";


    
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
	/*
	getCategories(name: string): Array<Category> {
		return []; //TODO: Implement
	}
	
	getCollaboratorsBySerie(name: string): Array<Collaborator> {
		return []; //TODO: Implement
	}
	
	getCollaborator(name: string): Collaborator {
		return null; //TODO: Implement
	}
	
	getPlatforms(name: string): Array<Platform> {
		return []; //TODO: Implement
	}
	
	getPlatform(name: string): Platform {
		return null; //TODO: Implement
	}
	
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

