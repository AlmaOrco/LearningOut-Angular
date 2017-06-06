import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { PlaceSearchService } from './place-search.service';
import { Place } from '../classes/place';

@Component({
	selector: 'place-search',
	templateUrl: './place-search.component.html',
	styleUrls: [ './place-search.component.css'],
	providers: [PlaceSearchService]
})
export class PlaceSearchComponent implements OnInit {
	places: Observable<Place[]>;
	private searchTerms = new Subject<string>();

	constructor(
		private placeSearchService: PlaceSearchService,
		private router: Router) {}

	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.places = this.searchTerms
			.debounceTime(300)
			.distinctUntilChanged()
			.switchMap(term => term ? this.placeSearchService.search(term): Observable.of<Place[]>([]))
			.catch(error => {
				this.handleError(error);
			    console.log(error);
			    return Observable.of<Place[]>();
			});

	}

	gotoDetail(place: Place): void {
		let link = ['/detail', place.id];
		this.router.navigate(link);
	}

	private handleError(error: Response | any) {
	    console.log('handleError log: ');
	    let errMsg: string;
	    if (error instanceof Response) {
	      if (!(error.text() === '' )) {  // if response body not empty
	        const body = error.json() || '';
	        const err = body.error || JSON.stringify(body);
	        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	      } else {
	        console.log('binding errors header not empty');
	        //errMsg = error.headers.
	        errMsg = error.headers.get('errors').toString();
	      }
	    } else {
	      errMsg = error.message ? error.message : error.toString();
	    }
	    console.error(errMsg);
	    return Observable.throw(errMsg);
	}
}
