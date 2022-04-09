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

const CORSREQUEST = 'https://cors-anywhere.herokuapp.com/';

function ApiProvider({ children }: { children: ReactNode }): JSX.Element{
  const [data, setData] = useState<dataElement[] | null >();
  const [error, setError] = useState<any>();

  const get = async () => {
    try {
      let response = await axios.get(CORSREQUEST + 'https://android.jrotor.com/api/map?objectType=VEHICLE');
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