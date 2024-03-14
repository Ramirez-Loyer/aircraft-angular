import { Component, OnInit } from '@angular/core';
import { Aircraft } from 'src/app/model/aircraft';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/enum';
import { Laboratory } from 'src/app/laboratory';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
//aircrafts : Aircraft[] | null = null; //soit un tableau d'avions soit null   //Option 1
aircrafts$:Observable<AppDataState<Aircraft[]>> | null = null; 
  //le cigle $ est une convention d'écriture pour indiquer qu'il s'agit d'un observable
  //Option 3 : aircraft est de type observable de structure de donnée AppDataState constituée de 3 éléments facultatifs
  //le type générique ici sera dans notre cas une liste d'avions
  //cette étape est indispensable afin de permettre à pipe de renvoyer le même type de donnée pour les 3 cas d'utilisation s,m et c
readonly dataStateEnum = DataStateEnum ;

 
// error = null;

  constructor(private aircraftService: AircraftService, private labo : Laboratory) { }

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

//en résumé, le composant parent écoute les événements de l'enfant
//et lorrqu'il se produit qqch la méthode ci dessous est appelé
onActionEvent($event : any) {
  if($event == "ALL_AIRCRAFTS") this.getAllAircrafts();
}


  //OPTION 2 - LE SOUCI ICI C'EST QU'ON A AUCUN MOYEN DE RECUPERER LES ERREURS !
  /*getAllAircrafts() {
    //Option2 : la méthode du service renvoi un Observable
    this.aircrafts$ = this.aircraftService.getAircrafts(); //delors il faut bien faire un subscribe puisqu'il n'est plus sollicité ici
      //en effet, l'appel sera fait côté html en précisant (pipe) "| async" toujours pour agir lorsque des données arrivent
    }*/
 

  /*getDesignedAircraft() {
    this.aircrafts$ = this.aircraftService.getAircrafts();
    };
  

  
  getDevelopmentAircraft() {
    this.aircrafts$ = this.aircraftService.getAircrafts();
    };
  
  getAircraftByMsn() {
    this.aircrafts$ = this.aircraftService.getAircrafts();
    };

  }
  /* OPTION 1
  getAllAircrafts() {
    this.aircraftService.getAircrafts().subscribe({
      next : (data) => this.aircrafts = data,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
    })
  }

  getDesignedAircraft() {
    this.aircraftService.getAircrafts().subscribe({
      next : (data) => this.aircrafts = data,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
    })*/
  }

  
  /*getDevelopmentAircraft() {
    this.aircraftService.getAircrafts().subscribe({
      next : (data) => this.aircrafts = data,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
    })
  }
  getAircraftByMsn() {
    this.aircraftService.getAircrafts().subscribe({
      next : (data) => this.aircrafts = data,
      error : (err) => this.error = err.message,
      complete : () => this.error = null
    })*/



