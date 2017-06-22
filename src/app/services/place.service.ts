import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment.prod';

import { Place } from '../classes/place';

@Injectable()
export class PlaceService {
	_baseUrl: string;

	constructor(private http: Http, location: Location) {
		this._baseUrl = environment.SERVER_HOST + '/learningout/api';
	}
	
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
		return this.http.get(this._baseUrl + '/places.json')
						.map((response: Response) => <Place[]> response.json());
	}

	search(term: string): Observable<Place[]> {
		return this.http.get(this._baseUrl + `/places/search.json?term=${term}`)
					.map((response: Response) => <Place[]> response.json());
	}

	getPlace(id: number): Observable<Place> {
		return this.http.get(this._baseUrl + `/places/${id}.json`)
					.map((response: Response) => <Place> response.json());
	}

	addPlace(place: Place): Observable<Place> {
		const headers = new Headers();
    	headers.append('Content-Type', 'application/json');
    	headers.append('Accept', 'application/json');
		return this.http.post(this._baseUrl + `/places/add/place.json`,JSON.stringify(place), {headers})
					.map((response: Response) => <Place> response.json())
    				.catch(this.handleError);
	}

	deletePlace(id: String): Observable<number> {
		const headers = new Headers({'Content-Type': ' application/json;charset=UTF-8'});
		const options = new RequestOptions({headers: headers});
		return this.http.delete(this._baseUrl + `/places/delete/${id}.json`, options)
			.map((response: Response) => response.status)
			.catch(this.handleError);
	}

	updatePlace(place: Place): Observable<Place> {
		const body = JSON.stringify(place);
		const headers = new Headers({'Content-Type': ' application/json;charset=UTF-8'});
		const options = new RequestOptions({headers: headers});
		return this.http.put(this._baseUrl + `/places/update/${place.idPlace}.json`, body, options)
			.map((response: Response) => response)
			.catch(this.handleError);
	}

	private handleError(error: Response | any) {
	    console.log('handleError log: ');
	    let errMsg: string;
	    if (error instanceof Response) {
	    	if (!(error.text() === '' )) {
	    		const body = error.json() || '';
	    		const err = body.error || JSON.stringify(body);
	    		errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	    	} else {
	    		console.log('binding errors header not empty');
	    		errMsg = error.headers.get('errors').toString();
	    	}
	    } else {
	    	errMsg = error.message ? error.message : error.toString();
	    }
	    console.error(errMsg);
	    return Observable.throw(errMsg);
	}
}
