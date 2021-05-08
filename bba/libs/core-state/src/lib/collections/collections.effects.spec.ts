import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { CollectionsEffects } from './collections.effects';
import * as CollectionsActions from './collections.actions';

describe('CollectionsEffects', () => {
  let actions: Observable<any>;
  let effects: CollectionsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        CollectionsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CollectionsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CollectionsActions.init() });

      const expected = hot('-a-|', {
        a: CollectionsActions.loadCollectionsSuccess({ collections: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
