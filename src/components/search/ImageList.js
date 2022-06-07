import { StyleSheet, Image, View ,TouchableOpacity ,Text, useWindowDimensions } from 'react-native'
import React,{useState} from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import imagelists from '../../data/imagelist';
import { Avatar, Box,  HStack, Modal, VStack } from 'native-base';
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const ImageList = () => {
    const [openPostModal,setOpenPostModal] = useState(false)
    const [postData,setPostData] = useState(imagelists[0])
    function handlePostOpen(item){
        setPostData(item)
        setOpenPostModal(true)
    }
  return (
    <View style={{flex:1}} >
      <MasonryList 
        showsVerticalScrollIndicator={false}
        data={imagelists}
        keyExtractor={(item,index)=>index.toString()}
        renderItem={({item,i})=>(
            <TouchableOpacity activeOpacity={.8}  onLongPress={()=>handlePostOpen(item)} >
                {
                    i%7===0 ?<Image source={{uri:item.url+item.id+10}} style={{height:260,margin:1}} alt={item.id} /> :
                    <Image source={{uri:item.url+item.id+10}} style={{height:130,margin:1}} alt={item.id} />
                }
            </TouchableOpacity>
        )}
        numColumns={3}
      />
      <ShowPostInModal postData={postData} setPostData={setPostData} openPostModal={openPostModal} setOpenPostModal={setOpenPostModal} />
    </View>
  )
}

export default ImageList


function ShowPostInModal({openPostModal,setOpenPostModal,postData,setPostData}){
    const {height,width} = useWindowDimensions()
    return (
        <Modal _backdrop={"black"} isOpen={openPostModal} onClose={() => {setOpenPostModal(false)}}>
        <Modal.Content width={width*.85}  bg="black"
        _backdrop={{
            _dark: {
              bg: "coolGray.900"
            },
            bg: "warmGray.100"
          }}
        >
            <VStack>
                <HStack paddingVertical={10} paddingLeft={4} alignItems="center">
                    <TouchableOpacity activeOpacity={.8}>
                        <Avatar source={{uri:postData.url+postData.id*2}}  size={"sm"} >
                            AM
                        </Avatar>
                    </TouchableOpacity>
                    <VStack marginLeft={5}>
                        <TouchableOpacity activeOpacity={.8}>
                            <Text style={{color:'white',fontWeight:'700',fontSize:18}} >HackerRank</Text>
                        </TouchableOpacity>
                    </VStack>
                </HStack>
                <Box padding={1} justifyContent="center" alignItems={"center"}>
                    <Image style={{width:"100%",height:height*.50}} source={{uri:postData.url+postData.id+3}} alt={postData.title} />
                </Box> 
                <HStack  alignItems="center" justifyContent={"space-between"} paddingVertical={10} paddingHorizontal={26}>
                    <TouchableOpacity activeOpacity={.8}>
                        <Feather name='heart' color={"white"} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8}>
                        <MaterialCommunityIcons name='account-circle-outline' color={"white"} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8}>
                        <Feather name='send' color={"white"} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8}>
                        <Feather name='more-vertical' color={"white"} size={25} />
                    </TouchableOpacity>
                </HStack>
            </VStack>
        </Modal.Content>
      </Modal>
    )
}

const styles = StyleSheet.create({})