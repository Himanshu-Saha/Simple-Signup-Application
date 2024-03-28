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
import Template from './src/DataTemplate';
import UserImage from './src/Image';
import { SignUpData } from './src/utils/data';
export default App;


function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  function showData() {
    if(password!=confirmPassword){Alert.alert("Password doesn't matches");setPassword('');setConfirmPassword('');}
    else{switch(""){
      case firstName:
      case lastName:
      case email:
      case phoneNumber:
      case dateOfBirth:
      case password:
      // case confirmPassword:
        Alert.alert("Fill all credentials")
        break;
      default:
    Alert.alert(
      `User Information\n
      First Name : ${firstName}\n
      LastName : ${lastName}\n
      Email ID : ${email}\n
      Phone Number : ${phoneNumber}\n
      Date of Birth : ${dateOfBirth}\n
      `,
    );
  }}}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <UserImage />
        </View>
        <View style={styles.data}>
          <Template text={SignUpData.FirstName} changeState={setFirstName} />
          <Template text={SignUpData.LastName} changeState={setlastName} />
          <Template text={SignUpData.Email} changeState={setemail} />
          <Template text={SignUpData.PhoneNumber} changeState={setphoneNumber} />
          <Template text={SignUpData.DateOfBirth} changeState={setdateOfBirth} />
          <Template text={SignUpData.Password} changeState={setPassword} />
          <Template text={SignUpData.ConfirmPassword} changeState={setConfirmPassword} isConfirmPassword={password} />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={showData}>
            <Text style={styles.submit}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#323139',
    flex: 1,
  },
  data: {
    marginLeft: 50,
    marginRight: 50,
  },
  submit: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
  },
  button:{
    backgroundColor:"green",
    borderWidth: 0,
    borderColor: 'grey',
    borderRadius: 50,
    marginBottom: 10,
    marginHorizontal:60
  }
});
