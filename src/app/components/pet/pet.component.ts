import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PetService } from '../../services/pet.service';
import { InstitutionService } from '../../services/institution.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InfoModalComponent } from '../../shared/modals/infoModal/infoModal.component'

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  pets = [];
  institutions = [];
  oldName;
  oldKind;
  oldBreed;
  oldBreedCat;
  oldBreedDog;
  idEditPet;
  oldInstitution;
  appState: string = 'default';

  formGroup: FormGroup;
  formGroupEdit: FormGroup;
  isLoading: Boolean = false;

  constructor(private petService: PetService, public dialog: MatDialog, private institutionService: InstitutionService  ) { }

  catsbreeds = [
    {name: 'Abisinio'},
    {name: 'American Curl'},
    {name: 'Angora Turco'},
    {name: 'Ashera'},
    {name: 'Azul Cubano'},
    {name: 'Azul Ruso'},
    {name: 'Balinés'},
    {name: 'Bengalí'},
    {name: 'Birmano'},
    {name: 'Bobtail Japonés'},
    {name: 'Bosque de Noruega'},
    {name: 'British Shorthair'},
    {name: 'Burmés'},
    {name: 'Cartujo o Chartreaux'},
    {name: 'Común Europeo'},
    {name: 'Cornish Rex'},
    {name: 'Devon Rex'},
    {name: 'Exótico'},
    {name: 'Himalayo'},
    {name: 'Korat'},
    {name: 'Maine Coon'},
    {name: 'Manx'},
    {name: 'Mau Egipcio'},
    {name: 'Munchkin'},
    {name: 'Nebelung'},
    {name: 'Oriental'},
    {name: 'Persa'},
    {name: 'Persa Chinchilla'},
    {name: 'Persa Tabby'},
    {name: 'Peterbald'},
    {name: 'Ragamuffin'},
    {name: 'Ragdoll'},
    {name: 'Rex'},
    {name: 'Scottish Fold'},
    {name: 'Selkirk Rex'},
    {name: 'Siamés'},
    {name: 'Siberiano'},
    {name: 'Snowshoe'},
    {name: 'Somalí'},
    {name: 'Sphynx'},
    {name: 'Van Turco'},
     
  ]

  dogsbreeds = [
    {name: 'Airedale Terrier'},
    {name: 'Akita Inu'},
    {name: 'Alaskan Malamute'},
    {name: 'American Cocker Spaniel'},
    {name: 'American Pit bull Terrier'},
    {name: 'Australian Terrier'},
    {name: 'Balkan Hound'},
    {name: 'Basenji'},
    {name: 'Basset Hound'},
    {name: 'Beagle'},
    {name: 'Bearded Collie'},
    {name: 'Beauceron'},
    {name: 'Bichón Habanero'},
    {name: 'Bichón Maltés'},
    {name: 'Bloodhound o Perro de San Huberto'},
    {name: 'Bobtail'},
    {name: 'Border Terrier'},
    {name: 'Borzoi'},
    {name: 'Boston Terrier'},
    {name: 'Bóxer'},
    {name: 'Boyero Australiano'},
    {name: 'Boyero de Flandes'},
    {name: 'Braco Alemán'},
    {name: 'Braco Francés'},
    {name: 'Bretón Español'},
    {name: 'Bull Terrier'},
    {name: 'Bulldog Francés'},
    {name: 'Bulldog Inglés'},
    {name: 'Bullmastiff'},
    {name: 'Caniche'},
    {name: 'Carlino'},
    {name: 'Chart Polski'},
    {name: 'Chihuahua'},
    {name: 'Chin Japonés'},
    {name: 'Chow chow'},
    {name: 'Cimarrón Uruguayo'},
    {name: 'Cocker Spaniel Inglés'},
    {name: 'Collie'},
    {name: 'Crestado Chino'},
    {name: 'Dálmata'},
    {name: 'Deutsch Drahthaar'},
    {name: 'Doberman'},
    {name: 'Dogo Alemán'},
    {name: 'Dogo Argentino'},
    {name: 'Dogo de Burdeos'},
    {name: 'Fila Brasileño'},
    {name: 'Fox Terrier'},
    {name: 'Foxhound Inglés'},
    {name: 'Galgo Español'},
    {name: 'Golden Retriever'},
    {name: 'Gos D"Atura'},
    {name: 'Grifón de Bohemia'},
    {name: 'Hovawart'},
    {name: 'Husky Siberiano'},
    {name: 'Iceland Sheepdog'},
    {name: 'Irish Wolfhound'},
    {name: 'Jack Russell Terrier'},
    {name: 'Kelpie Australiano'},
    {name: 'Labrador Retriever'},
    {name: 'Lebrel Afgano'},
    {name: 'Lebrel Escocés'},
    {name: 'Leonberger'},
    {name: 'Lhasa Apso'},
    {name: 'Mastín de los Pirineos'},
    {name: 'Otterhound'},
    {name: 'Pastor Alemán'},
    {name: 'Pastor Belga'},
    {name: 'Pastor Ganadero Australiano'},
    {name: 'Pastor Garafiano'},
    {name: 'Papillón'},
    {name: 'Pequinés'},
    {name: 'Pembroke Welsh Corgi'},
    {name: 'Perro de Agua Español'},
    {name: 'Perro de Agua Francés'},
    {name: 'Perro sin Pelo Mexicano o Xoloitzcuintle'},
    {name: 'Perro sin Pelo del Perú'},
    {name: 'Petit Basset Griffon'},
    {name: 'Pinscher'},
    {name: 'Podenco Canario'},
    {name: 'Podenco Ibicenco'},
    {name: 'Pointer Inglés'},
    {name: 'Pomerania'},
    {name: 'Presa Canario'},
    {name: 'Puli'},
    {name: 'Ratón Bodeguero Andaluz'},
    {name: 'Retriever de pelo rizado'},
    {name: 'Rottweiler'},
    {name: 'San Bernardo'},
    {name: 'Samoyedo'},
    {name: 'Schnauzer'},
    {name: 'Scottish Terrier'},
    {name: 'Setter Irlandés'},
    {name: 'Shar Pei'},
    {name: 'Shetland Sheepdog'},
    {name: 'Shih Tzu'},
    {name: 'Spinone italiano'},
    {name: 'Teckel'},
    {name: 'SamoyTerranovaedo'},
    {name: 'Terrier Australiano'},
    {name: 'Terrier Checo'},
    {name: 'Terrier Japonés'},
    {name: 'Terrier Tibetano'},
    {name: 'Tosa Inu'},
    {name: 'Weimaraner'},
    {name: 'West Highland White Terrier'},
    {name: 'Yorkshire Terrier'}
  ]

  openModalInf(name, kind, breed, institution){

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false
    dialogConfig.data = {
      name,
      kind,
      breed,
      institution,
    }

    this.dialog.open(InfoModalComponent, dialogConfig)
  }

  ngOnInit() {

    this.listPets()

    this.listInstitutions()
    

    this.formGroup = new FormGroup(

      {
        name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
        kind: new FormControl('',[Validators.required]),
        breed: new FormControl('',[Validators.required]),
        institution: new FormControl('',[Validators.required]),
      }
    )

    this.formGroupEdit = new FormGroup(

      {
        name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
        kind: new FormControl('',[Validators.required]),
        breed: new FormControl('',[Validators.required]),
        institution: new FormControl('',[Validators.required])
      }
    )
  }
  
  listPets(){
    this.pets = this.petService.getPets();
    console.log(this.pets)
  }

  listInstitutions(){
    this.institutions = this.institutionService.getInstitutions();
  }

  addPet() {
    let newPet = {
      name: this.formGroup.value.name,
      kind: this.formGroup.value.kind,
      breed: this.formGroup.value.breed,
      institution: this.formGroup.value.institution
    }
    this.petService.addPet(newPet);
    this.listPets()
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
    (<HTMLFormElement>document.getElementById("formGroup")).reset();
   }


   deletePet(petName){
    for(let i = 0; i < this.pets.length; i++) {
      if(this.pets[i]['name'] == petName) {
          this.pets.splice(i, 1);
      }
    }
    this.petService.deletePet(petName);
   }


   editPet(index) {
    this.appState = 'edit';
    this.idEditPet = index
    this.oldName = this.pets[index]['name'];
    this.oldKind = this.pets[index]['kind'];
    if(this.oldKind == 'Gato'){
      this.oldBreedCat =this.pets[index]['breed']
    }else {
      this.oldBreedDog =this.pets[index]['breed']}
    this.oldInstitution = this.pets[index]['institution'];
  }
  


  updatePet() {
             
    this.pets[this.idEditPet]['name'] = this.formGroupEdit.value.name;
    this.pets[this.idEditPet]['kind'] = this.formGroupEdit.value.kind;
    this.pets[this.idEditPet]['breed'] = this.formGroupEdit.value.breed;
    this.pets[this.idEditPet]['institution'] = this.formGroupEdit.value.institution;  

    this.petService.updatePet(this.pets);
    this.loading()
    this.appState = 'default';
  }

}
