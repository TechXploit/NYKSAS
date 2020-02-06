import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/components/navigations/Router';
import { Colors } from './src/globals/Colors';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      <Routes />
    </>
  );
};

export default App;
