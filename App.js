import { View, Text , SafeAreaView   } from 'react-native'
import React, { useEffect, useState , createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {WithAuthStackNavigator,WithoutAuthStackNavigator} from './src/navigators/StackNavigator'
import { NativeBaseProvider } from 'native-base'
import auth from '@react-native-firebase/auth'
export const UserContext = createContext()
const App = () => {
  const [userAuth,setUserAuth] = useState(null)
  useEffect(()=>{
    auth().onAuthStateChanged((user)=>{
      if(user){
        console.log('log')
        setUserAuth(user)
      }else{
        console.log('out')
      }
    })
  },[])
  return (
    <SafeAreaView style={{flex:1}}>
      <NativeBaseProvider>
        <NavigationContainer>
          <UserContext.Provider value={{userAuth,setUserAuth}}>
            {
              userAuth ?  <WithAuthStackNavigator/> :<WithoutAuthStackNavigator/> 
            }
          </UserContext.Provider>
        </NavigationContainer>
      </NativeBaseProvider>
      </SafeAreaView>
  )
}

export default App
