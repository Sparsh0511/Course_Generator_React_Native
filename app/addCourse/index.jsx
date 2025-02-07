import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import Colors from '../../constant/Colors'
import Button from '../../components/Shared/Button';
import { GeneraterTopicsAiModel, GeneraterCourseAiModel } from './../../config/AiConfig'
import Prompt from './../../constant/Prompt';
import { db } from './../../config/firebaseConfig'
import { UserDetailContext } from './../../context/UserDetailContext'
import { router } from 'expo-router';
import { doc, setDoc } from 'firebase/firestore';

export default function AddCourse() {
    const [loading, setLoading] = useState(false);
    const [userInput, setUserInput] = useState();
    const [topics, setTopics] = useState([]);
    const [selectedTopics, setSelectedTopics] = useState([]);
    const { userDetail, setUserDetail } = useContext(UserDetailContext);
    const onGenerateTopic = async () => {
        setLoading(true);
        const PROMPT = userInput + Prompt.IDEA;
        console.log('Prompt = ', PROMPT);

        const aiResponse = await GeneraterTopicsAiModel.sendMessage(PROMPT);
        console.log("Message sent")
        const topicIdea = JSON.parse(aiResponse.response.text());
        console.log(topicIdea);
        setTopics(topicIdea?.course_titles);
        setLoading(false);
    }

    const onTopicSelect = (topic) => {
        const isAlreadySelected = selectedTopics.find((item) => item == topic);
        if (!isAlreadySelected) {
            setSelectedTopics(prev => [...prev, topic])
        }
        else {
            const topics = selectedTopics.filter(item => item !== topic);
            setSelectedTopics(topics);
        }
    }

    const isTopicSelected = (topic) => {
        return selectedTopics.includes(topic);
    }


    const onGenerateCourse = async () => {
        setLoading(true);
        const PROMPT = selectedTopics + Prompt.COURSE;
        try {
            const aiResponse = await GeneraterCourseAiModel.sendMessage(PROMPT);
            const resp = JSON.parse(aiResponse.response.text());
            const courses = resp.courses;
            console.log(courses);
            // Save course info to database
            courses?.forEach(async (course) => {
                await setDoc(doc(db, 'courses', Date.now().toString()), {
                    ...course,
                    createdOn: new Date(),
                    createdBy: userDetail?.email
                })
            })
            router.push('/(tabs)/home')
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <ScrollView style={{ backgroundColor: Colors.WHITE, flex: 1 }} contentContainerStyle={{ padding: 25 }} scrollEnabled={true} horizontal={false}>
            <Text style={{ fontFamily: 'jose_bold', fontSize: 30 }}>Create New Course</Text>
            <Text style={{ fontFamily: 'jose_regular', fontSize: 25 }}>What do you want to learn today?</Text>
            <Text style={{ fontFamily: 'jose_regular', fontSize: 19, marginTop: 8, color: Colors.GRAY }}>
                What course do you want to create (ex. Learn Python, Machine Learning, Digital Marketing, 10th Science Chapters etc)...?
            </Text>

            <TextInput
                onChangeText={(value) => setUserInput(value)}
                placeholder='Learn Python, Learn Android Dev etc'
                style={styles.textInput}
                numberOfLines={3}
                multiline={true}
            />

            <Button text={'Generate Topic'} type='outline' onPress={onGenerateTopic} loading={loading} />

            <View style={{ marginTop: 15, marginBottom: 15 }}>
                <Text style={{ fontFamily: 'jose_regular', fontSize: 20 }}>Select all topics which you want to add in the course</Text>

                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 6 }}>
                    {topics.map((item, index) => (
                        <Pressable key={index} onPress={() => onTopicSelect(item)}>
                            <Text style={{
                                padding: 7,
                                borderWidth: 1.4,
                                borderRadius: 99,
                                paddingHorizontal: 15,
                                backgroundColor: isTopicSelected(item) ? Colors.PRIMARY : null,
                                color: isTopicSelected(item) ? Colors.WHITE : Colors.PRIMARY
                            }}>
                                {item}
                            </Text>
                        </Pressable>
                    ))}
                </View>
            </View>

            {selectedTopics.length > 0 && (
                <Button text='Generate Course' onPress={() => onGenerateCourse()} loading={loading} />
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    textInput: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        height: 100,
        marginTop: 14,
        fontSize: 18
    }
});
