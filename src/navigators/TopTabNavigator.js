import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chat from '../screens/Chat'
import BottomTabNavigator from './BottomTabNavigator'
const TopTab = createMaterialTopTabNavigator()
const TopTabNavigator = () => {
  return (
    <TopTab.Navigator initialRouteName='chat'tabBar={()=>null} >
        <TopTab.Screen  component={BottomTabNavigator} name="bottomTabNavigator"/>
        <TopTab.Screen  component={Chat} name="chat"/>
    </TopTab.Navigator>
  )
}

export default TopTabNavigator