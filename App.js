import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';

import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import Cesta from "./src/pages/Cesta";

export default function App() {

  const [fontLoaded] = useFonts({
    'InterRegular': Inter_400Regular,
    'InterBold': Inter_700Bold,
  });

  if(!fontLoaded){
    <View/>
  }

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Cesta/>
    </SafeAreaView>
  );
}