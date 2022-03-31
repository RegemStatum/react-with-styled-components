import React, { FC, useContext, useReducer } from "react";
import reducer from "../reducer/app-reducer";
import { AppActions, AppReducerState } from "./AppProviderTypes";

export const appReducerInitialState: AppReducerState = {
  cars: [
    { name: "Bentley", speed: 30, passengers: ["Vitya", "Sasha", "Petya"] },
    { name: "BMW", speed: 60, passengers: ["Vitya", "Sasha", "Petya"] },
    { name: "Volkswagen", speed: 50, passengers: ["Vitya", "Sasha", "Petya"] },
  ],
  carsToShow: [
    { name: "Bentley", speed: 30, passengers: ["Vitya", "Sasha", "Petya"] },
    { name: "BMW", speed: 60, passengers: ["Vitya", "Sasha", "Petya"] },
    { name: "Volkswagen", speed: 50, passengers: ["Vitya", "Sasha", "Petya"] },
  ],
};

const appContextInitialState = {
  ...appReducerInitialState,
  searchCarsByName: (name: string) => {},
};

const AppContext = React.createContext(appContextInitialState);

const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, appReducerInitialState);

  function searchCarsByName(name: string) {
    console.log(name);
    dispatch({ type: AppActions.SEARCH_CARS_BY_NAME, payload: name });
  }

  return (
    <AppContext.Provider
      value={{
        cars: state.cars,
        carsToShow: state.carsToShow,
        searchCarsByName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
