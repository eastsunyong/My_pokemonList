import React, { createContext, useState } from 'react';
import Router from './router/Router';
import { QueryClientProvider, QueryClient } from 'react-query';
 export const LanguageContext = createContext({
    language: 'ko',
    setLanguage: (language: string) => {}
  })

const App = () => {
  const queryClient = new QueryClient();
  const [language, setLanguage] = useState<string>('ko')
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContext.Provider value={{ language, setLanguage}}>
        <Router />
      </LanguageContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
