import { Injectable } from "@angular/core";
import { AircraftService } from "../services/aircraft.service";
import { Actions, createEffect, ofType} from "@ngrx/effects";
import { Observable, map, mergeMap, of, catchError } from "rxjs";
import { Action } from "@ngrx/store";
import { GetAllAircraftsActionError, GetAllAircraftsActionSuccess, AircraftsActionsTypes, GetDesignedAircraftsAction, GetDesignedAircraftsActionSuccess, GetDesignedAircraftsActionError } from "./aircrafts.action";


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
};