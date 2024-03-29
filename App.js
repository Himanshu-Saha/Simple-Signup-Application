import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  Alert,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import SignUpPage from './src/Screen/Signup/Signup';
import PhotoUpload from 'react-native-photo-upload';
import FlatList from './src/Screen/List/FlatList';
export default App;


function App() {
    
  return (
   <>
   <SafeAreaView style={styles.container}>
{/* <SignUpPage /> */}
    <FlatList>

    </FlatList>
  

   </SafeAreaView>
   </> 
  );
}

const styles=StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    // backgroundColor: '#323139',
    flex: 1,
  },
})

