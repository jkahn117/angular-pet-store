import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

// TODO: remove when backend is ready...
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';


import { NavBarComponent } from './shared/navbar/navbar.component';
import { MenuComponent }   from './shared/menu/menu.component';

import { PetsService }        from './pets/pets.service';
import { PetDetailComponent } from './pets/pet-detail.component';
import { PetFormComponent }   from './pets/pet-form.component';
import { PetsComponent }      from './pets/pets.component';
import { StoreComponent }     from './store/store.component';

import { AppRoutingModule }   from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),  // TODO: remove
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuComponent,
    PetsComponent,
    PetDetailComponent,
    PetFormComponent,
    StoreComponent
  ],
  providers:    [
    PetsService
  ],
  bootstrap:    [
    AppComponent
  ]
})


export class AppModule { }
