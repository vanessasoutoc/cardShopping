import 'react-native-gesture-handler';
import React from 'react';
import Dashboard from '../../pages/dashboard/dashboard';
import { createStackNavigator } from '@react-navigation/stack';
import Restaurants from '../../pages/restaurants/restaurants';
import Home from '../../pages/home/home';
import Products from '../../pages/products/products';
import Card from '../../pages/card/card';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Restaurantes" component={Restaurants} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Card" component={Card} />
      </Stack.Navigator>
  );
}

export { StackNavigator }
