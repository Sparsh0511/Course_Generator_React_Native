
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Colors from './../../constant/Colors'
import { router } from 'expo-router'
export default function signUp() {

    

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

            <TextInput style={style.textInput} placeholder='Full Name' />
            <TextInput style={style.textInput} placeholder='Email' />
            <TextInput style={style.textInput} secureTextEntry={true} placeholder='Password' />



            <TouchableOpacity style={{
                backgroundColor: Colors.PRIMARY,
                padding: 16,
                marginTop: 28,
                borderRadius: 18,
                width: '80%',
            
            }}>
                <Text style={{color: Colors.WHITE, textAlign: 'center', fontFamily: 'jose_medium', fontSize: 18}} >Create Account</Text>
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