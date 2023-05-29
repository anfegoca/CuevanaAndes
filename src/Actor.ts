import { Collaborator } from "./Collaborator";

    
export class Actor extends Collaborator
{
    constructor(
        name: string,
		image: string,
		description: string
    ){
        super(name,image,description)
    }
	
}

