import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {CheckerComponent} from "./checker/checker.component";


const routes: Routes = [
  {path: '', redirectTo: '/checker', pathMatch: 'full'},
  {path: 'checker', component: CheckerComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
