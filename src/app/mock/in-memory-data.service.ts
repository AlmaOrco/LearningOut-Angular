import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let places = [
    {id: 1, name: 'Parque María Luisa', location: 'Sevilla', province: 'Sevilla', postalCode: 41013},
    {id: 2, name: 'Parque Corbones', location: 'La Puebla de Cazalla', province: 'Sevilla', postalCode: 41540},
    {id: 1, name: 'Parque Miraflores', location: 'Sevilla', province: 'Sevilla', postalCode:41015}
  ];
    return {places};
  }
}