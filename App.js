import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';

import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import Cesta from './src/pages/Cesta';
import mock from './src/mocks/cesta';

export default function App() {

  const [fontLoaded] = useFonts({
    "InterRegular": Inter_400Regular,
    "InterBold": Inter_700Bold,
  });

  if(!fontLoaded){
    return <View/>;
  }

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}