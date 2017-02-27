import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PetDetailComponent } from './pets/pet-detail.component';
import { PetsComponent }      from './pets/pets.component';
import { StoreComponent }     from './store/store.component';

const routes: Routes = [
  { path: '', redirectTo: '/pets', pathMatch: 'full' },
  { path: 'store',         component: StoreComponent },
  { path: 'pets/:id',      component: PetDetailComponent },
  { path: 'pets/:id/edit', component: PetDetailComponent },
  { path: 'pets',          component: PetsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
});

export class AppRoutingModule {}
