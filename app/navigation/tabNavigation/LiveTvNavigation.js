import { createStackNavigator } from '@react-navigation/stack';
import { liveTvNaviList } from 'app/constants';

import React from 'react';
const Stack = createStackNavigator();
export default function LiveTvNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, 
      }}
    >
      {liveTvNaviList.map((it, ind) => {
        return <Stack.Screen key={ind} name={it.name} component={it.screens} />;
      })}
    </Stack.Navigator>
  );
}
