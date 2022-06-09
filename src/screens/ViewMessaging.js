import { View} from 'react-native'
import React from 'react'
import {VStack } from 'native-base'
import Header from '../components/view-messaging/Header'
import MessageArea from '../components/view-messaging/MessageArea'
import CustomInput from '../components/view-messaging/CustomInput'
const ViewMessaging = () => {
  return (
      <VStack style={{backgroundColor:'black',flex:1}}  paddingHorizontal={10} paddingVertical={10}>
        <Header/>
        <MessageArea/>
        <CustomInput/>
      </VStack>
  )
}




export default ViewMessaging