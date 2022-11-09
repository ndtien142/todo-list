import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import storeWTS from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();
const rootDom: HTMLElement | null = document.getElementById('root');

render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={storeWTS}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  rootDom
);
