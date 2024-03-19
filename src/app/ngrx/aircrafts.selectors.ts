import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AircraftsState, AircraftsStateEnum } from "./aircrafts.state";
import { Aircraft } from "../model/aircraft";

//nous souhaitons renvoyer le nombre d'avions à la fois en phase d'étude et de construction pour alerter 
export const selectCountAlertAircrafts = createSelector(
    createFeatureSelector('airbusState'), //nous spécifions ici le state sur lequel va agir notre selector
    (state: AircraftsState) => {
        let total: number = 0;
        state.aircrafts.forEach(a => {
            if (a.development == true && a.design == true) total++;
         })
         return total;
    }
);

export const selectShowCountAlert= createSelector(
    createFeatureSelector('airbusState'), 
    (state: AircraftsState) => {
        let monTableau: Aircraft[] = []
        if(state.dataState === AircraftsStateEnum.LOADED) {
        state.aircrafts.forEach(a => {
          
            if (a.development == true && a.design == true){monTableau.push(a)}
         })}
         console.log(monTableau);
         return monTableau;
         
    }
);