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
      { id: 1, name: 'Eat' , hours: 0.5},
      { id: 2, name: 'Sleep', hours: 8 },
      { id: 3, name: 'Rave', hours: 8 },
      { id: 4, name: 'Repeat', hours: 24 }
    ];
    return of(todos).pipe(delay(3000));
  }
}
