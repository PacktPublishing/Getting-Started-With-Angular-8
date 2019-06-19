import { Component } from '@angular/core';
import { select, Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActionTypes } from './store/actions/manage-apples.actions';
import { ApplesState } from './store/state/apples.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgRx Fruit Shop';

  applesInStore$: Observable<any> = this.store.select(state => state.applesCount);

  constructor(private store: Store<ApplesState>) {}

  addApples(apples: number): void {
    this.store.dispatch({
      type: ActionTypes.SaveApples,
      payload: apples
    });
  }

  removeApples(apples: number): void {
    this.store.dispatch({
      type: ActionTypes.RemoveApple,
      payload: apples
    });
  }

  removeAllApples(): void {
    this.store.dispatch({
      type: ActionTypes.RemoveAllApples
    });
  }
}
