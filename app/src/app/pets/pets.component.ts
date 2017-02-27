import { Component, OnInit } from '@angular/core';

import { Pet } from './pet.model';
import { PetsService } from './pets.service';
import { PetDetailComponent } from './pet-detail.component';

@Component({
  selector:     'my-pets',
  templateUrl:  'pets.component.html',
  providers:    [ PetsService ]
})

export class PetsComponent implements OnInit  {

  pets: Pet[];

  selectedPet: Pet;

  constructor(private petsService: PetsService) {
    // do nothing
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petsService.getPets().then( pets => this.pets = pets );
  }

  onSelect(pet: Pet):void {
    this.selectedPet = pet;
  }

  /*goToDetail(): void {
    this.router.navigate(['/pet', this.selectedPet.id]);
  }*/

}
