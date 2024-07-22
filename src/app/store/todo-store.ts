import {patchState, signalStore, withComputed, withHooks, withMethods, withState} from "@ngrx/signals";
import {TodosStateInterface} from "../model/todos-state.interface";
import {computed, inject} from "@angular/core";
import {TodosService} from "../service/todos.service";
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {pipe, switchMap, tap} from "rxjs";
import {TodoInterface} from "../model/todo.interface";

export const TodoStore = signalStore(
  { providedIn: 'root'},
  withState<TodosStateInterface>({
    isLoading: false,
    todos: [],
    error: null
  }),
  withComputed((store) => ({
    totalHours: computed(() => store.todos().length)
  })),
  withMethods((store, todosService = inject(TodosService)) => ({
    loadTodos: rxMethod<void>(
      pipe(
        switchMap(() => {
          return todosService.getTodos().pipe(
            tap((todos: TodoInterface[]) => {
              patchState(store, { todos });
            })
          );
        })
      )
    ),
  })),
  withHooks({
    onInit(store) {
      store.loadTodos();
    },
  })
);
