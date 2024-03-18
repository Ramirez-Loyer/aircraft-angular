import {Action} from "@ngrx/store";
import { Aircraft } from "../model/aircraft";


export enum AircraftsActionsTypes {
//Action : GEt all aircrafts
//s'agisant de l'action consistant à afficher tous les avions, nous avons 3 états possibles
GET_ALL_AIRCRAFTS = "[Aircrafts] Get AllAircrafts", 
GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get AllAircrafts Success",
GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get AllAircrafts Error",
GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",    
GET_DESIGNED_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Designed Aircrafts Success", 
GET_DESIGNED_AIRCRAFTS_ERROR = "[Aircrafts] DGet Designed aircrafts Error",
}



export class GetAllAircraftsAction implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS;
    constructor(public payload: any) {}
    }

export class GetAllAircraftsActionSuccess implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS;
    constructor(public payload: any) {}
    }

export class GetAllAircraftsActionError implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR;
    constructor(public payload: any) {}
    }

//GetDesigned aircrafts
export class getDesignedAircraftAction implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS;
    constructor(public payload: any) {}
    }

export class getDesignedAircraftSuccess implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS;
    constructor(public payload: Aircraft[]) {}
    }

export class getDesignedAircraftError implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR;
    constructor(public payload: string) {}  //message d'erreur 
    }




export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError | 
GetAllAircraftsAction | GetAllAircraftsActionSuccess| GetAllAircraftsActionError;