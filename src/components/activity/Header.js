import { View, Text } from 'react-native'
import React from 'react'
import { Box } from 'native-base'

const Header = () => {
  return (
    <Box>
        <Text style={{color:'white',fontWeight:'700',paddingLeft:10,paddingVertical:10,fontSize:23}} >Activity</Text>
    </Box>
  )
}

export default Header