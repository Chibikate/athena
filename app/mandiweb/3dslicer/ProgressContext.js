import React, { createContext, useContext, useReducer } from 'react';

const ProgressContext = createContext();

export const useProgress = () => {
  return useContext(ProgressContext);
};

const initialState = {
  currentStep: 1, // Current step/page
  totalSteps: 5, // Total number of steps/pages
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, currentStep: state.currentStep + 1 };
    case 'PREVIOUS_STEP':
      return { ...state, currentStep: state.currentStep - 1 };
    default:
      return state;
  }
};

export const ProgressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProgressContext.Provider value={{ state, dispatch }}>
      {children}
    </ProgressContext.Provider>
  );
};
