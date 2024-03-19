import {Action} from "@ngrx/store";
import { Aircraft } from "../model/aircraft";


export interface ActionEvent{type:AircraftsActionsTypes; payload:any}

export enum AircraftsActionsTypes {
//Action : GEt all aircrafts
//s'agisant de l'action consistant à afficher tous les avions, nous avons 3 états possibles
GET_ALL_AIRCRAFTS = "[Aircrafts] Get AllAircrafts", 
GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get AllAircrafts Success",
GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get AllAircrafts Error",


//Action: Get Designed aircrafts
GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",    
GET_DESIGNED_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Designed Aircrafts Success", 
GET_DESIGNED_AIRCRAFTS_ERROR = "[Aircrafts] Get Designed aircrafts Error",


//Action : Get Development Aircrafts
GET_DEVELOPMENT_AIRCRAFTS = '[Aircrafts] Get Development Aircrafts',
GET_DEVELOPMENT_AIRCRAFTS_SUCCESS = '[Aircrafts] Get Development Aircrafts Success',
GET_DEVELOPMENT_AIRCRAFTS_ERROR = '[Aircrafts] Get Development Aircrafts Error',


//Action : Get Searched aircrafts
GET_SEARCHED_AIRCRAFTS = '[Aircrafts] Get Searched Aircrafts',
GET_SEARCHED_AIRCRAFTS_SUCCESS = '[Aircrafts] Get Searched aircrafts Success',
GET_SEARCHED_AIRCRAFTS_ERROR = '[Aircrafts] Get Serached Aircrafts Error',

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
export class GetDesignedAircraftsAction implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS;
    constructor(public payload: any) {}
    }

export class GetDesignedAircraftsActionSuccess implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS;
    constructor(public payload: Aircraft[]) {}
    }

export class GetDesignedAircraftsActionError implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR;
    constructor(public payload: string) {}  //message d'erreur 
    }

//Get Development aircrafts
export class GetDevelopmentAircraftsAction implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS;
    constructor(public payload: any) {}
    }

export class GetDevelopmentAircraftsActionSuccess implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS;
    constructor(public payload: Aircraft[]) {}
    }

export class GetDevelopmentAircraftsActionError implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR;
    constructor(public payload: string) {}  //message d'erreur 
    }

//Get Searched aircrafts
export class GetSearchedAircraftsAction implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_SEARCHED_AIRCRAFTS;
    constructor(public payload: any) {}
    }

export class GetSearchedAircraftsActionSuccess implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_SEARCHED_AIRCRAFTS_SUCCESS;
    constructor(public payload: Aircraft[]) {}
    }

export class GetSearchedAircraftsActionError implements Action {
    type : AircraftsActionsTypes = AircraftsActionsTypes.GET_SEARCHED_AIRCRAFTS_ERROR;
    constructor(public payload: string) {}  //message d'erreur 
    }





export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError | 
GetDesignedAircraftsAction  | GetDesignedAircraftsActionSuccess| GetDesignedAircraftsActionError |
GetDevelopmentAircraftsAction  | GetDevelopmentAircraftsActionSuccess| GetDevelopmentAircraftsActionError |
GetSearchedAircraftsAction  | GetSearchedAircraftsActionSuccess| GetSearchedAircraftsActionError ;