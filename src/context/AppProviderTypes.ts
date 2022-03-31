export interface Car {
  name: string;
  speed: number;
  passengers: Array<string>;
}

export interface AppReducerState {
  cars: Array<Car>;
  carsToShow: Array<Car>;
}

export enum AppActions {
  ADD_CARS = "ADD_CARS",
  SEARCH_CARS_BY_NAME = "SEARCH_CARS_BY_NAME",
}

interface AddCarsAction {
  type: AppActions.ADD_CARS;
  payload: Array<Car>;
}

interface SearchCarsByNameAction {
  type: AppActions.SEARCH_CARS_BY_NAME;
  payload: string;
}

export type AppReducerActions = AddCarsAction | SearchCarsByNameAction;
