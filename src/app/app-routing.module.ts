import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExoCalculatriceComponent } from './calculatrice/calculatrice.component'

const routes: Routes = [
  { path: '', component: ExoCalculatriceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
