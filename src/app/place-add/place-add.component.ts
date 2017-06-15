import { Component, OnInit } from '@angular/core';
import { Place } from '../classes/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.component.html',
  styleUrls: ['./place-add.component.css']
})
export class PlaceAddComponent implements OnInit {
  place: Place;
  added_success: boolean = false;
  errorMessage: string;

  constructor( private placeService: PlaceService, private router: Router, private route: ActivatedRoute) {
    this.place = <Place>{};
  }

  ngOnInit() {
  }

  onSubmit(place: Place) {
    place.idPlace = null;
    this.placeService.addPlace(place).subscribe(
      new_place => {
        this.place = new_place;
        this.gotoPlacesList();
      },
      error => this.errorMessage = <any>error
    );
  }

  gotoPlacesList() {
    // TODO Revise
    this.router.navigate(['/places']);
  }
}