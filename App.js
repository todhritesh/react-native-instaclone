import { View, Text , SafeAreaView   } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigators/StackNavigator'
import { NativeBaseProvider } from 'native-base'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <NativeBaseProvider>
              <NavigationContainer>
                <StackNavigator/>
              </NavigationContainer>
            </NativeBaseProvider>
      </SafeAreaView>
  )
}

export default App
