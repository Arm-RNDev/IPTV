import { createStackNavigator } from '@react-navigation/stack';
import { movieNaviList } from 'app/constants';

import React from 'react';
const Stack = createStackNavigator();
export default function MovieNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}
    >
      {movieNaviList.map((it, ind) => {
        return (
          <Stack.Screen key={ind} name={it.name} component={it.screens} />
        );
      })}
    </Stack.Navigator>
  );
}
