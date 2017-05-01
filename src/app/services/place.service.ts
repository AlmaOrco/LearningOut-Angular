import { Injectable } from '@angular/core';

import { Place } from '../classes/place';

const PLACES: Place[] = [
		{id: 1, name: 'Parque María Luisa', location: 'Sevilla', province: 'Sevilla', postalCode: 41013},
		{id: 2, name: 'Parque Corbones', location: 'La Puebla de Cazalla', province: 'Sevilla', postalCode: 41540},
		{id: 1, name: 'Parque Miraflores', location: 'Sevilla', province: 'Sevilla', postalCode:41015}
	];

@Injectable()
export class PlaceService {
	
	
	
	getPlaces(): Place[] {
		return PLACES;
	}
}
