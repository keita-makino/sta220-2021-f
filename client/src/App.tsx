import React from 'react';
import './App.css';
import { Index } from './pages/Index';
import { ApolloProvider } from './ApolloProvider';
import { Provider } from '@react-spectrum/provider';
import { defaultTheme, darkTheme } from '@adobe/react-spectrum';
import { hot } from 'react-hot-loader';
import { useReactiveVar } from '@apollo/client';
import { isDarkVar } from './localState';
import dotenv from 'dotenv';

function App() {
  dotenv.config();

  const isDark = useReactiveVar(isDarkVar);
  return (
    <ApolloProvider>
      <Provider theme={isDark ? darkTheme : defaultTheme}>
        <Index />
      </Provider>
    </ApolloProvider>
  );
}

export default hot(module)(App);
