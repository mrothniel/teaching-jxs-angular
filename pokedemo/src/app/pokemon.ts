import {ServicePokeService} from "./my-component/service-poke.service";

export class Pokemon {
  id : number;
  name : string = '';

  constructor(id: number, nom: string, ) {
    this.id = id;
    this.name = nom;

  }


}
