import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  { path: 'acceuil', component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: InscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
