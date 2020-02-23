import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicePokeService {
  private host:String="https://pokeapi.co/api/v2/";
  constructor(private http:HttpClient) {
  }
  public getPokemon(){
    return this.http.get(this.host+"pokemon")}
  debugger;
}
