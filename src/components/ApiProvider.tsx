import React, { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';

interface ApiContextType {
  //api to type ApiContext
}

const ApiContext = createContext<any>(
  {
    get: () => {}
  } as any
);

const CORSREQUEST = 'https://cors-anywhere.herokuapp.com/';

function ApiProvider({ children }: { children: ReactNode }): JSX.Element{
  const [data, setData] = useState<any | null>();
  const [error, setError] = useState<any>();

  const get = async () => {
    try {
      let response = await fetch(CORSREQUEST + 'https://android.jrotor.com/api/map?objectType=VEHICLE');
      response = await response.json();
      if(response) {
        setData(response);
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

  console.log(data);
  const memoValue = useMemo(
    () => ({
      data,
      error
    }),
    [data, error]
  );

  return (
    <ApiContext.Provider value={memoValue}>
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;

export function useApi() {
  return useContext(ApiContext);
}