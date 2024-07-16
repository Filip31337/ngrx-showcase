import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as Actions from "../store/actions";
import {Subscription} from "rxjs";
import {errorSelector, isTodosLoadingSelector, todosSelector} from "../store/selectors";
import {AppStateInterface} from "../model/app-state.interface";
import {TodoInterface} from "../model/todo.interface";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  error: string | null = null;
  todos: TodoInterface[] = [];
  private isLoadingSubscription!: Subscription;
  private errorSubscription!: Subscription;
  private todosSubscription!: Subscription;

  constructor(private store: Store<AppStateInterface>) {
  }

  ngOnInit(): void {
    this.store.dispatch(Actions.getTodos());
    this.isLoadingSubscription = this.store.pipe(select(isTodosLoadingSelector)).subscribe( value => {
      this.isLoading = value;
    });
    this.errorSubscription = this.store.pipe(select(errorSelector)).subscribe( error => {
      this.error = error;
    });
    this.todosSubscription = this.store.pipe(select(todosSelector)).subscribe( todos => {
      this.todos = todos;
    });
  }

  ngOnDestroy(): void {
    this.isLoadingSubscription?.unsubscribe();
  }

}
