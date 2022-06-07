import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VStack } from 'native-base'
import Header from '../components/account/Header'
import UserData from '../components/account/UserData'
import { users } from '../data/users'
import Posts from '../components/account/Posts'
// import { Header } from 'react-native/Libraries/NewAppScreen'


const Account = () => {
  return (
    <View style={styles.container}>
      <VStack paddingHorizontal={10} paddingVertical={10}>
        <Header/>
        <UserData user = {users[0]} />
        <Posts/>
      </VStack>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
})