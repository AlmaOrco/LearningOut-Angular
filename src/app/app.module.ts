import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PlaceService } from './services/place.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
<<<<<<< HEAD
    MainComponent
=======
    MainComponent    
>>>>>>> 47fef25b50f6e31d390041057b07a8a3726ec1bd
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ PlaceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
