import { StyleSheet, Text, TouchableOpacity ,FlatList} from 'react-native'
import React from 'react'
import { Avatar, Box, VStack } from 'native-base'
import { users } from '../../data/users'

const Stories = () => {
  return (
      <Box>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={users}
            renderItem={({index,item})=> (
                <TouchableOpacity activeOpacity={.8}>
                    <VStack space={1} alignItems="center">
                        <Avatar style={{ borderColor:"darkorange",borderWidth:4}} marginHorizontal={10} size={75} source={{uri: item.image+String(index+1)}}>
                            MR
                        </Avatar>
                        <Text style={{color:'white',fontWeight:"700",}} >{item.name.length>6?item.name.slice(0,6)+"...":item.name}</Text>
                    </VStack>
                </TouchableOpacity>
            )}
            />
      </Box>
  )
}

export default Stories

const styles = StyleSheet.create({})