import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { PetsService } from './pets.service';
import { Pet } from './pet.model';

@Component({
  selector:    'pet-form',
  templateUrl: 'pet-form.component.html',
})


export class PetFormComponent {
  @Input() pet: Pet;
  @Input() editMode: Boolean;

  constructor(
    private petsService: PetsService,
    private location: Location
  ) { }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.petsService.update(this.pet)
        .then(() => this.goBack());
    
  }
}