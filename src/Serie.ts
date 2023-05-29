import { Collaborator } from "./Collaborator";
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
    
	
}

