import { GuitarsEntity } from './guitars.models';
import * as GuitarsActions from './guitars.actions';
import { State, initialState, reducer } from './guitars.reducer';

describe('Guitars Reducer', () => {
  const createGuitarsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as GuitarsEntity);

  beforeEach(() => {});

  describe('valid Guitars actions', () => {
    it('loadGuitarsSuccess should return set the list of known Guitars', () => {
      const guitars = [
        createGuitarsEntity('PRODUCT-AAA'),
        createGuitarsEntity('PRODUCT-zzz'),
      ];
      const action = GuitarsActions.loadGuitarsSuccess({ guitars });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
