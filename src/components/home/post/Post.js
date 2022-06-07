import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VStack } from 'native-base'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'

const Post = ({account,profilePic,id,likes,post,hashTag,views}) => {
  return (
    <VStack marginVertical={10} >
        <PostHeader profilePic={profilePic} id={id} />
        <PostContent post={post} id={id} />
        <PostFooter likes={likes} views={views} account={account} hashTag={hashTag} />
    </VStack>
  )
}

export default Post

const styles = StyleSheet.create({})