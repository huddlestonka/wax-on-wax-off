import { GuitarsEntity } from './guitars.models';
import { State, guitarsAdapter, initialState } from './guitars.reducer';
import * as GuitarsSelectors from './guitars.selectors';

describe('Guitars Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getGuitarsId = (it) => it['id'];
  const createGuitarsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as GuitarsEntity);

  let state;

  beforeEach(() => {
    state = {
      guitars: guitarsAdapter.setAll(
        [
          createGuitarsEntity('PRODUCT-AAA'),
          createGuitarsEntity('PRODUCT-BBB'),
          createGuitarsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Guitars Selectors', () => {
    it('getAllGuitars() should return the list of Guitars', () => {
      const results = GuitarsSelectors.getAllGuitars(state);
      const selId = getGuitarsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = GuitarsSelectors.getSelected(state);
      const selId = getGuitarsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getGuitarsLoaded() should return the current 'loaded' status", () => {
      const result = GuitarsSelectors.getGuitarsLoaded(state);

      expect(result).toBe(true);
    });

    it("getGuitarsError() should return the current 'error' state", () => {
      const result = GuitarsSelectors.getGuitarsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
