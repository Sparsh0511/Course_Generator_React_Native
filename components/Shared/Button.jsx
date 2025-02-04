import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import Colors from '../../constant/Colors'

export default function Button({text, type= "fill", onPress, loading}) {

    return (
        <TouchableOpacity onPress={onPress} 
        style={{
            padding: 15,
            width:'100%',
            borderRadius: 20,
            marginTop: 15,
            borderWidth: 1,
            borderColor: Colors.PRIMARY,
            backgroundColor: type=='fill'? Colors.PRIMARY: Colors.WHITE
        }}
        disabled={loading}
        >
           {!loading ? <Text style={{
                textAlign: 'center',
                fontSize: 18,
                color: type == 'fill'? Colors.WHITE : Colors.PRIMARY
            }} >{text}</Text>:
            <ActivityIndicator size={'large'} color={type == 'fill'? Colors.WHITE : Colors.PRIMARY} />
        }
        </TouchableOpacity>
    )
}