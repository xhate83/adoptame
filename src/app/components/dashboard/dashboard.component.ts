import { Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formStatus: boolean = true

  constructor() { }



  ngOnInit() {

    
  }
  changeForm(){
    this.formStatus = false
  }

  changeForm1(){
    this.formStatus = true
  }
  
}



