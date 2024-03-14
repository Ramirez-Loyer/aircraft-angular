import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
@Output() eventEmitter : EventEmitter<any> = new EventEmitter();
  //Il s'agit de provoquer un événement de sortie sur notre composant

  constructor() { }

  ngOnInit(): void {
  }

  //lorsque l'utilisateur clic sur un bouton l'action correspondante est émise
getAllAircrafts() {
  this.eventEmitter.emit("ALL_AIRCRAFTS");
  console.log("getAll marche");
};
getDesignAircrafts(){
 
  console.log("getDesign marche");
};


getDevelopmentAircrafts(){
 
  console.log("getDevelopment marche");
};


   //en résumé, le composant parent écoute les événements de l'enfant
//et lorrqu'il se produit qqch la méthode ci dessous est appelé
onActionEvent($event : any) {
  if($event == "ALL_AIRCRAFTS") this.getAllAircrafts();
 
}


}

