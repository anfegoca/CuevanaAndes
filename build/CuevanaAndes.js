"use strict";
/* Generated with GenMyModel */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuevanaAndes = void 0;
/// <reference path="Director.ts" />
/// <reference path="Serie.ts" />
/// <reference path="Category.ts" />
/// <reference path="Platform.ts" />
/// <reference path="Collaborator.ts" />
/// <reference path="Actor.ts" />
class CuevanaAndes {
    // Implemented attributes
    // Operations
    getSeries() {
        return []; //TODO: Implement
    }
    getSerie(name) {
        return null; //TODO: Implement
    }
    getCategories(name) {
        return []; //TODO: Implement
    }
    getCollaboratorsBySerie(name) {
        return []; //TODO: Implement
    }
    getCollaborator(name) {
        return null; //TODO: Implement
    }
    getPlatforms(name) {
        return []; //TODO: Implement
    }
    getPlatform(name) {
        return null; //TODO: Implement
    }
    createSerie(categoryName, image, nameSerie, platformName) {
        return null; //TODO: Implement
    }
    createCategory(platformName, CategoryName, descriptionCategory) {
        return null; //TODO: Implement
    }
    createActor(name, image, description, serieName) {
        return null; //TODO: Implement
    }
    createDirector(name, image, description, nameSerie) {
        return null; //TODO: Implement
    }
    addCategoryToSerie(nameCategory, nameSerie) {
        return false; //TODO: Implement
    }
    addActorToSerie(nameActor, nameSerie) {
        return false; //TODO: Implement
    }
    addDirectorToSerie(nameDirector, nameSerie) {
        return false; //TODO: Implement
    }
}
exports.CuevanaAndes = CuevanaAndes;
