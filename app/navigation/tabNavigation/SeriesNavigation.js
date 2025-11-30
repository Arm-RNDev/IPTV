import { createStackNavigator } from '@react-navigation/stack';
import { seriesNaviList } from 'app/constants';

import React from 'react';
const Stack = createStackNavigator();
export default function SeriesNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {seriesNaviList.map((it, ind) => {
        return <Stack.Screen key={ind} name={it.name} component={it.screens} />;
      })}
    </Stack.Navigator>
  );
}
