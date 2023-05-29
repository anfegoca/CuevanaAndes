import { Collaborator } from "./Collaborator";

export class Director extends Collaborator
{
    constructor(
        name: string,
		image: string,
		description: string
    ){
        super(name,image,description)
    }
	
}

