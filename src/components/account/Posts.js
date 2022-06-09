import { View, Text,Image ,FlatList,useWindowDimensions} from 'react-native'
import React from 'react'
import { HStack,Box } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import posts from '../../data/posts'
const Posts = () => {
    const {height,width} = useWindowDimensions()
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
        <Box width={width} marginHorizontal={-10}>
            <FlatList
            data={posts}
            renderItem={({item})=>(
                <Box p={.5} width={"33%"}>
                    <Image  source={{uri:item.post + item.post.id + 20}} style={{height:135,width:"100%",marginHorizontal:1,marginVertical:1}}/>
                </Box>
            )}
            numColumns={3}
            />
        </Box>
    </>
  )
}

export default Posts