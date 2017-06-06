import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Place } from '../classes/place';

@Injectable()
export class PlaceSearchService {

	constructor(private http: Http) {}

	search(term: string): Observable<Place[]> {
		return this.http.get(`http://localhost:8080/learningout/api/places/search.json?term=${term}`)
					.map((response: Response) => <Place[]> response.json());
	}
}