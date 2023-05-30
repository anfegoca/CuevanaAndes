import { Platform } from "./Platform";
import { Serie } from "./Serie";
import { Category } from "./Category";
import { Collaborator } from "./Collaborator";
import { platform } from "os";
import { Actor } from "./Actor";
import { Director } from "./Director";


    
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
	
	createSerie(categoryName: string, image: string, nameSerie: string, platformName: string): Serie | undefined {
		let ans = undefined;
		let platform = this.getPlatform(platformName);
		if(platform != undefined){
			ans = platform.createSerie(categoryName,nameSerie,image);
		}
		return ans; 
	}
	
	createCategory(categoryName: string, descriptionCategory: string): Category | undefined{
		let ans = undefined;
		this.platforms.forEach(platform => ans = platform.createCategory(categoryName,descriptionCategory));
		return ans;
	}
	
	createActor(name: string, image: string, description: string, serieName: string): Actor | undefined{
		let ans = undefined;
		for(const platform of this.platforms){
			ans = platform.createActor(name,image,description,serieName);
			if(ans != undefined){
				break;
			}
		}
		return ans;
		
	}
	
	createDirector(name: string, image: string, description: string, nameSerie: string): Director | undefined{
		let ans = undefined;
		for(const platform of this.platforms){
			ans = platform.createDirector(name,image,description,nameSerie);
			if(ans != undefined){
				break;
			}
		}
		return ans;
	}
	
	addCategoryToSerie(nameCategory: string, nameSerie: string): boolean {

		let ans = 0;
		this.platforms.forEach(platform => { 
			if(platform.addCategoryToSerie(nameCategory,nameSerie)){
				ans++;
			}
		});
		return ans > 0 ? true : false;
	}
	
	addActorToSerie(nameActor: string, nameSerie: string): boolean {
		let ans = 0;
		this.platforms.forEach(platform => { 
			if(platform.addActorToSerie(nameActor,nameSerie)){
				ans++;
			}
		});
		return ans > 0 ? true : false;
	}
	
	addDirectorToSerie(nameDirector: string, nameSerie: string): boolean {
		let ans = 0;
		this.platforms.forEach(platform => { 
			if(platform.addDirectorToSerie(nameDirector,nameSerie)){
				ans++;
			}
		});
		return ans > 0 ? true : false;
	}
	
}

