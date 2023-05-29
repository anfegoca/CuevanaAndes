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

	isYourName(name: string) : boolean {
		let ans : boolean = false;
		if(this.name == name){
			ans = true;
		}
		return ans;
	}
    
	
}

