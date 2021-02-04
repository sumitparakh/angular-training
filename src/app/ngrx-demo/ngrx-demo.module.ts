import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { RouterModule } from '@angular/router';
import { Action, ActionReducer, Store, StoreModule } from '@ngrx/store';
import { IState, todoReducer } from './ngrx-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
// import {} from ''

@NgModule({
  declarations: [TodoListComponent, TodoComponent, UpdateProfileComponent],
  providers: [Store],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TodoComponent,
      },
    ]),

    StoreModule.forRoot<ActionReducer<ActionReducer<IState, Action>, Action>>({
      todo: todoReducer,
    }), // Just like createStore(<reducer>)
    StoreDevtoolsModule,
  ],
})
export class NgrxDemoModule {}
