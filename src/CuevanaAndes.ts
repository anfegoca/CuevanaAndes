
/* Generated with GenMyModel */

/// <reference path="Director.ts" />
/// <reference path="Serie.ts" />
/// <reference path="Category.ts" />
/// <reference path="Platform.ts" />
/// <reference path="Collaborator.ts" />
/// <reference path="Actor.ts" />

    
class CuevanaAndes
{
    // Attributes
	platform: Array<Platform>;
	
    // Implemented attributes
	
    // Operations
	getSeries(): Array<Serie> {
		return []; //TODO: Implement
	}
	
	getSerie(name: string): Serie {
		return null; //TODO: Implement
	}
	
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
	
}

