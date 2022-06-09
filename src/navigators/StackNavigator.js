import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopTabNavigator from './TopTabNavigator'
import ViewMessaging from '../screens/ViewMessaging'
const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='topTabNavigation' >
        <Stack.Screen options={{headerShown:false}} name="topTabNavigator" component={TopTabNavigator} /> 
        <Stack.Screen options={{headerShown:false}} name="viewMessaging" component={ViewMessaging} />
    </Stack.Navigator>
  )
}

export default StackNavigator