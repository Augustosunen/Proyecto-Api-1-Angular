import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterListHeaderComponent } from './character-list/character-list-header/character-list-header.component';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './father/son/son.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormRegistroComponent } from './form-registro/form-registro.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './pages/log-in/log-in.component';



@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    SonComponent,
    CharacterListComponent,
    CharacterListHeaderComponent,
    FormRegistroComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


