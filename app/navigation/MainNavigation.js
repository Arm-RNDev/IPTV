import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import TabNavigation from './tabNavigation/TabNavigation';
const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={'StackNavigation'} component={StackNavigation} />
        <Stack.Screen name={'TabNavigation'} component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
