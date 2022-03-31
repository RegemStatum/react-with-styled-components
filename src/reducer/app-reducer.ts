import { appReducerInitialState } from "../context/AppProvider";
import {
  AppActions,
  AppReducerActions,
  AppReducerState,
} from "../context/AppProviderTypes";

const reducer = (
  state = appReducerInitialState,
  action: AppReducerActions
): AppReducerState => {
  if (action.type === AppActions.SEARCH_CARS_BY_NAME) {
    console.log("search");

    const newCarsToShow = state.cars.filter((car) =>
      car.name.toLowerCase().includes(action.payload.toLowerCase())
    );
    return { ...state, carsToShow: newCarsToShow };
  }
  return { ...state };
};

export default reducer;
