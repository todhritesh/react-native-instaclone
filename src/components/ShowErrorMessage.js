import { Text, View } from 'react-native'
import React from 'react'

const ShowErrorMessage = ({msg}) => {
  return (
    <View style={{marginVertical:-16,alignSelf:'flex-start'}}>
      <Text style={{color:'red',fontSize:14,fontWeight:'500'}}>{msg}</Text>
    </View>
  )
}

export default ShowErrorMessage

