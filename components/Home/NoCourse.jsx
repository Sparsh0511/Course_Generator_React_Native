import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '../Shared/Button'
import { router } from 'expo-router'

export default function NoCourse() {

    return (
        <View  style={{
            marginTop: 40,
            display: 'flex',
            alignItems: 'center'
        }}  >
            <Image  source={require('./../../assets/images/book.png')} style={{
                width: 200,
                height: 200
            }} />

            <Text style={{
                fontFamily: 'jose_bold',
                fontSize: 25,
                textAlign: 'center'
            }} >You don't have any course</Text>

            <Button text={"+ Creater New Course"} onPress={()=>router.push('/addCourse')} />
            <Button text={"+ Explore existing courses"} type='outline'  />
        </View>
    )
}