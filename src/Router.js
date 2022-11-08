import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Category from './page/Category';
import Meals from './page/Meals';
import Detail from './page/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Category"
          component={Category}
          options={{
            title: 'Categories',
            headerTitleAlign: 'center',
            headerTintColor:'orange',
            headerTitleStyle: {color: 'orange'},
          }}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{
            title: 'Meals',
            headerTitleAlign: 'center',
            headerTintColor:'orange',
            headerTitleStyle: {color: 'orange'},
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'Detail',
            headerTitleAlign: 'center',
            headerTintColor:'orange',
            headerTitleStyle: {color: 'orange'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
