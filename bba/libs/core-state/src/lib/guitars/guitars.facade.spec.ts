import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { GuitarsEntity } from './guitars.models';
import { GuitarsEffects } from './guitars.effects';
import { GuitarsFacade } from './guitars.facade';

import * as GuitarsSelectors from './guitars.selectors';
import * as GuitarsActions from './guitars.actions';
import {
  GUITARS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './guitars.reducer';

interface TestSchema {
  guitars: State;
}

describe('GuitarsFacade', () => {
  let facade: GuitarsFacade;
  let store: Store<TestSchema>;
  const createGuitarsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as GuitarsEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(GUITARS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([GuitarsEffects]),
        ],
        providers: [GuitarsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(GuitarsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allGuitars$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allGuitars$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadGuitarsSuccess` to manually update list
     */
    it('allGuitars$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allGuitars$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          GuitarsActions.loadGuitarsSuccess({
            guitars: [createGuitarsEntity('AAA'), createGuitarsEntity('BBB')],
          })
        );

        list = await readFirst(facade.allGuitars$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
