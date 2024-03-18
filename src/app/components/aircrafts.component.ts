import { Component, OnInit } from '@angular/core';
import { Aircraft } from 'src/app/model/aircraft';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/enum';
import { AircraftsActionsTypes, ActionEvent } from '../events';
import { EventService } from '../services/event.service';
import { AircraftsState, AircraftsStateEnum } from '../ngrx/aircrafts.state';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

aircraftsState$:Observable<AircraftsState> | null = null; 
  
readonly aircraftsStateEnum = AircraftsStateEnum ;


  constructor(private store: Store<any>) { }

  ngOnInit(): void { 
   this.aircraftsState$ = this.store.pipe( map((state) => state.airbusState));
   }
  }


/* getAllAircrafts(){
this.aircraftsState$ = this.aircraftService.getAircrafts().pipe(
  map(data => ({dataState : DataStateEnum.LOADED, data : data})), 
  catchError(err => of({dataSatte : DataStateEnum.ERROR, errorMessage : err.message})) 
)
}

getDesignedAircraft(){
  this.aircraftsState$ = this.aircraftService.getDesignedAircrafts().pipe(
    map(data => ({dataState : DataStateEnum.LOADED, data : data})), 
    startWith({dataState : DataStateEnum.LOADING}), 
    catchError(err => of({dataSatte : DataStateEnum.ERROR, errorMessage : err.message})) 
  )
  }

  getDevelopmentAircraft(){
    this.aircraftsState$ = this.aircraftService.getDevelopmentAircrafts().pipe(
      map(data => ({dataState : DataStateEnum.LOADED, data : data})), 
      startWith({dataState : DataStateEnum.LOADING}), 
      catchError(err => of({dataSatte : DataStateEnum.ERROR, errorMessage : err.message})) 
    )
    }


onActionEvent($actionEvent : ActionEvent){ { //qq soit l'event, on le gère ici
  switch($actionEvent.type){
  case AircraftsActionsTypes.GET_ALL_AIRCRAFTS :
  this.getAllAircrafts();
  break;

  case AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS : 
  this.search($actionEvent.payload);
  break;
}
}
}

search(value: any){
  this.aircrafts$ = this.aircraftService.getSearchAircraft(value).pipe(
    map(data => ({dataState : DataStateEnum.LOADED, data : data})), 
    startWith({dataState : DataStateEnum.LOADING}), 
    catchError(err => of({dataState : DataStateEnum.ERROR, errorMessage : err.message})) 
    
  )
  console.log("hello");
  }
 */

