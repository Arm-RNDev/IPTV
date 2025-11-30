import { createStackNavigator } from '@react-navigation/stack';
import { videoNaviLIst } from 'app/constants';

import React from 'react';
const Stack = createStackNavigator();
export default function VideoNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FFF' },
      }}
    >
      {videoNaviLIst.map((it, ind) => {
        return (
          <Stack.Screen key={ind} name={it.name} component={it.screens} />
        );
      })}
    </Stack.Navigator>
  );
}
