import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface ApiContextType {
  //api to type ApiContext
}

const ApiContext = createContext<any>(
  {
    get: () => {}
  } as any
);

function ApiProvider({ children }: { children: ReactNode }): JSX.Element{
  const [data, setdata] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  function get(a: string) {
    setdata(a);
  }

  const memoValue = useMemo(
    () => ({
      data,
      get
    }),
    [data]
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