import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Place } from '../classes/place';

@Injectable()
export class PlaceService {
	private placesUrl = 'http://localhost:8080/learningout/places.json';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) {}

	getPlaces(): Promise<Place[]> {
		return this.http.get(this.placesUrl, this.headers)
		.toPromise()
		.then(response => response.json() as Place[])
		.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
    	console.error('An error occurred', error);
    	return Promise.reject(error.message || error);
	}
}
