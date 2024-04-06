import React, { createContext, useState } from 'react';

export const MyContext = createContext();
const MyProvider = ( props ) => {
  const [value, setValue] = useState([]);
 
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {props.children}
    </MyContext.Provider>
  );
};
export default MyProvider