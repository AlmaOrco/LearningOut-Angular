import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Place } from '../classes/place';

@Injectable()
export class PlaceService {
	
	constructor(private http: Http) {}
	
	createPlace(json: Place) {
		let place: Place = new Place();
		place.idPlace = json.idPlace;
		place.namePlace = json.namePlace;
		place.location = json.location;
		place.province = json.province;
		place.postalCode = json.postalCode;
		return place;
	}

	getPlaces(): Observable<Place[]> {
		return this.http.get('http://localhost:8080/learningout/api/places.json')
						.map((response: Response) => <Place[]> response.json());
	}

	search(term: string): Observable<Place[]> {
		return this.http.get(`http://localhost:8080/learningout/api/places/search.json?term=${term}`)
					.map((response: Response) => <Place[]> response.json());
	}

	getPlace(id: number): Observable<Place> {
		return this.http.get(`http://localhost:8080/learningout/api/places/${id}.json`)
					.map((response: Response) => <Place> response.json());
	}

	addPlace(id: number): Observable<Place> {
		return this.http.get(`http://localhost:8080/learningout/api/places/${id}.json`)
					.map((response: Response) => <Place> response.json());
	}
}
