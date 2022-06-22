import { Image, StyleSheet, Text, useWindowDimensions, View ,TouchableOpacity} from 'react-native'
import React,{useContext} from 'react'
import { Button, HStack, Input, VStack } from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import {Formik} from 'formik'
import * as Yup from 'yup'
import ShowErrorMessage from '../components/ShowErrorMessage'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { UserContext } from '../../App'

const LoginScreen = () => {
    const {userAuth,setUserAuth} = useContext(UserContext)
    const {navigate} = useNavigation()

    const handleLogin = (email,password) => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('user logged in');
            setUserAuth(user)
        })
        .catch(error => {
            console.log(error)
            if (error.code === 'auth/wrong-password') {
            console.log('Wrong password');
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }
        });
    }

    const onSubmit = (values) => {
        console.log(values)
        handleLogin(values.email,values.password)
    }
    const validationSchema = Yup.object().shape({
        email:Yup.string().email("must be a valid email").required("email is required"),
        password:Yup.string().min(6,"password must be atleast 6 characters").required('password field is required')
    })
    const initialValues = {
        email:'',
        password:''
    }
    const {height,width} = useWindowDimensions()
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        <Image source={require("../assets/images/logo.png")} style={{width:width*.5,height:100,resizeMode:'contain'}} />
        <Formik validateOnMount={true} initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
            {
                ({values,errors,touched,isValid,handleSubmit,handleBlur,handleChange}) => (
                <VStack space={5} px={10} width={width} alignItems={'center'}>
                    <Input onChangeText={handleChange('email')} onBlur={handleBlur('email')} placeholder='Phone number,email address or username' />
                    {touched?.email && errors?.email && <ShowErrorMessage msg={errors?.email} />}
                    <Input onChangeText={handleChange('password')} onBlur={handleBlur('password')} placeholder='Password' />
                    {touched?.password && errors?.password && <ShowErrorMessage msg={errors?.password} />}
                    <Button disabled={!isValid} onPress={handleSubmit} width={"100%"} >Login</Button>
                    <Text style={{fontSize:12,color:'black',fontWeight:"600"}} >Forgotten your login details ? 
                        <Text style={{fontSize:12,color:'grey',fontWeight:"600"}} > Get help with logging in.</Text>
                    </Text>
                    <HStack>
                        <Text style={{fontSize:12,color:'black',fontWeight:"600"}} >Don't have account ? </Text>
                        <TouchableOpacity onPress={()=>navigate('signupScreen')} activeOpacity={.8}>
                            <Text style={{fontSize:12,color:'grey',fontWeight:"800"}} > Signup here.</Text>
                        </TouchableOpacity>
                    </HStack>
                    <View style={{borderTopColor:'black',marginVertical:20,borderTopWidth:1,zIndex:999,width:"100%"}} >
                        <Text style={{position:'absolute',top:-15,right:"46%",color:'black',backgroundColor:'#f2f2f2',zIndex:1000,fontSize:20,fontWeight:"700"}} >OR</Text>
                    </View>
                    <HStack space={1} justifyContent="center" alignItems={'center'}>
                        <Entypo name='facebook-with-circle' size={24} color="#0891b2" />
                        <Text>Login in with facebook</Text>
                    </HStack>
                </VStack>
                )
            }

        </Formik>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})