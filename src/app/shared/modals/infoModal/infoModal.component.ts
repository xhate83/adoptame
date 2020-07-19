import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { InstitutionService } from '../../../services/institution.service';

@Component({
  selector: 'app-infoModal',
  templateUrl: './infoModal.component.html',
  styleUrls: ['./infoModal.component.css']
})
export class InfoModalComponent implements OnInit {

  name: string;
  kind: string;
  breed: string;
  phone: string;
  email: string;
  institution: string;
  moreInfoInstitution= []

  constructor(private institutionService: InstitutionService, private dialogRef: MatDialogRef<Component>, @Inject(MAT_DIALOG_DATA) data) {
    this.name = data.name;
    this.kind = data.kind;
    this.breed = data.breed;
    this.institution = data.institution;

    this.moreInfoInstitution = institutionService.getInstitutions().filter(res =>res.name == this.institution)
    console.log(this.moreInfoInstitution)

    this.phone = this.moreInfoInstitution[0]['phone'];
    this.email = this.moreInfoInstitution[0]['email'];


   }

  ngOnInit() {
  }

}
