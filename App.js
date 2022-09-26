import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AIBitcoinScreen from './src/screens/AIBitcoinScreen';
import FlashListScreen from './src/screens/FlashListScreen';
import AdMobScreen from './src/screens/AdMobScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AiBitcoin"
          component={AIBitcoinScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FlashList"
          component={FlashListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AdMobscreen"
          component={AdMobScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
