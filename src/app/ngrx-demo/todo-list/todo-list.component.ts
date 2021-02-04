import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetch } from '../ngrx-actions';
import { IState } from '../ngrx-reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [Store],
})
export class TodoListComponent {
  taskList$: Observable<IState>;

  constructor(private store: Store<{ todo: IState }>) {
    /**
     * Drawback with subscribe method is that, you'll have to
     * explicitly unsubscribe it on ngOnDestroy or at any point of time
     * when required.
     *
     * But async operator, automatically unsubscribes it when component is
     * unmounted/destroyed.
     */
    this.taskList$ = this.store.select('todo');
  }

  fetchData(): void {
    this.store.dispatch(fetch());
  }
}
