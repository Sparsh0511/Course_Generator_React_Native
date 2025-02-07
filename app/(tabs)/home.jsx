import { View, Text, FlatList, Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from './../../components/Home/Header'
import Colors from './../../constant/Colors'
import NoCourse from '../../components/Home/NoCourse'
import { db } from './../../config/firebaseConfig'
import { UserDetailContext } from './../../context/UserDetailContext'
import { query, collection, getDocs, where } from 'firebase/firestore'
import CourseList from '../../components/Home/CourseList'
import PracticeSection from '../../components/Home/PracticeSection'
import CourseProgress from '../../components/Home/CourseProgress'


export default function Home() {

    const [courseList, setCourseList] = useState([]);
    const { userDetail, setUserDetail } = useContext(UserDetailContext);


    useEffect(() => {
        userDetail && GetCourseList();
    }, [userDetail])

    const GetCourseList = async () => {
        try {
            setCourseList([]);
            const q = query(collection(db, 'courses'), where("createdBy", '==', userDetail?.email));
            const querySnapshot = await getDocs(q)

            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                setCourseList(prev => [...prev, doc.data()])
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <FlatList
            data={[]}
            ListHeaderComponent={

                <View style={{
                    padding: 25,
                    paddingTop: Platform.OS == 'ios' && 45,
                    flex: 1,
                    backgroundColor: Colors.WHITE
                }} >
                    <Header />
                    {courseList.length == 0 ?
                        <NoCourse /> :
                        <View>
                            <CourseProgress courseList={courseList} />
                            <PracticeSection />
                            <CourseList courseList={courseList} />
                        </View>
                    }
                </View>
            } />
    )
}