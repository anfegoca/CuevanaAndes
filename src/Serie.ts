import { Actor } from "./Actor";
import { Collaborator } from "./Collaborator";
import { Director } from "./Director";
import { Episode } from "./Episode";

export class Serie
{
	
	constructor(
		private image: string,
		private name: string,
		private collaborators: Array<Collaborator>,
		private episodes: Array<Episode>
	){}


	getCollaborators(): Array<Collaborator> {
		return this.collaborators;
	}

	getCollaborator(name: string) {
		let ans = undefined;
		for(const collaborator of this.collaborators){
			if(collaborator.isYourName(name)){
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

	createActor(name: string, image: string, description: string){
		let ans = undefined;
		if(this.getCollaborator(name) == undefined){
			ans = new Actor(name,image,description);
			this.collaborators.push(ans);
		}
		
		return ans;
	}

	createDirector(name: string, image: string, description: string){
		let ans = undefined;
		if(this.getCollaborator(name) == undefined){
			ans = new Director(name,image,description);
			this.collaborators.push(ans);
		}
		
		return ans;
	}

	addActor(actor: Actor) : boolean{
		let ans = false;
		let collaborator  = this.getCollaborator(actor.getName());
		if(collaborator == undefined){
			this.collaborators.push(actor);
			ans = true;
		}
		return ans;
		
	}

	addDirector(director: Director) : boolean{
		let ans = false;
		let collaborator  = this.getCollaborator(director.getName());
		if(collaborator == undefined){
			this.collaborators.push(director);
			ans = true;
		}
		return ans;
		
	}

	
	getName(){
		return this.name;
	}

    
	
}

