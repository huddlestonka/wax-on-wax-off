import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { GuitarsComponent } from './guitars/guitars.component';
import { GuitarDetailsComponent } from './guitars/guitar-details/guitar-details.component';
import { GuitarsListComponent } from './guitars/guitars-list/guitars-list.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionDetailsComponent } from './collections/collection-details/collection-details.component';
import { CollectionsListComponent } from './collections/collections-list/collections-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, GuitarsComponent, GuitarDetailsComponent, GuitarsListComponent, UsersComponent, UserDetailsComponent, UsersListComponent, CollectionsComponent, CollectionDetailsComponent, CollectionsListComponent, HomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
