import React from 'react';
import {View, TextInput, StyleSheet } from 'react-native'; 
import tw from 'tailwind-react-native-classnames';

// export default function FormInput(props) {
    // let{...other} = props

    const FormInput = ({value,setValue,placeholder,secureTextEntry})=>{
  return (
    

    <View style={styles.container}>


      <TextInput 
      
      value={value}
      onChangeText={setValue}
      placeholder={placeholder} 
      secureTextEntry={secureTextEntry}
      style={styles.input}
      
      />

       {/* {...other} */}
   
   </View>
  );
};
const styles = StyleSheet.create({

container:{

 backgroundColor: '#f7f7f7',
 borderColor: '#b19cd9',


},
input:{},



});

export default FormInput;