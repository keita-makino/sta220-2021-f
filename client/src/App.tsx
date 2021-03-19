import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Index } from './pages/Index';
import { ApolloProvider } from './ApolloProvider';
import { Provider } from '@react-spectrum/provider';
import { defaultTheme, darkTheme } from '@adobe/react-spectrum';
import { hot } from 'react-hot-loader';
import { useReactiveVar } from '@apollo/client';
import { isDarkVar } from './localState';

function App() {
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
