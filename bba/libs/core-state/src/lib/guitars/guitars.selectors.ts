import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  GUITARS_FEATURE_KEY,
  State,
  GuitarsPartialState,
  guitarsAdapter,
} from './guitars.reducer';

// Lookup the 'Guitars' feature state managed by NgRx
export const getGuitarsState = createFeatureSelector<
  GuitarsPartialState,
  State
>(GUITARS_FEATURE_KEY);

const { selectAll, selectEntities } = guitarsAdapter.getSelectors();

export const getGuitarsLoaded = createSelector(
  getGuitarsState,
  (state: State) => state.loaded
);

export const getGuitarsError = createSelector(
  getGuitarsState,
  (state: State) => state.error
);

export const getAllGuitars = createSelector(getGuitarsState, (state: State) =>
  selectAll(state)
);

export const getGuitarsEntities = createSelector(
  getGuitarsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getGuitarsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getGuitarsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
