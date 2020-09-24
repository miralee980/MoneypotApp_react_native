/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LogoScreen from './screens/Logo/index.android';
import IntroScreen from './screens/Intro/index.android';
import HomeScreen from './screens/Home/index.android';
import PotListScreen from './screens/PotList/index.android';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
};

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Logo"
          component={LogoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PotList"
          component={PotListScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
