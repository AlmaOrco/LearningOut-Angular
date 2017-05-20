import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Place } from '../classes/place';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

    private title = "Encuentra tu lugar";
    private places: Observable<Place[]>;

    constructor(placeService: PlaceService){
    	this.places = placeService.getPlaces();
    }
  
}
