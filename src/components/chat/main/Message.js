import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, HStack, VStack , Box } from 'native-base'
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo"
import chats from "../../../data/chats";

const Message = () => {
  return (
    <VStack paddingBottom={10}>
      <HStack justifyContent={"space-between"} >
        <Text style={{color:"white",fontWeight:"700",fontSize:18}} >Messages</Text>
        <Text style={{color:"#0095F6",fontWeight:"600",fontSize:15}} >Requests</Text>
      </HStack>
      {
        chats.map((item,id)=>(
          <SingleChat seen={item.seen} active={item.active} name={item.name} dp={item.image} id={id} key={item.id} />
        ))
      }
    </VStack>
  )
}

export default Message

function SingleChat ({name,dp,id,active,seen}) {
  return (
    <TouchableOpacity activeOpacity={.8}>
      <HStack marginVertical={5} justifyContent={"space-between"} height={60} alignItems="center">
      <Avatar size={"md"} source={{uri:dp+id+60}} >
        {active && <Avatar.Badge></Avatar.Badge>}
      </Avatar>
      <Box flex={1} >
        <HStack justifyContent={"space-between"} alignItems="center">
          <VStack marginLeft={5}>
            <Text style={{fontSize:17,fontWeight:"700",color:"white"}}>{name}</Text>
            {!seen && <Text style={{fontSize:15,fontWeight:"700",color:"white"}}>9+ new messages -8h</Text>}
            {seen && <Text style={{fontSize:14,fontWeight:"700",color:"lightgrey"}}>How are you</Text>}
          </VStack>
          {!seen &&  <Entypo name='dot-single' color="#0095F6" size={40} />}
        </HStack>
      </Box>
      <TouchableOpacity  activeOpacity={.8}>
        <Feather name='camera' size={25} color="white" />
      </TouchableOpacity>
    </HStack>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})