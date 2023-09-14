import React, { createContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create the provider that will wrap around your entire app in the main file (e.g., index.js or App.js)
export const AppProvider = ({ children }) => {
  const [HighlightedCountry, setHighlightedCountry] = useState([]);

  return (
    <AppContext.Provider value={{ HighlightedCountry, setHighlightedCountry }}>
      {children}
    </AppContext.Provider>
  );
};