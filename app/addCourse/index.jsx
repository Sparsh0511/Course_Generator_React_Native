import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constant/Colors'
import Button from '../../components/Shared/Button';
import GeneraterTopicsAiModel from './../../config/AiConfig'
import Prompt from './../../constant/Prompt';

export default function AddCourse() {

    const [loading, setLoading] = useState(false);
    const [userInput, setUserInput] = useState() ;
    const onGenerateTopic = async () => {
        setLoading(true)
        // Get topioc idea from AI model
        const PROMPT = userInput + Prompt.IDEA;
        const aiResponse = await GeneraterTopicsAiModel.sendMessage(PROMPT)
        const topicIdea = aiResponse.response.text();
        console.log(topicIdea)
        setLoading(false)
    }

    return (
        <View style={{
            padding: 25,
            backgroundColor: Colors.WHITE,
            flex: 1
        }} >
            <Text style={{
                fontFamily: 'jose_bold',
                fontSize: 30
            }} >Create New Course</Text>

            <Text style={{
                fontFamily: 'jose_regular',
                fontSize: 25
            }}>What you want to learn today?</Text>

            <Text style={{
                fontFamily: 'jose_regular',
                fontSize: 19,
                marginTop: 8,
                color: Colors.GRAY
            }}>What course you want to create (ex. Learn Python, Machine Learning, Digital Marketing, 10th Science Chapters etc)...?</Text>

            <TextInput onChangeText={(value)=> setUserInput(value)} placeholder='Learn Python, Learn Android Dev etc' style={styles.textInput} numberOfLines={3} multiline={true} />

            <Button text={'Generate Topic'} type='outline' onPress={()=>onGenerateTopic()} loading={loading} />

        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        height: 100,
        marginTop: 14,
        alignItems: 'flex-start',
        fontSize: 18
    }
}) 