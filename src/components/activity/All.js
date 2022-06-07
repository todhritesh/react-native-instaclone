import { Image, Text , useWindowDimensions } from 'react-native'
import React from 'react'
import { Avatar, Box, Button, HStack, VStack } from 'native-base'
import {users} from "../../data/users";

export function Requests(){
    return (
        <HStack space={6} alignItems="center" >
            <Box position={'relative'}>
                <Avatar size={38}  source={{uri:users[0].image+77}}>
                </Avatar>
                <Text style={{color:'white',backgroundColor:'red',fontSize:12,paddingVertical:3,paddingHorizontal:4,textAlign:'center',textAlignVertical:'center',borderRadius:10,fontWeight:"600",position:"absolute",right:-3}} >45</Text>
            </Box>
            <VStack>
                <Text style={{color:'white',fontWeight:"600",fontSize:15}}>Follow requests</Text>
                <Text style={{color:'grey',fontWeight:"600",fontSize:13}}>Approve or ignore requests</Text>
            </VStack>
        </HStack>
    )
}


export function RequestItem(){
    const {height,width} = useWindowDimensions()
    return (
        <HStack space={6} alignItems="center" justifyContent={"space-evenly"}>
            <Box position={'relative'}>
                <Avatar size={38} source={{uri:users[0].image+77}}>
                </Avatar>
            </Box>
            <VStack width={width*.35}>
                <Text style={{color:'white',fontWeight:"600",fontSize:15}}>xyz_@123</Text>
                <Text style={{color:'lightgrey',fontWeight:"600",fontSize:13}}>Requested to follow you <Text style={{color:'grey'}} > 5d</Text></Text>
            </VStack>
            <HStack space={.5}>
                <Button size={"xs"} >
                    <Text style={{color:"white",fontSize:10}}>Confirm</Text>
                </Button>
                <Button size={"xs"} variant={"outline"}>
                    <Text style={{color:"white",fontSize:11}}>Delete</Text>
                </Button>
            </HStack>
        </HStack>
    )
}


export function PostLiked(){
    const {height,width} = useWindowDimensions()
    return (
        <HStack paddingHorizontal={5} alignItems="center" justifyContent={"space-between"}>
            <Avatar size={38}  source={{uri:users[0].image+77}}></Avatar>
            <Box width={width*.55} >
                <Text style={{color:'white',fontWeight:"600",fontSize:15}}>xyz_@123{" "}
                <Text style={{color:'lightgrey',fontWeight:"600",fontSize:14}}>Requested to follow you <Text style={{color:'grey'}} > 5d</Text></Text>
                </Text>
            </Box>
            <Box >
                <Image  source={{uri:users[0].image+27}} style={{width:40,height:40}} />
            </Box>
        </HStack>
    )
}