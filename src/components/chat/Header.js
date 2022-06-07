import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import { Box, HStack } from 'native-base'
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const {navigate} = useNavigation()
  return (
    <HStack height={50} justifyContent="space-between">
        <Box>
            <HStack space={7} alignItems="center">
                <TouchableOpacity onPress={()=>navigate("home")} activeOpacity={.8}>
                    <Ionicons name='arrow-back-sharp' size={26} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row'}}  activeOpacity={.8}>
                    <Text style={{color:'white' ,fontWeight:"700",fontSize:22}} >Rahul_17</Text>
                    <MaterialIcons style={{alignSelf:"center"}} name='expand-more' size={25} color="white" />
                </TouchableOpacity>
            </HStack>
        </Box>
        <Box>
            <HStack  space={4} alignItems="center">
                <TouchableOpacity activeOpacity={.8}>
                    <Ionicons name='videocam-outline' size={26} color="white"/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.8}>
                    <Entypo name='plus' size={26} color="white"/>
                </TouchableOpacity>
            </HStack>
        </Box>
    </HStack>
  )
}

export default Header