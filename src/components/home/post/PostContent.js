import { StyleSheet, Text, TouchableOpacity , Image ,useWindowDimensions} from 'react-native'
import React from 'react'

const PostContent = ({post,id}) => {
  const {height,width} = useWindowDimensions()
  return (
    <TouchableOpacity activeOpacity={.8}>
      <Image source={{uri:post+id+20}} style={{width:width,height:height*.80,resizeMode:'contain'}} />
    </TouchableOpacity>
  )
}

export default PostContent

const styles = StyleSheet.create({})