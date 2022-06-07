import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VStack } from 'native-base'
import Header from '../components/search/Header';
import ImageList from '../components/search/ImageList';


const Search = () => {
  return (
    <VStack style={styles.container}>
      <Header/>
      <ImageList/>
    </VStack>
  )
}

export default Search

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
})