import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { GuitarsComponent } from './guitars/guitars.component';
import { UsersComponent } from './users/users.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionsDetailsComponent } from './collections/collections-details/collections-details.component';
import { CollectionsListComponent } from './collections/collections-list/collections-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { GuitarDetailsComponent } from './guitars/guitar-details/guitar-details.component';
import { GuitarsListComponent } from './guitars/guitars-list/guitars-list.component';
import { CollectionDetailsComponent } from './collections/collection-details/collection-details.component';

@NgModule({
  declarations: [AppComponent, GuitarsComponent, UsersComponent, CollectionsComponent, CollectionsDetailsComponent, CollectionsListComponent, UserDetailsComponent, UsersListComponent, GuitarDetailsComponent, GuitarsListComponent, CollectionDetailsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, StoreModule.forRoot({}, {}), StoreRouterConnectingModule.forRoot(), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
