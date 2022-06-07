import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import {  VStack } from 'native-base'
import Header from '../components/activity/Header'
import { PostLiked, RequestItem, Requests } from '../components/activity/All'

const Activity = () => {
  return (
    <View style={styles.container}>
          <FlatList
      ListHeaderComponent={()=>(
      <VStack space={5} paddingVertical={5} paddingHorizontal={10} style={styles.container}>
        <Header/>
        <Requests/>
        <VStack space={3}>
          <Text style={{color:'white',fontWeight:'700',fontSize:17}} >This Week</Text>
          <RequestItem/>
          <PostLiked/>
        </VStack>
        <VStack space={3}>
          <Text style={{color:'white',fontWeight:'700',fontSize:17}} >This MOnth</Text>
          <PostLiked/>
          <RequestItem/>
          <PostLiked/>
          <PostLiked/>
          <PostLiked/>
          <RequestItem/>
          <PostLiked/>
        </VStack>
    </VStack>
    )}
    />
    </View>
  )
}

export default Activity

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
})