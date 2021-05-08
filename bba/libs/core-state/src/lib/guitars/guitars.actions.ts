import { createAction, props } from '@ngrx/store';
import { GuitarsEntity } from './guitars.models';

export const init = createAction('[Guitars Page] Init');

export const loadGuitarsSuccess = createAction(
  '[Guitars/API] Load Guitars Success',
  props<{ guitars: GuitarsEntity[] }>()
);

export const loadGuitarsFailure = createAction(
  '[Guitars/API] Load Guitars Failure',
  props<{ error: any }>()
);
