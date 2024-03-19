import { Injectable } from "@angular/core";
import { AircraftService } from "../services/aircraft.service";
import { Actions, createEffect, ofType} from "@ngrx/effects";
import { Observable, map, mergeMap, of, catchError } from "rxjs";
import { Action } from "@ngrx/store";
import { GetAllAircraftsActionError, GetAllAircraftsActionSuccess, AircraftsActionsTypes, GetDesignedAircraftsAction, GetDesignedAircraftsActionSuccess, GetDesignedAircraftsActionError, GetDevelopmentAircraftsActionSuccess, GetDevelopmentAircraftsActionError, GetSearchedAircraftsActionError, GetSearchedAircraftsActionSuccess } from "./aircrafts.action";


@Injectable() //décorateur spécifie qu'il s'agit d'un service

export class AircraftsEffects {
    constructor(private aircraftService : AircraftService, private effectActions : Actions) {

    }

    getAllAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_ALL_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getAircrafts().pipe(
                    map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),

                    catchError((err) => of(new GetAllAircraftsActionError(err.message)))
                )
            })
        )
    )



    getDesignedAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getDesignedAircrafts().pipe(
                    map((aircrafts) => new GetDesignedAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetDesignedAircraftsActionError(err.message)))
                )
            })
    )    
    )

    getDevelopmentAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getDevelopmentAircrafts().pipe(
                    map((aircrafts) => new GetDevelopmentAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetDevelopmentAircraftsActionError(err.message)))
                )
            })
    )    
    )

    getSearchedAircraftsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftsActionsTypes.GET_SEARCHED_AIRCRAFTS),
            mergeMap((action:{type:string; payload:{value:string}}) => {
                return this.aircraftService.getSearchAircraft(action.payload.value).pipe(
                    map((aircrafts) => new GetSearchedAircraftsActionSuccess(aircrafts)),
                    catchError((err) => of(new GetSearchedAircraftsActionError(err.message)))
                )
            })
    )    
    ) 
};