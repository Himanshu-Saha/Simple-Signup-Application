import React, {useRef, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import DatePicker from './datePicker';
import App from './PhoneNumber';

function Template({text, changeState,isConfirmPassword}) {
  const DOB = useRef(false);
  const number = useRef(false);
  const security = useRef(false);
  const contact = useRef('default');
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [focus, setFocus] = useState(false);
  const [err, setErr] = useState(false);
  function check(input) {
    let regex;
    switch (text) {
      case 'First Name':
      case 'Last Name':
        regex = /^[A-Za-z]+$/;
        break;
      case 'Email ID':
        regex = /^[(\w\d\W)+]+@[\w+]+(\.[\w+]{2,})+$/i;
        break;
      case 'Phone Number':
        regex = /^[(0-9)]{10}$/;
        break;
      case 'Password':
      case 'Confirm Password':
        regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{8,}$/;
        break;
      default:
        regex = /.*/; // Default to allow any input
        break;
    }
    ok = regex.test(input);
    if(text=='Confirm Password'){
      if(isConfirmPassword===input){
        setPasswordAlert(false)
      }
      else
      setPasswordAlert(true)
    }
    if ((ok || input=='') &&input.length<20) {
      changeState(input);
      setErr(false);
    } else {
      setErr(true);
    }
  }

  function changeFocus() {
    if (text === 'Password') setFocus(true);
  }

  if (text === 'Phone Number') {contact.current = 'number-pad';number.current = true;}
  else if (text === 'Date of Birth') DOB.current = true;
  else if (text === 'Password' || text === 'Confirm Password')
    security.current = true;

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{text}</Text>
        </View>
        
        <View>
          {DOB.current ? (
            <DatePicker changeState={changeState} theme={'dark'}></DatePicker>
          ) : (number.current?(<App changeState={changeState}/>):(
            <TextInput
              style={styles.textInput}
              onChangeText={check}
              placeholder={text}
              color="white"
              onFocus={changeFocus}
              placeholderTextColor="grey"
              secureTextEntry={security.current}
              keyboardType={contact.current}
              autoCapitalize={security.current? 'none':'words'}
              >
              
            </TextInput>
          ))}
        </View>

        {focus && (
          <Text style={styles.alertText}>
            Minimum Length required 8 digits including an uppercase, a
            lowercase, special character.
          </Text>
        )}

        {err && text !== 'Date of Birth' && text !== 'Confirm Password' &&(
          <View>
            <Text style={styles.errText}>*Invalid</Text>
          </View>
        )}
        {
          passwordAlert && <Text>doesn't </Text>
        }
      </View>
    </>
  );
}

export default Template;

let styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 20,
    padding: 10,
  },
  errText: {
    color: 'red',
    fontWeight: '400',
  },
  alertText: {
    color: 'grey',
  },
});
