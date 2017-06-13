import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }      from './main/main.component';
import { PlaceDetailComponent }  from './place-detail/place-detail.component';
import { PlaceFormComponent } from './place-edit/place-form.component';
import { LoBlogAComponent } from './lo-blog/lo-blog-a.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index',  component: MainComponent },
  { path: 'detail/:id', component: PlaceDetailComponent },
  { path: 'edit/:id', component: PlaceFormComponent },
  { path: 'que_es_lo', component: LoBlogAComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}