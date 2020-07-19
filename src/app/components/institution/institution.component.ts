import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InstitutionService } from '../../services/institution.service';


@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {

  institutions = [];
  oldName;
  oldPhone;
  oldEmail;
  idEditInstitution;
  appState: string = 'default';

  formGroupIns: FormGroup;
  formGroupEditIns: FormGroup;
  isLoading: Boolean = false;

  constructor(private institutionService: InstitutionService ) { }

  
  ngOnInit() {

    this.listInstitutions()
    

    this.formGroupIns = new FormGroup(

      {
        name: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(120)]),
        phone: new FormControl('',[Validators.required, Validators.pattern('[0-9]{7,15}')]),
        email: new FormControl('',[Validators.required, Validators.email]),
      }
    )

    this.formGroupEditIns = new FormGroup(

      {
        name: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(120)]),
        phone: new FormControl('',[Validators.required, Validators.pattern('[0-9]{7,15}')]),
        email: new FormControl('',[Validators.required, Validators.email]),
      }
    )
  }
  
  listInstitutions(){
    this.institutions = this.institutionService.getInstitutions();
  }

  addInstitution() {
    let newInstitution = {
      name: this.formGroupIns.value.name,
      phone: this.formGroupIns.value.phone,
      email: this.formGroupIns.value.email
    }
    this.institutionService.addInstitution(newInstitution);
    this.listInstitutions()
    this.loading()
    

  }

  loading(){
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false
      this.clearForm();

    }, 2000)
  }


  clearForm(){
    (<HTMLFormElement>document.getElementById("formGroupIns")).reset();
   }


   deletePet(institutionName){
    for(let i = 0; i < this.institutions.length; i++) {
      if(this.institutions[i]['name'] == institutionName) {
          this.institutions.splice(i, 1);
      }
    }
    this.institutionService.deleteInstitution(institutionName);
   }


   editInstitution(index) {
    this.appState = 'edit';
    this.idEditInstitution = index
    this.oldName = this.institutions[index]['name'];
    this.oldPhone = this.institutions[index]['phone'];
    this.oldEmail = this.institutions[index]['email'];
   
  }
  


  updateInstitution() {
             
    this.institutions[this.idEditInstitution]['name'] = this.formGroupEditIns.value.name;
    this.institutions[this.idEditInstitution]['phone'] = this.formGroupEditIns.value.phone;
    this.institutions[this.idEditInstitution]['email'] = this.formGroupEditIns.value.email;  

    this.institutionService.updateInstitution(this.institutions);
    this.loading()
    this.appState = 'default';
  }

}
