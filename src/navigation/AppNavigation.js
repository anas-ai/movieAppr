
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';


const stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <stack.Navigator>
            <stack.Screen name='Home' options={{headerShown:false}} component={HomeScreen}/>
            <stack.Screen name='Movie' options={{headerShown:false}} component={MovieScreen}/>
            <stack.Screen name='Person'options={{headerShown:false}} component={PersonScreen}/>
            <stack.Screen name='Search'options={{headerShown:false}} component={SearchScreen}/>
        </stack.Navigator>
    </NavigationContainer>
    
  )
}

export default AppNavigation