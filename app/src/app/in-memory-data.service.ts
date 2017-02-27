import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    let pets = [
      {
        id: 1,
        name: 'Gronk',
        category: 'Dog',
        photoUrl: 'images/pets/IMG_1257.jpg',
        status: 'Unavailable',
        age: '2 years'
      },
      {
        id: 2,
        name: 'Zoey',
        category: 'Dog',
        photoUrl: 'images/pets/IMG_1320.png',
        status: 'unavailable',
        age: '1 year'
      },
      {
        id: 3,
        name: 'Mr Whiskers',
        category: 'Cat',
        photoUrl: 'images/pets/12832904855_16613c974e_z.jpg',
        status: 'available',
        age: '10 years'
      },
      {
        id: 4,
        name: 'Goldie',
        category: 'Fish',
        photoUrl: 'images/pets/Goldfish3.jpg',
        status: 'available',
        age: '1 month'
      },
      {
        id: 5,
        name: 'Max',
        category: 'Dog',
        photoUrl: 'images/pets/9222661216_58b479d73f_z.jpg',
        status: 'available',
        age: '5 months'
      }
    ];


    return { pets };
  }

}