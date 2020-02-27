import { Component, OnInit } from '@angular/core';
//import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {ServicePokeService} from "./service-poke.service";
import {Pokemon} from "./pokemon";


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  id: string='';
  selectPokes : any= '';
  public pokemons : any[];
  constructor(private service: ServicePokeService) {
  }

  ngOnInit() {
    this.service.getPokemon()
      .subscribe(data =>{
        this.pokemons= data.results;
          console.log(this.pokemons);
        },err=>{
          console.log(err);
        }
      );
  }

  clicSurBouton(){
    alert("Le Pokemon recherche à le id : "+this.selectPokes);
  }

}
