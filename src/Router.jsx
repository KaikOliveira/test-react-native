import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome/index';
import ToDoList from './pages/ToDoList/index';

const Stack = createStackNavigator();

function Router() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#039be6" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#039be6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Lista"
            component={ToDoList}
            options={{ title: 'Lista de tarefas' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Router;
