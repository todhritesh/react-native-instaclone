import React,{useState,useEffect} from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chat from '../screens/Chat'
import BottomTabNavigator from './BottomTabNavigator'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
const TopTab = createMaterialTopTabNavigator()
const TopTabNavigator = () => {
  const[page,setPage] = useState(0)
  return (
    <TopTab.Navigator initialRouteName='bottomTabNavigator'tabBar={()=>null} >
        <TopTab.Screen
        options={({route}) => ({
         tabBarStyle: ((route) => {
           const routename = getFocusedRouteNameFromRoute(route)
            if (routename === 'home' || routename === undefined) {
                useEffect(() => {
                    setPage(1)
                }, [routename])
            }
            else {
                useEffect(() => {
                    setPage(0)
                }, [routename])
            }
        })(route),
    })}
       
        component={BottomTabNavigator} name="bottomTabNavigator"/>
      {
        page === 1 ? <TopTab.Screen  component={Chat} name="chat"/> : null
      }
    </TopTab.Navigator>
  )
}

export default TopTabNavigator