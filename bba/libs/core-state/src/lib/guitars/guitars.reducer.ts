import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as GuitarsActions from './guitars.actions';
import { GuitarsEntity } from './guitars.models';

export const GUITARS_FEATURE_KEY = 'guitars';

export interface State extends EntityState<GuitarsEntity> {
  selectedId?: string | number; // which Guitars record has been selected
  loaded: boolean; // has the Guitars list been loaded
  error?: string | null; // last known error (if any)
}

export interface GuitarsPartialState {
  readonly [GUITARS_FEATURE_KEY]: State;
}

export const guitarsAdapter: EntityAdapter<GuitarsEntity> = createEntityAdapter<GuitarsEntity>();

export const initialState: State = guitarsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const guitarsReducer = createReducer(
  initialState,
  on(GuitarsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(GuitarsActions.loadGuitarsSuccess, (state, { guitars }) =>
    guitarsAdapter.setAll(guitars, { ...state, loaded: true })
  ),
  on(GuitarsActions.loadGuitarsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return guitarsReducer(state, action);
}
