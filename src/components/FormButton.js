import React from 'react'
import { TouchableOpacity, Text,Pressable ,StyleSheet} from 'react-native'
import tw from 'tailwind-react-native-classnames'

const FormButton = ({onPress,text,hover}) =>{

return(

    <Pressable onPress={onPress} style={styles.containter}>
        <Text style={styles.text}>
            {text}
        </Text>
    </Pressable>

);

};

const styles = StyleSheet.create({


    containter:{

        backgroundColor:'#990099',
        width:'100%',
        alignItems:'center',
        padding:15,
        marginTop:45,
        marginVertical:5,
        borderRadius:5,


    },

    text:{

        fontWeight:'bold',
        color:'white',

    }



});

   

export default FormButton;


