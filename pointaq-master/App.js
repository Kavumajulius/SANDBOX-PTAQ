/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView,StatusBar } from 'react-native';
import Navigation from './src/navigation';
import colors from './src/assets/colors';


const App = () => {
  return (
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={{flex: 1, backgroundColor:colors.PRIMARY}}>
      <Navigation />
    </SafeAreaView>
  </>
  );
};

export default App;
