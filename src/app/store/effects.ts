/*
import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as TodoActions from "./actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {TodosService} from "../service/todos.service";

@Injectable()
export class TodosEffects {

  constructor(private actions$: Actions, private todoService: TodosService) {
  }

  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.getTodos),
      mergeMap(() => {
      return this.todoService
        .getTodos()
        .pipe(map((todos) => TodoActions.getTodosSuccess({ todos })),
          catchError((error) =>
            of(TodoActions.getTodosError({ error: error.message }))
          )
        );
      })
    )
  );

}
*/
