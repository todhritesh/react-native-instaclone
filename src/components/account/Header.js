import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { HStack,Box } from 'native-base'
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  return (
    <HStack height={50} justifyContent="space-between">
        <Box>
            <HStack space={7} alignItems="center">
                <TouchableOpacity style={{flexDirection:'row'}}  activeOpacity={.8}>
                    <Text style={{color:'white' ,fontWeight:"700",fontSize:22}} >Rahul_17</Text>
                    <MaterialIcons style={{alignSelf:"center"}} name='expand-more' size={25} color="white" />
                </TouchableOpacity>
            </HStack>
        </Box>
        <Box>
            <HStack  space={4} alignItems="center">
                <TouchableOpacity activeOpacity={.8} style={{marginTop:4}}>
                    <FontAwesome name='plus-square-o' size={28} color="white"/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.8}>
                    <SimpleLineIcons name='chart' size={24} color="white"/>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.8} >
                    <Ionicons name='menu-sharp' size={35} color="white"/>
                </TouchableOpacity>
            </HStack>
        </Box>
    </HStack>
  )
}

export default Header