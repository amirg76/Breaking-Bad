import { createContext, useState } from "react";

export const myContext = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [navToggle, setNavToggle] = useState(true);
  const [moreData, setMoreData] = useState([]);

  return (
    <myContext.Provider
      value={{ data, setData, navToggle, setNavToggle, moreData, setMoreData }}
    >
      {children}
    </myContext.Provider>
  );
}

export default ContextProvider;
