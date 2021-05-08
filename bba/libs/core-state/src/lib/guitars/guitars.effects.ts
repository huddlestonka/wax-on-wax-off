import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as GuitarsFeature from './guitars.reducer';
import * as GuitarsActions from './guitars.actions';

@Injectable()
export class GuitarsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GuitarsActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return GuitarsActions.loadGuitarsSuccess({ guitars: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return GuitarsActions.loadGuitarsFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
