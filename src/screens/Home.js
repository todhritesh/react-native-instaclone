import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/post/Post'
import posts from '../data/posts'

const Home = () => {
  return (
    <ScrollView style={styles.container}>
        <Header/>
        <Stories/>
        {
          posts.map((item,i)=>(
            <Post key={i} hashTag={item.hashTag} id={item.id} likes={item.likes} account={item.account} views={item.views} profilePic={item.profilePic} post={item.post} />
          ))
        }
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
})