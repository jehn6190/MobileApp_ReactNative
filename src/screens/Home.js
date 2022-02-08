import React from 'react'
import { StyleSheet,View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Form from '../components/Form';
import Title from '../components/Title';

// style={tw`p-4 android:pt-2 bg-white`}

export default function Home() {
    return (
        <View  style={styles.container}>
            <View style={tw `w-3/4`}>
            <Title text = "Login"/>
            <Form/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{

        flex: 1,
        width:"100%",
        backgroundColor: "#00042A",
        alignItems: "center",
        justifyContent: "center",

    },


  });
