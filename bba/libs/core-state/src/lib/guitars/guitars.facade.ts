import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as GuitarsActions from './guitars.actions';
import * as GuitarsFeature from './guitars.reducer';
import * as GuitarsSelectors from './guitars.selectors';

@Injectable()
export class GuitarsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(GuitarsSelectors.getGuitarsLoaded));
  allGuitars$ = this.store.pipe(select(GuitarsSelectors.getAllGuitars));
  selectedGuitars$ = this.store.pipe(select(GuitarsSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(GuitarsActions.init());
  }
}
