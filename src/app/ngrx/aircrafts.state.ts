import { EntityState } from "@ngrx/entity";
import { Aircraft } from "../model/aircraft";
import { Operation } from "../model/operation";

export enum AircraftsStateEnum{  //les différents états du state
    LOADING = "Loading",
    LOADED = "Loaded", 
    ERROR = "Error",
    INITIAL = "Initial"
}

export interface AircraftsState extends EntityState<Operation> {  //structure de notre state
    aircrafts : Aircraft[],
    errorMessage: string, 
    dataState : AircraftsStateEnum
}

//il est nécessaire de définir l'état initial du state avec des valeurs par défaut
export const initState : AircraftsState =  {
    aircrafts : [],
    errorMessage: "", 
    dataState : AircraftsStateEnum.INITIAL, 
    ids: [],
    entities: {}
}


export enum DataStateEnum {
    LOADING, 
    LOADED, 
    ERROR
}

export interface AppDataState<T> {
    dataState? : DataStateEnum, 
    data? : T, 
    errorMessage?: string
}
