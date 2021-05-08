import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { GuitarsEffects } from './guitars.effects';
import * as GuitarsActions from './guitars.actions';

describe('GuitarsEffects', () => {
  let actions: Observable<any>;
  let effects: GuitarsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        GuitarsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(GuitarsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: GuitarsActions.init() });

      const expected = hot('-a-|', {
        a: GuitarsActions.loadGuitarsSuccess({ guitars: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
