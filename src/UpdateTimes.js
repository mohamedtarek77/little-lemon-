import { useReducer, createContext, useMemo } from "react";

export const TimesContext = createContext();
export const ACTIONS = {};
const reducer = (state, action) => {
  if (action.type === "02/02/2023") return { value: state.value };
//   if (action.type === "03/02/2023") return { time2: state.time1 };
//   if (action.type === "04/02/2023") return { time3: state.time1 };
  else return state;
};

const availableTimes = {
  value: ["18:00pm", "19:00pm", "20:00pm"],
//   time2: ["18:00pm", "19:00pm", "20:00pm"],
//   time3: ["18:00pm", "19:00pm", "20:00pm"],
};
export const TimesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, availableTimes);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <TimesContext.Provider value={contextValue}>
      {children}
    </TimesContext.Provider>
  );
};
