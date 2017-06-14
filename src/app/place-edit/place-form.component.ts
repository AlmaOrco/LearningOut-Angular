import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { PlaceService } from '../services/place.service';
import { Place } from '../classes/place';

@Component({
	selector: 'place-form',
	templateUrl: './place-form.component.html',
	styleUrls: [ './place-form.component.css'],
	providers: [PlaceService]
})
export class PlaceFormComponent implements OnInit {
	
	@Input() place: Place;

	constructor(
		private placeService: PlaceService,
		private route: ActivatedRoute,
		private location: Location) {}

	ngOnInit(): void {
		  this.route.params
    		.switchMap((params: Params) => this.placeService.getPlace(+params['id']))
    		.subscribe(json => this.place = this.placeService.createPlace(json));
	}

	model = new Place();

	onSubmit() {
		this.placeService.addPlace(this.model);
	}

	goBack(): void {
		this.location.back();
	}
}