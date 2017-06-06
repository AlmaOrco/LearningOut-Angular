import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { PlaceDetailService } from './place-detail.service';
import { Place } from '../classes/place';

@Component({
	selector: 'place-detail',
	templateUrl: './place-detail.component.html',
	styleUrls: [ './place-detail.component.css'],
	providers: [PlaceDetailService]
})
export class PlaceDetailComponent implements OnInit {
//	place: Observable<Place>;
	
	@Input() place: Place;

	constructor(
		private placeDetailService: PlaceDetailService,
		private route: ActivatedRoute,
		private location: Location) {}

	ngOnInit(): void {
		  this.route.params
    		.switchMap((params: Params) => this.placeDetailService.search(+params['id']))
    		.subscribe(place => this.place = place);
	}

	goBack(): void {
		this.location.back();
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