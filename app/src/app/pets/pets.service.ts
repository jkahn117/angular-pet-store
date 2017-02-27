import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Pet } from './pet.model';

@Injectable()
export class PetsService {
  private petsUrl = "https://hwzsy3m2ha.execute-api.us-west-2.amazonaws.com/dev/pets";  // URL to backend api

  private headers = new Headers({ "Content-Type": "application/json" });

  constructor(private http: Http) { }


  getPets(): Promise<Pet[]> {
    return this.http.get(this.petsUrl)
              .toPromise()
              .then(response => response.json().data as Pet[])
              .catch(this.handleError);
  }

  getPet(id: number): Promise<Pet> {
    const url = `${this.petsUrl}/${id}`;

    return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Pet)
            .catch(this.handleError);
  }


  create(pet: Pet): Promise<Pet> {
    return this.http
             .post(this.petsUrl, JSON.stringify(pet), { headers: this.headers })
             .toPromise()
             .then(response => response.json().data)
             .catch(this.handleError);
  }


  update(pet: Pet): Promise<Pet> {
    const url = `${this.petsUrl}/${pet.id}`;

    return this.http
             .put(url, JSON.stringify(pet), { headers: this.headers })
             .toPromise()
             .then(() => pet)
             .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error);
    return Promise.reject(error.message || error);
  }
}