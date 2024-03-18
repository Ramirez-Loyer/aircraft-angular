//nous définissons ici un objet évenements caractérisé par le type d'évt et son contenu indéfini
export interface ActionEvent {
    type : AircraftsActionsTypes;
    payload : any
}

export enum AircraftsActionsTypes {
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    
    GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",
    
    GET_DESIGNED_AIRCRAFTS_SUCCESS = "[Aircrafts] Get Designed Aircrafts Success", 
    GET_DESIGNED_AIRCRAFTS_ERROR = "[Aircrafts] DGet Designed aircrafts Error",
    GET_DEVELOPMENT_AIRCRAFTS = "[Aircrafts] Get Development Aircrafts",
    GET_SEARCH_AIRCRAFTS = "[Aircrafts] Get Search Aircrafts"
    
}