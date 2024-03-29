import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ListTemplate({data}){
    return (
        <>
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image source={{uri:data.uri}} style={styles.image} />
                </View>
                <View style={styles.text}>
                    <Text style={styles.name}>{data.name}</Text>        
                    <Text style={styles.phone}>{data.phone}</Text>        
                    <Text>{data.email}</Text>        
                </View>
            </View>
        </> 
    )
}

const styles=StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        backgroundColor:"white",
        borderRadius:15,
        marginLeft:30,
        marginRight:30,
        marginBottom:8,
        padding:8,
        alignContent:"center",
        justifyContent:"center"
    },
    imageView:{
        // width:
        paddingLeft:10
    },
    image:{
        height:65,
        width:65,
        borderRadius:30
    },
    name:{
        fontWeight:"bold",
        fontSize:15,
        marginBottom:4
    },
    text:{
        paddingLeft:15,
        alignContent:"center",
        justifyContent:"center",
        flex:1
    },
    phone:{
        marginBottom:0
    }
})