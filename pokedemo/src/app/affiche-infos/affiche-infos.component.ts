import { Pokemon } from './../pokemon';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-affiche-infos',
  templateUrl: './affiche-infos.component.html',
  styleUrls: ['./affiche-infos.component.css']
})
export class AfficheInfosComponent implements OnInit {

  constructor() {}
   @Input()
  pokemon: Pokemon;

  ngOnInit() {
  }

}
