import { StyleSheet, Text, TouchableOpacity ,FlatList} from 'react-native'
import React from 'react'
import { Avatar, Box, VStack } from 'native-base'
import { users } from '../../../data/users'

const Active = () => {
  return (
      <Box marginVertical={15} >
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={users}
            renderItem={({index,item})=> (
                <TouchableOpacity activeOpacity={.8}>
                    <VStack space={1} alignItems="center">
                        <Avatar position="relative" marginHorizontal={10} size="lg" source={{uri: item.image+String(index+1)}}>
                            MR
                            <Avatar.Badge bg="green.500" />
                        </Avatar>
                        <Text style={{color:'white',fontWeight:"700",}} >{item.name.length>6?item.name.slice(0,6)+"...":item.name}</Text>
                    </VStack>
                </TouchableOpacity>
            )}
            />
      </Box>
  )
}

export default Active

const styles = StyleSheet.create({})