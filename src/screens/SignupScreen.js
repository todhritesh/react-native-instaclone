import { Image, StyleSheet, Text, useWindowDimensions, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { Button, HStack, Input, VStack } from 'native-base'
import { Formik} from 'formik'
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native'
import ShowErrorMessage from '../components/ShowErrorMessage'

const initialValues = {
    name : "",
    email:''
}

const validationSchema = Yup.object().shape({
    email:Yup.string().email('must be valid email').required('email field is required'),
    name:Yup.string().required('name field is required')
})

const SignUpScreen = () => {
    const {navigate} = useNavigation()
    const onSubmit = (values) => {
        console.log(values)
    }
    const {height,width} = useWindowDimensions()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        <Image source={require("../assets/images/logo.png")} style={{width:width*.5,height:100,resizeMode:'contain'}} />
        <Formik validateOnMount={true} initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
            {
                ({values,touched,handleSubmit,handleChange,handleBlur,errors,isValid}) => (
                <VStack space={5} px={10} width={width} alignItems={'center'}>
                    <Input onChangeText={handleChange('name')} onBlur={handleBlur('name')} placeholder='Name' />
                    {touched?.name && errors?.name && <ShowErrorMessage msg={errors?.name} />}
                    <Input onChangeText={handleChange('email')} onBlur={handleBlur('email')} placeholder='Email' />
                    {touched?.email && errors?.email && <ShowErrorMessage msg={errors?.email} />}
                    <Button onPress={handleSubmit} disabled={!isValid} width={"100%"} >Next</Button>
                    <HStack>
                        <Text style={{fontSize:12,color:'black',fontWeight:"600"}} >Already have account ? </Text>
                        <TouchableOpacity onPress={()=>navigate('loginScreen')} activeOpacity={.8}>
                            <Text style={{fontSize:12,color:'grey',fontWeight:"800"}} > Login here.</Text>
                        </TouchableOpacity>
                    </HStack>
                </VStack>
                )
            }
        </Formik>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})