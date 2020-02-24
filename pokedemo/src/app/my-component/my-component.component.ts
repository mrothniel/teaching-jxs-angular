import { Component, OnInit } from '@angular/core';
//import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
  id: string='';
  pokes = [];
  selectPokes = new FormControl('');

  constructor() { }


  ngOnInit() {
    this.pokes.push(
      {'id':1, 'name': 'PIKATCHOU'}
      );
    this.pokes.push(
      {'id':2, 'name': 'PIKADESK'}
    );
    this.pokes.push(
      {'id':3, 'name': 'ELECTRON'}
    );
    this.pokes.push(
      {'id':4, 'name': 'DRAGONNE'}
    );
  }
  clicSurBouton(){
    
    alert("Le Pokemon recherche à le id : "+this.selectPokes);
  }

}
