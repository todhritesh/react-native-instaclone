import { View, Text,Image } from 'react-native'
import React from 'react'
import { HStack,Box } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import posts from '../../data/posts'
const Posts = () => {
  return (
    <>
        <HStack marginTop={5} justifyContent="space-evenly">
            <TouchableOpacity style={{borderBottomColor:"white",borderBottomWidth:1,paddingHorizontal:30,paddingVertical:10}}>
                <MaterialCommunityIcons name='grid' color={"white"} size={26} />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal:30,paddingVertical:10}}>
                <MaterialCommunityIcons name='movie-play' color={"#888888"} size={26} />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal:30,paddingVertical:10}}>
                <MaterialCommunityIcons name='play' color={"#888888"} size={29} />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingHorizontal:30,paddingVertical:10}}>
                <Ionicons name='person-circle-sharp' color={"#888888"} size={26} />
            </TouchableOpacity>
        </HStack>
        <Box flexDirection={"row"} flexWrap="wrap" padding={0} marginHorizontal={-10}>
            {posts.map((post) => (
                <TouchableOpacity>
                    <Image source={{uri:post.post + post.id + 20}} style={{width:135,height:135,marginHorizontal:1,marginVertical:1}}/>
                </TouchableOpacity>
            ))}
        </Box>
    </>
  )
}

export default Posts