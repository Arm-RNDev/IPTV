import { createStackNavigator } from '@react-navigation/stack';
import { stackRoutes } from '../constants/navigScreens';
const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#FFFFFF' },
      }}
    >
      {stackRoutes.map((it, ind) => {
        return (
          <Stack.Screen key={it.name} name={it.name} component={it.screens} />
        );
      })}
    </Stack.Navigator>
  );
}
