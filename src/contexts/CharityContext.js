import React, { createContext, useState } from 'react';

export const CharityContext = createContext();

export const CharityProvider = ({ children }) => {
  const [charity, setCharity] = useState(null);

  return (
    <CharityContext.Provider value={{ charity, setCharity }}>
      {children}
    </CharityContext.Provider>
  );
};
