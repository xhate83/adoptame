import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { InstitutionService } from '../../../services/institution.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-infoModal',
  templateUrl: './infoModal.component.html',
  styleUrls: ['./infoModal.component.css']
})
export class InfoModalComponent implements OnInit {

  name: string;
  formatDate;
  monthInit;
  monthName;
  kind: string;
  breed: string;
  dob: string;
  phone: string;
  email: string;
  institution: string;
  moreInfoInstitution = []

  constructor(public institutionService: InstitutionService, public dialogRef: MatDialogRef<Component>, @Inject(MAT_DIALOG_DATA) data) {
    
    this.formatDate = new Date (data.dob)

    this.monthInit = this.formatDate.getMonth()

    this.getMonthName()

    
    this.name = data.name;
    this.kind = data.kind;
    this.breed = data.breed;
    this.dob = this.monthName + " de " + this.formatDate.getFullYear() ;
    this.institution = data.institution;
    
    
    this.moreInfoInstitution = this.institutionService.getInstitutions().filter(res => res.name == this.institution)

    if(this.moreInfoInstitution.length > 0){
      this.phone = this.moreInfoInstitution[0]['phone'];
      this.email = this.moreInfoInstitution[0]['email'];
    }else{
      this.phone = "Institución eliminada";
      this.email = "Institución eliminada";;
    }
    


   }

  ngOnInit() {
  }

  getMonthName(){
    switch(this.monthInit) {
      case 0: this.monthName = "Enero"
      break;
      case 1: this.monthName = "Febrero"
      break;
      case 2: this.monthName = "Marzo"
      break;
      case 3: this.monthName = "Abril"
      break;
      case 4: this.monthName = "Mayo"
      break;
      case 5: this.monthName = "Junio"
      break;
      case 6: this.monthName = "Julio"
      break;
      case 7: this.monthName = "Agosto"
      break;
      case 8: this.monthName = "Septiembre"
      break;
      case 9: this.monthName = "Octubre"
      break;
      case 10: this.monthName = "Noviembre"
      break;
      case 11: this.monthName = "Diciembre"
      break;
      default: this.monthName = "Sin nombre"
      break;
    }
  }

}
