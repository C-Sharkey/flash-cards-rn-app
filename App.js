import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { View } from 'react-native'
import Header from './components/Header';
import TabBar from './components/TabBar';
import Splash from './screens/Splash';

export default function App () {

  return (
    <PaperProvider>
      <Header />
      <TabBar />
    </PaperProvider>
  );
};

