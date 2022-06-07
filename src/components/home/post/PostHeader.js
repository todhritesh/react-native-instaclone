import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Box, HStack, VStack } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const PostHeader = ({profilePic,id}) => {
  return (
    <HStack marginVertical={15} paddingHorizontal={10} bg="green" justifyContent="space-between" alignItems="center">
        <Box>
            <HStack>
                <TouchableOpacity activeOpacity={.8}>
                    <Avatar source={{uri:profilePic+id*3}} style={{borderColor:"darkorange", borderWidth:3}} size={41} >
                        AM
                    </Avatar>
                </TouchableOpacity>
                <VStack marginLeft={5}>
                    <TouchableOpacity activeOpacity={.8}>
                        <Text style={{color:'white',fontWeight:'700',fontSize:18}} >HackerRank</Text>
                    </TouchableOpacity>
                    <Text style={{color:'white',fontWeight:'600'}} >HackerRank : Original Audio</Text>
                </VStack>
            </HStack>
        </Box>
        <Box>
            <TouchableOpacity activeOpacity={.8}>
                <MaterialIcons name='more-vert' size={25} color="white" />
            </TouchableOpacity>
        </Box>
    </HStack>
  )
}

export default PostHeader

const styles = StyleSheet.create({})