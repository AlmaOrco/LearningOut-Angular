import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { PlaceService } from './services/place.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { PlaceSearchComponent } from './place-search/place-search.component';
import { LoBlogAComponent } from './lo-blog/lo-blog-a.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { PlaceFormComponent } from './place-edit/place-form.component';
import { PlaceAddComponent } from './place-add/place-add.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,
    PlaceSearchComponent,
    PlaceDetailComponent,
    LoBlogAComponent,
    PlaceFormComponent,
    PlaceAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ 
    PlaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
