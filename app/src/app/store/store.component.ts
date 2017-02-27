import { Component, OnInit } from '@angular/core';

import { Pet } from '../pets/pet.model';
import { PetsService } from '../pets/pets.service';

@Component({
  selector:    'my-store',
  templateUrl:  'store.component.html'
})

export class StoreComponent implements OnInit {

  pets: Pet[] = [];

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.petsService.getPets()
      .then(pets => this.pets = pets.slice(1, 5));
  }  

}