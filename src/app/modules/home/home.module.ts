import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './componens/home/home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {MatInputModule} from "@angular/material/input";



// @ts-ignore
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,MatInputModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
