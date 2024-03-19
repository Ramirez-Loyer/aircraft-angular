import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Aircraft } from '../model/aircraft';

@Injectable({
  providedIn: 'root'  //Service + accessible dans toute l'appli
})
export class AircraftService {

  constructor(private http:HttpClient) { }

  //liste de tous les avions en base => une fois sur 2 on souhaite provoquer une erreur
  public getAircrafts(): Observable<Aircraft[]> {    //méthode qui retourne un Observable du tableau 'aircrafts'. 
    return this.http.get<Aircraft[]> (environment.host+"/aircrafts");  
    //let host = Math.random() >0.5? environment.host : environment.unreachableHost;  //Cette ligne choisi alétoirement l'hôte ('host'). Si le nombre est sup. à 0.5, alors 'host' sera l'adress définie dnas 'environement host', sinon ce cera .unreachableHost. Cela simule le fait que la moitié du temps, le service pourrait tenter de récuperer les données depuis un hôte innaccessible
      //return this.http.get<Aircraft[]> (environment.host+ "/aircrafts");  //renvoie un observable -> Cette ligneeffectue une requête http get pour récuperer la liste des avions depuis l'url. La méthode 'get()' (moudle http) retourne un observable qui émet la réponse http 
  }

  //liste des avions en phase de design
  public getDesignedAircrafts(): Observable<Aircraft[]>{
    return this.http.get<Aircraft[]> (environment.host+"/aircrafts?design=true");
  }

  //liste des avions en phase de développement
  public getDevelopmentAircrafts(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]> (environment.host + "/aircrafts?development=true");
  }

  //renvoie un avion à partir de l'id
  public getAircraftByMsn(id:number): Observable<Aircraft> {
    return this.http.get<Aircraft> (environment.host + "/aircrafts" + id);
  }

public getSearchAircraft(value: any) : Observable<Aircraft[]>{
  return this.http.get<Aircraft[]> (environment.host + `/aircrafts?prog_like=${value}`)

}

}
  




