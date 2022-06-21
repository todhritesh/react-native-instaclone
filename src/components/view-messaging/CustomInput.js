import React,{useState} from 'react'
import { Box, HStack, Input, Icon,Avatar, Button } from 'native-base'
import Entypo from "react-native-vector-icons/Entypo"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { TouchableOpacity } from 'react-native'


const Righticons = () => {
  return (
    <HStack space={4} paddingHorizontal={5} >
      <Feather name='mic' size={20} color="white" />
      <FontAwesome5 name={"photo-video"} size={18} color="white" />
      <MaterialCommunityIcons name={"sticker-emoji"} size={20} color="white" />
    </HStack>
  )
}

const SendButton = () => {
  return(
    <Button size={"xs"}  _text={{fontSize:15,color:'blue.500',fontWeight:'700'}} variant={"ghost"}>
      Send
    </Button>
  )
}

const CustomInput = () => {
  const [inputVal,setInputVal] = useState("")
  return (
   <HStack alignItems="center" height={60} paddingHorizontal={13} backgroundColor="black" justifyContent="space-between">
       <Box width={"100%"} >
            <Input multiline={true} numberOfLines={3} onChangeText={((val)=>setInputVal(val))} InputRightElement={<Icon as={ inputVal==""? <Righticons />:<SendButton/>} />} InputLeftElement={<Icon as={<Avatar style={{marginHorizontal:8}} size={"sm"} bg="blue.600" ><Entypo key={1} name="camera" size={17} color="white" /></Avatar>} />} borderRadius={18} focusOutlineColor="black" height={10} px={3} color="white" placeholder="Search..." width="100%" />
       </Box>
   </HStack>
  )
}

export default CustomInput