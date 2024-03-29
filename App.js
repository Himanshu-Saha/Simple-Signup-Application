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
// import PhotoUpload from 'react-native-photo-upload';
export default App;


function App() {
    
  return (
   <>
   <SignUpPage />
  <View>
  {/* <Image
     source={{
       uri: '/Users/chicmic_reacjs01/Documents/658/SignUpPage/SignUp/onePiece.jpeg'
     }}
   /> */}
  </View>
  

   </> 
  );
}

