import axios from 'axios';
import React,{useState} from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import FormButton from './FormButton';
import FormInput from './FormInput';
import FormLabel from './FormLabel'
import Welcome from '../screens/Welcome'








export default function Form() {

    const [email,setEmail]=useState(""),
            [password ,setPassword]=useState("")

    const onSignInPressed = ()=>{

    
        
        axios.post('/home',{
            email:'',
            password:''

        }).then(response=>{
            let data = {
            email : 'test@mail.com',
            password : 'test123',
            }
            if (response.data){

            navigation.push('Welcome')

            }

        

        });
            

        };
       
        const FormInputGroup =  ({children})=>{

            return(
                <View style ={tw `my-3`}>
                    {children}
    
                </View>
    
    
            )
        }
            
    return (
        <View > 
            <FormInputGroup>

            <FormLabel text = "Email"/>
            <FormInput
            
            placeholder="Email"
             value = {email}
             setValue={setEmail}
            />
           
            </FormInputGroup>


            <FormInputGroup>

            <FormLabel text = "Password"/>
            <FormInput 
            placeholder="Password"
            value = {password}
            setValue={setPassword}
            secureTextEntry={true}
            />
          
            </FormInputGroup>


            <FormButton text="Sign In" onPress={onSignInPressed}/>




        </View>
    )
}
