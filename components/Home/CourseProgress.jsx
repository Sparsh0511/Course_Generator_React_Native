import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { imageAssets } from '../../constant/Option'

import Colors from '../../constant/Colors'
import * as Progress from 'react-native-progress'

export default function CourseProgress({ courseList }) {
    return (
        <View style={{
            marginTop: 10
        }} >
            <Text style={{
                fontFamily: 'jose_bold',
                fontSize: 25
            }} >Progress</Text>


            <FlatList
                data={courseList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View style={{
                        margin: 7,
                        padding: 15,
                        width: 280,
                        backgroundColor: Colors.BG_GRAY,
                        borderRadius: 8
                    }} >
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: 8
                        }} >
                            <Image source={imageAssets[item?.banner_image]}
                                style={{
                                    width: 80,
                                    height: 80,
                                    borderRadius: 8
                                }}
                            />
                            <View style={{
                                flex: 1
                            }} >
                                <Text style={{
                                    fontFamily: 'jose_bold',
                                    fontSize: 19,
                                    flexWrap: 'wrap'
                                }}
                                    numberOfLines={2}>
                                    {item?.courseTitle}</Text>
                                <Text style={{
                                    fontFamily: 'jose_regular',
                                    fontSize: 15
                                }} >{item?.chapters?.length} Chapters</Text>
                            </View>

                        </View>

                        <View style={{
                            marginTop: 10
                        }} >
                            <Progress.Bar progress={0} width={250} />
                            <Text style={{
                                marginTop: 2,
                                fontFamily: 'jose_regular'
                            }} >3 out of chapters completed</Text>
                        </View>
                    </View>
                )}
            />

        </View>
    )
}
