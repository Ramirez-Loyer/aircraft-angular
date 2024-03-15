import { Injectable } from '@angular/core';
import { ActionEvent } from '../events';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'   //Spécifier que c'est un service accessible dans root (pas necessaire de le décla--)
})
export class EventService {
  //Objet permettant la communication entre les composants
  eventSubject : Subject<ActionEvent> = new Subject <ActionEvent>();
  //type d'événements publiés par notre objet
  eventSubjectObservable = this.eventSubject.asObservable();
  //Observable qui permet à tous les composants qui le souhaitent de recevoir les actions des autres

  publishEvent(event : ActionEvent){ //méthode de publication d'un événement ou message
    this.eventSubject.next(event); //tous les composansts qui ont suscrit à notre service, recevront l'evt publié 
                                  //Ils devront faire auparavant un subscribe à eventSubjectObservable
  }

}
