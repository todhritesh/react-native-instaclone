import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {HStack,Avatar, Button,Box} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UserData = ({user}) => {
  return (
    <Box>
        <HStack alignItems={"center"} marginBottom={5}>
        <View>
            <Avatar
                style={{borderColor: 'darkorange', borderWidth:2.5}}
                // marginHorizontal={20}
                marginLeft={3}
                marginTop={2}
                size={83}
                source={{uri: user.image}}>
                MR
            </Avatar>
            <Text style={{color:"white",fontSize:14,marginTop:4,textAlign:"center",fontWeight:'600'}}>{user.name}</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-evenly",flex:1,marginBottom:15}}>
            <View>
                <Text style={styles.dynamic}>{user.posts}</Text>
                <Text style={styles.static}>Posts</Text>
            </View>
            <View>
                <Text style={styles.dynamic}>{user.followers}</Text>
                <Text style={styles.static}>Followers</Text>
            </View>
            <View>
                <Text style={styles.dynamic}>{user.following}</Text>
                <Text style={styles.static}>Following</Text>
            </View>
        </View>
        </HStack>

        <TouchableOpacity activeOpacity={0.8}>
            <Button py={1.5} backgroundColor={"black"} borderWidth={1} borderColor={"#484848"}>
                <Text style={{fontSize:15,color:"white",fontWeight:'600'}}>Edit profile</Text>
            </Button>
        </TouchableOpacity>
    </Box>
  );
};

const styles = StyleSheet.create({
    dynamic:{
        fontWeight:'900',   
        color:"white",
        fontSize:20,
        textAlign:"center"
    },
    static:{
        color:"white",
        fontSize:14,
        textAlign:"center"
    }
})

export default UserData;
