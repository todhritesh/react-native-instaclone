import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/post/Post'
import posts from '../data/posts'

const Home = () => {
  return (
    <View style={styles.container}>
        <Header/>      
        <FlatList
        ListHeaderComponent={()=>(
          <Stories/>
          )}
          data = {posts}
          renderItem={({item})=>(
            <Post key={item.id} hashTag={item.hashTag} id={item.id} likes={item.likes} account={item.account} views={item.views} profilePic={item.profilePic} post={item.post} />
          )}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  }
})