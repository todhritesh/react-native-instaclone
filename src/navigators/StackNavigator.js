import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopTabNavigator from './TopTabNavigator'
const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="topTabNavigator" component={TopTabNavigator} /> 
    </Stack.Navigator>
  )
}

export default StackNavigator