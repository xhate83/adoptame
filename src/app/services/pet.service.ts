import { Injectable } from '@angular/core';
import { Init } from '../pets-init';

@Injectable({
  providedIn: 'root'
})
export class PetService extends Init {

  constructor() { 
    super();
    console.log('PetService Works');
    this.load();
  }


  getPets() {
    let pets = JSON.parse(localStorage.getItem('pets'));
    return pets;
  }

  addPet(newPet) {
    let pets = JSON.parse(localStorage.getItem('pets'));
    pets.push(newPet);
    localStorage.setItem('pets', JSON.stringify(pets));
 }

 deletePet(petName) {
  let pets = JSON.parse(localStorage.getItem('pets'));

  for(let i = 0; i <pets.length; i++) {
   if(pets[i].name == petName) {
    pets.splice(i, 1);
   }
}
   localStorage.setItem('pets', JSON.stringify(pets));
}

updatePet(petsNew)

  {
  localStorage.setItem('pets', JSON.stringify(petsNew));
  }
 }






