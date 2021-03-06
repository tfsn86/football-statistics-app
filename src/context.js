import React, { useContext } from 'react';
import { useFetch } from './custom-hooks/useFetch';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const { loading, data, allPlayersData, shotsOnGoalData } = useFetch();

  return (
    <AppContext.Provider
      value={{
        loading,
        data,
        allPlayersData,
        shotsOnGoalData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
