import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {TodoInterface} from "../model/todo.interface";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  getTodos(): Observable<TodoInterface[]> {
    const todos: TodoInterface[] = [
      { id: 1, name: 'Eat' },
      { id: 2, name: 'Sleep' },
      { id: 3, name: 'Rave' },
      { id: 4, name: 'Repeat' }
    ];
    return of(todos).pipe(delay(3000));
  }
}
