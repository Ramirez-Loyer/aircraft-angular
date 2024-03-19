import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Aircraft } from 'src/app/model/aircraft';
import { selectShowCountAlert } from 'src/app/ngrx/aircrafts.selectors';
import { AircraftsStateEnum, DataStateEnum } from 'src/app/ngrx/aircrafts.state'



@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {

myArrayAlert$: Observable<Aircraft[]> | undefined;
readonly aircraftStateEnum = AircraftsStateEnum
readonly dataStateEnum = DataStateEnum
constructor(private store: Store<any>) { }
ngOnInit(): void {this.myArrayAlert$ = this.store.select(selectShowCountAlert)}
}
