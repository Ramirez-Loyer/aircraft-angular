import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AircraftsActionsTypes } from 'src/app/ngrx/aircrafts.action'; 
import { GetAllAircraftsAction, GetDesignedAircraftsAction, GetDevelopmentAircraftsAction, GetSearchedAircraftsAction } from 'src/app/ngrx/aircrafts.action';
import { EventService } from 'src/app/services/event.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {


  myForm = this.formBuilder.group({
    searchValue: [""]
  })

constructor (private store: Store<any>, private formBuilder : FormBuilder) { }

ngOnInit(): void {
 
}

getAllAircrafts(){
  this.store.dispatch(new GetAllAircraftsAction({}));
}


onSearch(value : any){
 
  this.store.dispatch(new GetSearchedAircraftsAction({value:value.value.searchValue}));
}

getDesignAircrafts(){
  this.store.dispatch(new GetDesignedAircraftsAction({}));
  console.log("getDesign marche");
};


getDevelopmentAircrafts(){
  this.store.dispatch(new GetDevelopmentAircraftsAction({}));
  console.log("getDevelopment marche!");
};


}

