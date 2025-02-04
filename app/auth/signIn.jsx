
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, ToastAndroid, ActivityIndicator } from 'react-native'
import React, { useContext, useState } from 'react'
import Colors from './../../constant/Colors'
import { router } from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { UserDetailContext } from './../../context/UserDetailContext'


export default function signIn() {

    const [email, setEmail] = useState();
    const [password, setpassword] = useState();
    const {userDetail, setUserDetail} = useContext(UserDetailContext)

    const [loading, setLoading] = useState(false);

    const onSignInClick = () => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then( async (resp)=> {
            const user = resp.user
            console.log(user)
            await getUserDetail();
            setLoading(false);
            ToastAndroid.show('Login successful', ToastAndroid.BOTTOM)
            router.replace('/(tabs)/home')
        }).catch(e=> {
            console.log(e)
            ToastAndroid.show('Incorrect email and password', ToastAndroid.BOTTOM)
            setLoading(false);
        })
    }

    const getUserDetail = async () => {
        const result = await getDoc(doc(db, 'users', email));
        console.log(result.data())
        setUserDetail(result.data())
    }

    return (
        <View
            style={{
                display: 'flex',
                flex: 1,
                backgroundColor: Colors.WHITE,
                alignItems: 'center',
                paddingTop: 100,
                padding: 25
            }}
        >
            <Image
                style={{
                    width: 180,
                    height: 180,

                }}
                source={require('./../../assets/images/logo.png')} >
            </Image>


            <Text style={{fontFamily: 'jose_bold', fontSize: 30}} >Welcome Back</Text>

            <TextInput style={style.textInput} placeholder='Email' onChangeText={(value)=> {setEmail(value)}} />
            <TextInput style={style.textInput} secureTextEntry={true} placeholder='Password' onChangeText={(value)=> {setpassword(value)}}/>



            <TouchableOpacity
            onPress={onSignInClick}
            disabled={loading}
             style={{
                backgroundColor: Colors.PRIMARY,
                padding: 16,
                marginTop: 28,
                borderRadius: 18,
                width: '80%'
            }}>
                {!loading? 
                <Text style={{color: Colors.WHITE, textAlign: 'center', fontFamily: 'jose_medium', fontSize: 18}} >Login</Text>:

                <ActivityIndicator size={'large'} color={Colors.WHITE} />
                }
            </TouchableOpacity>

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                marginTop: 18
            }} >
                <Text style={{fontFamily: 'jose_regular'}} >Don't have an account?</Text>
                <Pressable onPress={()=> router.push('/auth/signUp')} >
                    <Text style={{color: Colors.PRIMARY, fontFamily: 'jose_regular'}} >Sign Up here</Text>
                </Pressable>
            </View> 
                      
        </View>
    )
}

const style = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderRadius: 18,
        width: '100%',
        padding: 20,
        marginTop: 20,
        fontSize: 14,
        height: 60
    }
})