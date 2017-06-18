import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
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
	
	public place: Place;
	errorMessage: string;

	constructor(
		private placeService: PlaceService,
		private route: ActivatedRoute,
		private location: Location,
		private router: Router) {
		this.place = <Place>{}
	}

	ngOnInit(): void {
		const placeId = this.route.snapshot.params['id'];
    	this.placeService.getPlace(placeId).subscribe(
      		place => this.place = place,
			error => this.errorMessage = <any> error);
	}

	onSubmit(place: Place) {
		var that = this;
		this.placeService.updatePlace(place).subscribe(
			get_result,
			get_error
    	);

		function get_error(error) {
			console.log(error);
			console.log('error catched');
			return this.errorMessage = <any> error;
		}

		function get_result(update_status) {
			console.log(update_status);
			if (update_status.status === 204) {
				console.log('update success');
				that.gotoPlaceDetail(place);
			} else {
				return console.log('update failed');
			}
		}
	};

	gotoPlaceDetail(place: Place) {
		this.router.navigate(['/places', place.idPlace]);
	}

	goBack(): void {
		this.location.back();
	}
}