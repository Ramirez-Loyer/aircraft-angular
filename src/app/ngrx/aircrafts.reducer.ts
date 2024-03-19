import { Action } from "@ngrx/store";
import { AircraftsState, AircraftsStateEnum, initState } from "./aircrafts.state";
import { AircraftsActions, AircraftsActionsTypes, OperationActionsTypes } from "./aircrafts.action";
import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Operation } from "../model/operation";

export const adapter : EntityAdapter<Operation> = createEntityAdapter<Operation>({
    //on a besoin d'un adaptateur afin de manipuler nos entités avec un certain nombre de méthodes
    //sortComparer : sortByPriority -> il est possible d'ajouter des méthodes ici par ex pour trier
    //sinon le trie se fait par défaut sur l'id
});

export const initialState: AircraftsState = adapter.getInitialState({
    aircrafts : [],
    errorMessage: "", 
    dataState : AircraftsStateEnum.INITIAL, 
    ids: [],
    entities: {}
});

export function AircraftsReducer(state : AircraftsState = initialState, action: Action) : AircraftsState {
    switch(action.type){
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
        //console.log("loading...");
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

       
            //GET DEVELOPMENT AIRCRAFTS
        case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS:
            return {...state, dataState: AircraftsStateEnum.LOADING };

        case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS:
            return {...state, dataState: AircraftsStateEnum.LOADED, aircrafts : (<AircraftsActions> action).payload };
     
        case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR:
            return {...state, dataState: AircraftsStateEnum.ERROR, errorMessage : (<AircraftsActions> action).payload };

        
            //GET SEARCHED AIRCRAFTS
        case AircraftsActionsTypes.GET_SEARCHED_AIRCRAFTS:
            return {...state, dataState: AircraftsStateEnum.LOADING, aircrafts : (<AircraftsActions> action).payload };

        case AircraftsActionsTypes.GET_SEARCHED_AIRCRAFTS_SUCCESS:
            return {...state, dataState: AircraftsStateEnum.LOADED, aircrafts : (<AircraftsActions> action).payload };
     
        case AircraftsActionsTypes.GET_SEARCHED_AIRCRAFTS_ERROR:
            return {...state, dataState: AircraftsStateEnum.ERROR, errorMessage : (<AircraftsActions> action).payload };

       
            //GESTION OPERATIONS
        case OperationActionsTypes.ADD_OPERATION : 
            return adapter.addOne((<AircraftsActions> action).payload, state);
        case OperationActionsTypes.REMOVE_OPERATION : 
            return adapter.removeOne((<AircraftsActions> action).payload, state);

       
        default : 
            return {...state}


    }
} //en bref : le reducer reçoit state actuel + action dispatchée dasn loe store et retourne le new state




