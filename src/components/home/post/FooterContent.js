import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VStack } from 'native-base'

const FooterContent = ({likes,views,account,hashTag}) => {
  return (
    <VStack marginTop={3} space={1} >
      <Text style={styles.fontStyling} >{likes} Likes</Text>
      <Text style={styles.fontStyling} >{views} views</Text>
      <Text style={[styles.fontStyling,{fontSize:18}]} >{account} : <Text style={[styles.fontStyling,{color:'lightgrey'}]}>This is caption of post ...</Text></Text>
      <Text style={styles.fontStyling} > {hashTag}</Text>
    </VStack>
  )
}

export default FooterContent

const styles = StyleSheet.create({
  fontStyling:{
    color:'white',
    fontWeight:"700",
    fontSize:16
  }
})