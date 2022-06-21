import { StyleSheet, Text, View ,Image, Button, TextInput} from 'react-native'
import React,{useState} from 'react'
import { HStack, Input, VStack } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Yup from 'yup'
import { Formik } from 'formik'
import * as ImagePicker from "react-native-image-picker"

const validationSchema = Yup.object().shape({
    // image:Yup.mixed().required("This field is required"),
    caption:Yup.string().max(5,"Caption limit exceeded").required("This field is required")
})

const initialValues = {
    caption:""
}

const onSubmit = (values) => {
    console.log("submit value",values)
}

function Header(){
    return(
    <HStack py={1} justifyContent={"space-between"} alignItems="center">
        <HStack space={8} alignItems="center">
            <AntDesign name="arrowleft" color={"white"} size={20} />
            <Text style={{color:'white',fontWeight:'700',fontSize:25}}>
                New Post
            </Text>
        </HStack>
        <TouchableOpacity>
            <Feather name="check" color={"white"} size={30} />
        </TouchableOpacity>
    </HStack>
    )
}
  let options = {
    maxWidth: 300,
    maxHeight: 550,
    quality: 1,
    videoQuality: 'low',
    durationLimit: 30, //Video max duration in seconds
    saveToPhotos: true,
  };

  
  function PostField(){
      const [placeholder,setPlaceholder] = useState('')
      const handleImagePicker = () => {
        let options = {
            title:"select image",
            selectionLimit:0,
            
            storageOptions:{
                skipBackup:false,
                path:"images"
            }
        };
    
        ImagePicker.launchImageLibrary(options,(res) => {
          console.log(res)
          setPlaceholder(res.assets[0].uri)
        })
      }
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >

            {
                ({handleChange,handleBlur,handleSubmit,values,errors})=>(

                <VStack space={5} alignItems={'center'} >
                    <TouchableOpacity onPress={handleImagePicker} >
                        <Image style={{width:100,height:100}} source={{uri:"https://picsum.photos/200/300?random=12"}} />
                    </TouchableOpacity>
                    <View style={{width:'100%'}}>
                    <Input multiline={true} numberOfLines={4} onChangeText={handleChange('caption')} onBlur={handleBlur('caption')} value={values.caption} placeholder='Write your caption' style={{fontSize:16,color:'white',paddingLeft:10}} placeholderTextColor={'white'} />
                    {
                        errors.caption && 
                        <Text style={{color:'red'}}>
                            {errors?.caption}
                        </Text>
                    }
                    </View>
                    <Button title="submit" onPress={handleSubmit} />
                </VStack>

                )
            }

        </Formik>
    )
}

const CreatePost = () => {
  return (
    <View style={{paddingHorizontal:10, flex:1, backgroundColor:"black"}}>
        <Header />
        <PostField />
    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({})