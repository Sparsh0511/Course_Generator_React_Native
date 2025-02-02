
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import Colors from './../../constant/Colors'
import { router } from 'expo-router'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../config/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import {UserDetailContext} from './../../context/UserDetailContext'

export default function signUp() {

    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {userDetail, setUserDetail} = useContext(UserDetailContext)
    const CreateNewAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then( async (resp)=>{
            const user = resp.user;
            console.log(user);
            // Save user to Database
            await SaveUser(user)

        })
        .catch(e=> {
            console.log(e.message)
        })
    }

    const SaveUser = async (user) => { 

        const data = {
            name: fullName,
            email: email,
            member: false,
            uid: user?.uid
        }

        await setDoc(doc(db, 'users', email), data)

        setUserDetail(data);
        
        // Navigate to New Screen

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


            <Text style={{fontFamily: 'jose_bold', fontSize: 30}} >Create New Account</Text>

            <TextInput style={style.textInput} placeholder='Full Name' onChangeText={(value)=>setFullName(value)} />
            <TextInput style={style.textInput} placeholder='Email' onChangeText={(value)=>setEmail(value)} />
            <TextInput style={style.textInput} secureTextEntry={true} placeholder='Password' onChangeText={(value)=>setPassword(value)} />



            <TouchableOpacity style={{
                backgroundColor: Colors.PRIMARY,
                padding: 16,
                marginTop: 28,
                borderRadius: 18,
                width: '80%',
            
            }}>
                <Text style={{color: Colors.WHITE, textAlign: 'center', fontFamily: 'jose_medium', fontSize: 18}} onPress={CreateNewAccount} >Create Account</Text>
            </TouchableOpacity>

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 5,
                marginTop: 18
            }} >
                <Text style={{fontFamily: 'jose_regular'}} >Already have an account?</Text>
                <Pressable onPress={()=> router.push('/auth/signIn')} >
                    <Text style={{color: Colors.PRIMARY, fontFamily: 'jose_regular'}} >Sign In here</Text>
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