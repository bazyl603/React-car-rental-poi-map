import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { dataElement } from './types';

interface ApiContextType {
  data: dataElement[] | null,
  error: any
}

const ApiContext = createContext<any>(
  {
    data: null,
    error: {}
  } as ApiContextType
);

//const CORSREQUEST = 'https://cors-anywhere.herokuapp.com/https://android.jrotor.com/api/map?objectType=VEHICLE';

function ApiProvider({ children }: { children: ReactNode }): JSX.Element{
  const [data, setData] = useState<dataElement[] | null >();
  const [error, setError] = useState<any>();

  const get = async () => {
    try {
      let response = await axios.get('../example.json');
      if(response) {
        setData(response.data.objects);
      }
    }catch(err) {
      setError(err);
    }
  }

  useEffect(() => {
    let mounted = false;
    if(!mounted) {
      get();      
    }
    return () => {
      mounted = true;
    }
  }, []);
  
  return (
    <ApiContext.Provider value={{data, error}}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;

export function useApi() {
  return useContext(ApiContext);
}