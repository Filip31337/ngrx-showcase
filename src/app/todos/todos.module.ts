import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {reducers} from "../store/reducers";
import {TodosComponent} from "./todos.component";
import {EffectsModule} from "@ngrx/effects";
import {TodosEffects} from "../store/effects";



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('todosState', reducers),
    EffectsModule.forFeature([TodosEffects])
  ],
  exports: [TodosComponent]
})
export class TodosModule { }
