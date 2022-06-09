import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Reels from '../screens/Reels'
import Activity from '../screens/Activity'
import Account from '../screens/Account'
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const BottomTab = createBottomTabNavigator()
const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName='account' screenOptions={{tabBarStyle:{backgroundColor:'black'}}}>
        <BottomTab.Screen options={{headerShown:false,tabBarShowLabel:false,tabBarIcon:()=>TabBarHomeIcon(27,"white")}}  name="home" component={Home} />
        <BottomTab.Screen options={{headerShown:false,tabBarShowLabel:false,tabBarIcon:()=>TabBarSearchIcon(25,"white")}} name="search" component={Search} />
        <BottomTab.Screen options={{headerShown:false,tabBarShowLabel:false,tabBarIcon:()=>TabBarReelsIcon(27,"white")}} name="reels" component={Reels} />
        <BottomTab.Screen options={{headerShown:false,tabBarShowLabel:false,tabBarIcon:()=>TabBarHeartIcon(27,"white")}} name="activity" component={Activity} />
        <BottomTab.Screen options={{headerShown:false,tabBarShowLabel:false,tabBarIcon:()=>TabBarAccountIcon(27,"white")}} name="account" component={Account} />
    </BottomTab.Navigator>
  )
}

function TabBarHomeIcon(size,color){
  return <Entypo name='home' size={size} color={color} />
}
function TabBarReelsIcon(size,color){
  return <Entypo name='folder-video' size={size} color={color} />
}
function TabBarHeartIcon(size,color){
  return <Feather name='heart' size={size} color={color} />
}
function TabBarSearchIcon(size,color){
  return <FontAwesome name='search' size={size} color={color} />
}
function TabBarAccountIcon(size,color){
  return <MaterialCommunityIcons name='account-circle' size={size} color={color} />
}

export default BottomTabNavigator