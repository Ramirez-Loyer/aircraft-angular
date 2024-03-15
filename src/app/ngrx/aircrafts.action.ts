import {Action} from "@ngrx/store";
import { Aircraft } from "../model/aircraft";


export enum AircraftsActionsTypes {
//Action : GEt all aircrafts
//s'agisant de l'action consistant à afficher tous les avions, nous avons 3 états possibles
GET_ALL_AIRCRAFTS = "[Aircrafts] Get AllAircrafts", 
GET_ALL_AIRCRAFTS_SUCCESS = "[Aircrafts] Get AllAircrafts Success",
GET_ALL_AIRCRAFTS_ERROR = "[Aircrafts] Get AllAircrafts Error",
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

export type AircraftsActions = GetAllAircraftsAction | GetAllAircraftsActionSuccess | GetAllAircraftsActionError