import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Box, HStack } from 'native-base'
import Ionicons from "react-native-vector-icons/Ionicons"
import {users} from "../../data/users"
import { useNavigation } from '@react-navigation/native'

export default function Header(){
    const {navigate,goBack} = useNavigation()
  return (
    <HStack height={50} justifyContent="space-between">
        <Box>
            <HStack space={7} alignItems="center">
                <TouchableOpacity onPress={()=>goBack()} activeOpacity={.8}>
                    <Ionicons name='arrow-back-sharp' size={26} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8}>
                    <HStack space={5} alignItems="center">
                        <Avatar  source={{uri:users[0].image+27}} size="30"></Avatar>
                        <Box>
                            <Text style={{color:'white',fontWeight:"700"}} >Ronaldo</Text>
                            <Text style={{color:'grey',fontWeight:"700",fontSize:12}} >@Ronaldo_23</Text>
                        </Box>
                    </HStack>
                </TouchableOpacity>
            </HStack>
        </Box>
        <Box>
            <HStack  space={5} alignItems="center">
                <TouchableOpacity activeOpacity={.8}>
                    <Ionicons name='call-outline' size={26} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8}>
                    <Ionicons name='videocam-outline' size={26} color="white"/>
                </TouchableOpacity>
            </HStack>
        </Box>
    </HStack>
  )
}