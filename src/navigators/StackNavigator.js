import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopTabNavigator from './TopTabNavigator'
import ViewMessaging from '../screens/ViewMessaging'
import CreatePost from '../screens/CreatePost'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignupScreen'
const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='signupScreen' >
        <Stack.Screen options={{headerShown:false}} name="signupScreen" component={SignUpScreen} />
        <Stack.Screen options={{headerShown:false}} name="loginScreen" component={LoginScreen} />
        <Stack.Screen options={{headerShown:false}} name="createPost" component={CreatePost} />
        <Stack.Screen options={{headerShown:false}} name="topTabNavigator" component={TopTabNavigator} /> 
        <Stack.Screen options={{headerShown:false}} name="viewMessaging" component={ViewMessaging} />
    </Stack.Navigator>
  )
}

export default StackNavigator