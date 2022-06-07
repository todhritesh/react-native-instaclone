import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import { VStack } from 'native-base'
import Search from './Search'
import Active from './Active'
import Message from './Message'

const Main = () => {
  return (
    <ScrollView>
      <VStack>
          <Search/>
          <Active/>
          <Message/>
      </VStack>
    </ScrollView>
  )
}

export default Main

const styles = StyleSheet.create({})