import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUsers from './users/users.reducer';
import { UsersEffects } from './users/users.effects';
import { UsersFacade } from './users/users.facade';
import * as fromGuitars from './guitars/guitars.reducer';
import { GuitarsEffects } from './guitars/guitars.effects';
import { GuitarsFacade } from './guitars/guitars.facade';
import * as fromCollections from './collections/collections.reducer';
import { CollectionsEffects } from './collections/collections.effects';
import { CollectionsFacade } from './collections/collections.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects]),
    StoreModule.forFeature(
      fromGuitars.GUITARS_FEATURE_KEY,
      fromGuitars.reducer
    ),
    EffectsModule.forFeature([GuitarsEffects]),
    StoreModule.forFeature(
      fromCollections.COLLECTIONS_FEATURE_KEY,
      fromCollections.reducer
    ),
    EffectsModule.forFeature([CollectionsEffects]),
  ],
  providers: [UsersFacade, GuitarsFacade, CollectionsFacade],
})
export class CoreStateModule {}
