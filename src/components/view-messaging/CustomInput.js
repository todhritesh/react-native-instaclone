import { Image } from 'react-native'
import React from 'react'
import { Box, HStack, Input, Text } from 'native-base'
import Entypo from "react-native-vector-icons/Entypo"
import { TouchableOpacity } from 'react-native'
const CustomInput = () => {
  return (
   <HStack alignItems="center" height={60} paddingHorizontal={13} backgroundColor="black" justifyContent="space-between">
       <Box width={"87%"} >
            <Input borderRadius={10} focusOutlineColor="black" height={9} px={3} color="white" placeholder="Search..." width="100%" />
       </Box>
       <Box>
            <TouchableOpacity  activeOpacity={.8} >
                <Entypo name='location' size={23} color="white" />
            </TouchableOpacity>
       </Box>
   </HStack>
  )
}

export default CustomInput