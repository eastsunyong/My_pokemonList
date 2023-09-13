import React from 'react';
import Router from './router/Router';
import { QueryClientProvider, QueryClient } from 'react-query';

const App = () => {
  const queryClient = new QueryClient()
  return (
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
  );
}

export default App;
