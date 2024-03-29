import React from "react";
import { Image,StyleSheet, View ,Text} from "react-native";

export default function UserImage(){
    const image = {uri: '/Users/chicmic_reacjs01/Documents/658/react/signupPage/onePiece.jpeg'}
    return (
        <>
        <View style={styles.container}>
        <Image source={image} style={styles.image}/>    
        <Text style={styles.text}>Create Your Account</Text>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    image:{
        height:100,
        width:100,
        borderRadius:50,
        marginBottom:10
    },
    text:{
        color:"white",
        fontWeight:"bold",
        fontSize:20
    },  
    container:{
        margin:20,
        alignItems:"center",        
    }
})