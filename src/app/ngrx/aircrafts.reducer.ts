import { Action } from "@ngrx/store";

import { AircraftsState, AircraftsStateEnum, initState } from "./aircrafts.state";
import { AircraftsActions, AircraftsActionsTypes } from "./aircrafts.action";

export function AircraftsReducer(state : AircraftsState = initState, action: Action) {
    switch(action.type){
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
        console.log("loading...");
        return {...state, dataState: AircraftsStateEnum.LOADING };

        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS: 
        //Action a été reçu par l'effet qui a fait une demande en base, reçoit les datas et génère l'action 
            return {...state, dataState: AircraftsStateEnum.LOADED, aircrafts: (<AircraftsActions> action).payload }
            //renvoi clone + nouveau dataState + liste des avions en base contenu dans le payload

        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_ERROR: 
            return {...state, dataState: AircraftsStateEnum.ERROR, errorMessage: (<AircraftsActions> action).payload}

        //GET DESIGNED AIRCRAFTS
        case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS:
            return {...state, dataState: AircraftsStateEnum.LOADING };

        case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS:
            return {...state, dataState: AircraftsStateEnum.LOADED, aircrafts : (<AircraftsActions> action).payload };
     
        case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR:
            return {...state, dataState: AircraftsStateEnum.ERROR, errorMessage : (<AircraftsActions> action).payload };



        default : 
            return {...state}


    }
} //en bref : le reducer reçoit state actuel + action dispatchée dasn loe store et retourne le new state