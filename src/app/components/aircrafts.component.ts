import { Component, OnInit } from '@angular/core';
import { Aircraft } from 'src/app/model/aircraft';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/enum';
import { AircraftsActionsTypes, ActionEvent } from '../events';


@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

aircrafts$:Observable<AppDataState<Aircraft[]>> | null = null; 
  
readonly dataStateEnum = DataStateEnum ;


  constructor(private aircraftService: AircraftService) {
    
   }

  ngOnInit(): void { 
    //this.labo.tests();
  }

//OPTION 3 : méthode Pipe avec un ensemble d'opérateur + gestion des tets du chargement des données
//du coup, on peut appliquer un ensemble d'opérateur
getAllAircrafts(){
this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
  map(data => ({dataState : DataStateEnum.LOADED, data : data})), //opérateur 'map' reçoit une liste d'avions et retourne une fonction avec pour paramètre un objet contenat cette liste. //Il renvoie aussi une variable state qui précise l'état du chargement ici en cours
  startWith({dataState : DataStateEnum.LOADING}),  //dès que pipe est appelé, le premier état est spécifié ici
  catchError(err => of({dataSatte : DataStateEnum.ERROR, errorMessage : err.message})) //là aussi on fretourne une fonction qui renvoie un Observable ici grâce à la méthode of
)
}

getDesignedAircraft(){
  this.aircrafts$ = this.aircraftService.getDesignedAircrafts().pipe(
    map(data => ({dataState : DataStateEnum.LOADED, data : data})), 
    startWith({dataState : DataStateEnum.LOADING}), 
    catchError(err => of({dataSatte : DataStateEnum.ERROR, errorMessage : err.message})) 
  )
  }

  getDevelopmentAircraft(){
    this.aircrafts$ = this.aircraftService.getDevelopmentAircrafts().pipe(
      map(data => ({dataState : DataStateEnum.LOADED, data : data})), 
      startWith({dataState : DataStateEnum.LOADING}), 
      catchError(err => of({dataSatte : DataStateEnum.ERROR, errorMessage : err.message})) 
    )
    }

//le composant parent écoute les événements de l'enfant
//et lorsqu'il se produit qqch la méthode ci dessous est appelé
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

}
