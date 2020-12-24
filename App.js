import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/containers/AddJobs/HomeScreen';
import SubsNeededScreen from './src/containers/AddJobs/SubsNeededScreen';
import LocationScreen from './src/containers/AddJobs/LocationScreen';
import DescriptionScreen from './src/containers/AddJobs/DescriptionScreen';
import FilesScreen from './src/containers/AddJobs/FilesScreen';
import MaxBidScreen from './src/containers/AddJobs/MaxBidScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="SubsNeeded"
          component={SubsNeededScreen}
          options={{ title: 'Subs Needed' }}
        />
        <Stack.Screen
          name="Location"
          component={LocationScreen}
          options={{ title: 'Location' }}
        />
        <Stack.Screen
          name="Description"
          component={DescriptionScreen}
          options={{ title: 'Description' }}
        />
        <Stack.Screen
          name="Files"
          component={FilesScreen}
          options={{ title: 'Files' }}
        />
        <Stack.Screen
          name="MaxBid"
          component={MaxBidScreen}
          options={{ title: 'Maximum Bid' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
