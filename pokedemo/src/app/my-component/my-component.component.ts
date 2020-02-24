import { Component, OnInit } from '@angular/core';
//import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Pokemon} from "../pokemon";
import {ServicePokeService} from "./service-poke.service";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  id: string='';
  pokes : Pokemon[] =[];
  selectPokes = new FormControl('adc');
  public pokemons;
  constructor(private service: ServicePokeService) {
  }

  ngOnInit() {
    this.service.getPokemon()
      .subscribe(data =>{
          this.pokemons= data;
        },err=>{
          console.log(err);
        }
      );
  }

  clicSurBouton(){
    alert("Le Pokemon recherche à le id : "+this.selectPokes);
  }

}
