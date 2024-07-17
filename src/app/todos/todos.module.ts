import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {todoReducer} from "../store/todo-reducer";
import {TodosComponent} from "./todos.component";
import {EffectsModule} from "@ngrx/effects";
import {TodosEffects} from "../store/effects";



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todosState', todoReducer),
    EffectsModule.forFeature([TodosEffects])
  ],
  exports: [TodosComponent]
})
export class TodosModule { }
