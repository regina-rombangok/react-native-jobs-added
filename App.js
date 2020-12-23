import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/containers/AddJobs/HomeScreen';
import SubsNeeded from './src/containers/AddJobs/SubsNeeded';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="SubsNeeded"
          component={SubsNeeded}
          options={{ title: 'Subs Needed' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;