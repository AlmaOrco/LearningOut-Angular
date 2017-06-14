import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { PlaceService } from '../services/place.service';
import { Place } from '../classes/place';

@Component({
	selector: 'place-detail',
	templateUrl: './place-detail.component.html',
	styleUrls: [ './place-detail.component.css'],
	providers: [PlaceService]
})
export class PlaceDetailComponent implements OnInit {
	
	@Input() place: Place;
	response_status: number;
	delete_success: boolean = false;
	errorMessage: string;

	constructor(
		private placeService: PlaceService,
		private route: ActivatedRoute,
		private location: Location,
		private router: Router) {}

	ngOnInit(): void {
		  this.route.params
    		.switchMap((params: Params) => this.placeService.getPlace(+params['id']))
    		.subscribe(place => this.place = place);
	}

	goBack(): void {
		this.location.back();
	}

	goEdit(idPlace: String): void {
		this.router.navigate(['edit/' + idPlace]);
	}

	toDelete(place: Place): void {
	    this.placeService.deletePlace(place.idPlace.toString()).subscribe(
	      response => {
	        this.response_status = response;
	        if (this.response_status === 204) {
	          this.delete_success = true;
	          this.place = <Place>{};
	        }
	      },
		error => this.errorMessage = <any> error);
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