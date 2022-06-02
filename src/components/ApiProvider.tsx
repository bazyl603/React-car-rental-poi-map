import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { dataElement } from './types';
import { json } from './example';

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

//const CORSREQUEST = 'https://cors-anywhere.herokuapp.com';

function ApiProvider({ children }: { children: ReactNode }): JSX.Element{
  const [data, setData] = useState<dataElement[] | null >();
  const [error, setError] = useState<any>();

  const get = async () => {
    try {
      //let response = await axios.get(CORSREQUEST);
      let response = json
      if(response) {
        //setData(response.data.objects);
        setData(response.objects);
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
