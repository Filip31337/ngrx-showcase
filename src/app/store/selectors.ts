import {AppStateInterface} from "../model/app-state.interface";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: AppStateInterface) => state.todosState;

export const isTodosLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const todosSelector = createSelector(
  selectFeature,
  (state) => state.todos
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
