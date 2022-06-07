import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Box, HStack } from 'native-base'
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const FooterAction = () => {
  return (
    <HStack justifyContent="space-between" alignItems="center">
        <Box>
            <HStack alignItems="center" justifyContent="center" space={4}>
                <TouchableOpacity activeOpacity={.8}>
                    <Feather name="heart" size={25} color="white" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8}>
                    <FontAwesome name="comment-o" size={22} color="white" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8}>
                    <Feather name="send" size={23} color="white" />
                </TouchableOpacity>
            </HStack>
        </Box>
        <Box>
            <HStack  space={2}>
                <TouchableOpacity activeOpacity={.8}>
                    <Feather name="bookmark" size={25} color="white" />
                </TouchableOpacity>
            </HStack>
        </Box>
    </HStack>
  )
}

export default FooterAction

const styles = StyleSheet.create({})