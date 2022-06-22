import { View, Text,TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import { HStack,Box, Button } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../../App'

const Header = () => {
    const {userAuth,setUserAuth} = useContext(UserContext)
    const {navigate} = useNavigation()
    function handleSingout(){
        auth().signOut().then(()=>{setUserAuth(null)}).catch(err=>console.log(err))
    }
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
                <Button onPress={()=>handleSingout()} rightIcon={<MaterialIcons name="logout" color="white" size={20} />} colorScheme={'danger'} size="xs" >Signout</Button>
            </HStack>
        </Box>
    </HStack>
  )
}

export default Header