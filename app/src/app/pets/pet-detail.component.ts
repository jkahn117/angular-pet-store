import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { PetsService } from './pets.service';
import { Pet } from './pet.model';

@Component({
  selector:    'pet-detail',
  templateUrl: 'pet-detail.component.html',
})


export class PetDetailComponent implements OnInit {
  pet: Pet;
  editMode: Boolean;

  constructor(
    private petsService: PetsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    // TODO: is this the best way to do this?
    this.editMode = this.location.path().includes('/edit');
    console.log('editMode: ' + this.editMode);

    this.route.params
      .switchMap((params: Params) => this.petsService.getPet(+params['id']))
      .subscribe(pet => this.pet = pet);
  }

  goBack(): void {
    this.location.back();
  }
}