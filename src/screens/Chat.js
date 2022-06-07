import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VStack } from 'native-base'
import Header from '../components/chat/Header'
import Main from '../components/chat/main/Main'

const Chat = () => {
  return (
    <View style={styles.container}>
      <VStack paddingHorizontal={10} paddingVertical={10}>
        <Header/>
        <Main/>
      </VStack>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
})