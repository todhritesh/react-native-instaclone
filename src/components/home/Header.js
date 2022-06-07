import { Image } from 'react-native'
import React from 'react'
import { Box, HStack, Text } from 'native-base'
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { TouchableOpacity } from 'react-native'
const Header = () => {
  return (
   <HStack alignItems="center" height={60} paddingHorizontal={13} backgroundColor="black" justifyContent="space-between">
       <Box>
            <TouchableOpacity activeOpacity={.8} >
                <HStack space={1} >
                    <Image source={require("../../assets/images/instalogo.png")} style={{width:100,height:40,resizeMode:"contain"}} />
                    <MaterialIcons style={{alignSelf:"center"}} name='expand-more' size={25} color="white" />
                </HStack>
            </TouchableOpacity>
       </Box>
       <Box>
           <HStack space={7} >
               <TouchableOpacity  activeOpacity={.8} >
                    <Feather name='plus-square' size={25} color="white" />
               </TouchableOpacity>
               <TouchableOpacity style={{position:'relative'}} activeOpacity={.8} >
                    <AntDesign name='message1' size={25} color="white" />
                    <Text style={{position:'absolute',fontWeight:"700",color:'white',backgroundColor:'red',borderRadius:15,paddingHorizontal:4,paddingVertical:1,top:-14,right:-6}} >23</Text>
               </TouchableOpacity>
           </HStack>
       </Box>
   </HStack>
  )
}

export default Header