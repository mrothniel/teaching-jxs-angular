import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { FilterPokemeonPipePipe } from './my-component/filter-pokemeon--pipe.pipe';
import {HttpClientModule} from "@angular/common/http";
import {ServicePokeService} from "./my-component/service-poke.service";

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemeonPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule, //Line to add
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [ServicePokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
