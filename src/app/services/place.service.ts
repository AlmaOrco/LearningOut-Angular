import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Place } from '../classes/place';

@Injectable()
export class PlaceService {
	
	constructor(private http: Http) {}
	
	getPlaces(): Observable<Place[]> {
		return this.http.get('http://localhost:8080/learningout/places.json')
						.map((response: Response) => <Place[]> response.json());
	}
}
