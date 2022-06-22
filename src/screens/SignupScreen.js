import { Image, StyleSheet, Text, useWindowDimensions, View , TouchableOpacity} from 'react-native'
import React,{useContext} from 'react'
import { Button, HStack, Input, VStack } from 'native-base'
import { Formik} from 'formik'
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native'
import ShowErrorMessage from '../components/ShowErrorMessage'
import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"
import { UserContext } from '../../App'

const initialValues = {
    name : "",
    email:'',
    password:''
}

const validationSchema = Yup.object().shape({
    email:Yup.string().email('must be valid email').required('email field is required'),
    name:Yup.string().required('name field is required'),
    password:Yup.string().min(6,"password must be of 6 characters").required('name field is required')
})

const SignUpScreen = () => {
    const {userAuth,setUserAuth} = useContext(UserContext)
    const {navigate} = useNavigation()
    const handleSignup = (email,password,name) => {
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('User account created & signed in!');
            setUserAuth(user)
            firestore().collection('users').add({
                user_uid:user.user.uid,
                name,
            })
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        });
    }

    const onSubmit = (values) => {
        console.log("onsubmit",values)
        handleSignup(values.email,values.password,values.name)
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
                    <Input onChangeText={handleChange('password')} onBlur={handleBlur('password')} placeholder='Password' />
                    {touched?.password && errors?.password && <ShowErrorMessage msg={errors?.password} />}
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