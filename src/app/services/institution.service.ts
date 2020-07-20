import { Injectable } from '@angular/core';
import { InitInstitutions } from '../institutions-init';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService extends InitInstitutions {

  constructor() { 
    super();
    console.log('Institutions funcionando');
    this.load();
  }


  getInstitutions() {
    let institutions = JSON.parse(localStorage.getItem('institutions'));
    return institutions;
  }

  addInstitution(newInstitution) {
    let institutions = JSON.parse(localStorage.getItem('institutions'));
    institutions.push(newInstitution);
    localStorage.setItem('institutions', JSON.stringify(institutions));
 }

 deleteInstitution(institutionName) {
  let institutions = JSON.parse(localStorage.getItem('institutions'));

  for(let i = 0; i <institutions.length; i++) {
   if(institutions[i].name == institutionName) {
    institutions.splice(i, 1);
   }
}
   localStorage.setItem('institutions', JSON.stringify(institutions));
}

updateInstitution(institutionsNew)

  {
  localStorage.setItem('institutions', JSON.stringify(institutionsNew));
  }
 }






