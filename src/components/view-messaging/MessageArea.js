import { View, Text , FlatList, useWindowDimensions} from 'react-native'
import React from 'react'
import data from '../../data/msg'
import { Avatar } from 'native-base'
import {users} from "../../data/users"
// import LinearGradient from "react-native-linear-gradient"

const MessageArea = () => {
  return (
    <View style={{flex:1,}} >
      {/* <FlatList 
           inverted
           data={[...data].reverse()}
           renderItem={({item})=><MessageItem uid={item.uid} msg={item.msg}/>}
           keyExtractor={(item) => item.id.toString()}
      /> */}
    </View>
  )
}

function MessageItem({msg,uid}){
  const {height,width} = useWindowDimensions()
  return (
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:uid===1?'flex-end':"flex-start",marginVertical:5}}>
      {uid !==1 && <Avatar source={{uri:users[0].image+27}} style={{marginRight:7}} size="sm" ></Avatar>}
      {/* <LinearGradient  colors={['#4c669f', '#3b5998', '#192f6a']}  > */}
        <Text style={{width:width*.50,fontSize:16,borderRadius:15,padding:10,color:'white',fontWeight:'700',backgroundColor:uid===1?'blue':'grey'}} >
          {msg}
        </Text>
      {/* </LinearGradient> */}
    </View>
  )
}

export default MessageArea