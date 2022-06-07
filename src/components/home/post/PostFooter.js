import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {VStack } from 'native-base'
import FooterAction from './FooterAction'
import FooterContent from './FooterContent'

const PostFooter = ({likes,hashTag,views,account}) => {
  return (
    <VStack paddingHorizontal={10} paddingVertical={15} >
      <FooterAction/>
      <FooterContent  likes={likes} views={views} account={account} hashTag={hashTag} />
    </VStack>
  )
}

export default PostFooter

const styles = StyleSheet.create({})