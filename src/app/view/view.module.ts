import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule
  ],
  /* Add the component to exports, so it can be seen in other modules (app module) */
})
export class ViewModule { }
