import React, { createContext, useState, useEffect } from 'react';
import Router from './router/Router';
import { QueryClientProvider, QueryClient } from 'react-query';
export const LanguageContext = createContext({
  language: 'en',
  setLanguage: (language: string) => {},
});

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60000 * 25,
        cacheTime: 60000 * 30
      }
    }
  });
  const [language, setLanguage] = useState<string>('ko');

  useEffect(()=> {
    if(localStorage.getItem("언어") === "ko"){
      setLanguage("ko")
    } else {
      setLanguage("en")
    }
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <Router />
      </LanguageContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
