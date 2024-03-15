import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AircraftsActionsTypes } from 'src/app/events';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
@Output() eventEmitter : EventEmitter<any> = new EventEmitter();
  //Il s'agit de provoquer un événement de sortie sur notre composant

myForm=this.formBuilder.group({
  searchValue: [""]
})

  constructor(private formBuilder : FormBuilder) {
    
   }

  ngOnInit(): void {
  }


getAllAircrafts() {
this.eventEmitter.emit({type : AircraftsActionsTypes.GET_ALL_AIRCRAFTS , payload : null});

  console.log("getAll marche");
};

onSearch(value : any){
  this.eventEmitter.emit({type : AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS , payload : value.value.searchValue});

}
getDesignAircrafts(){
 
  console.log("getDesign marche");
};


getDevelopmentAircrafts(){
 
  console.log("getDevelopment marche!!!!!!!!!");
};



}

