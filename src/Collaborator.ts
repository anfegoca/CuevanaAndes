    
export class Collaborator
{
	
    constructor(
		protected name: string,
		protected image: string,
		protected description: string
	){}

	isYourName(name: string) : boolean {
		let ans : boolean = false;
		if(this.name == name){
			ans = true;
		}
		return ans;
	}
	getName(){
		return this.name;
	}

	
}

