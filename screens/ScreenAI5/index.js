import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} value={username} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry onChangeText={setPassword} value={password} />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
          <Image style={styles.checkbox} source={{
          uri: isChecked ? 'https://tinyurl.com/42evm3m3' : 'https://tinyurl.com/42evm3m3'
        }} />
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          I agree to the{' '}
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI6");
        }}><Text style={styles.link} onPress={() => {}}>
            Terms and Conditions
          </Text></Pressable>{' '}
          and{' '}
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI7");
        }}><Text style={styles.link} onPress={() => {}}>
            Privacy Policy
          </Text></Pressable>
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI81");
      }}><Text style={styles.buttonText}>Sign Up</Text></Pressable>
      </TouchableOpacity>
      <Text style={styles.socialText}>Or sign up with:</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image style={styles.socialIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.socialIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 5
  },
  checkboxText: {
    fontSize: 14,
    color: '#777'
  },
  link: {
    color: '#007AFF'
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 15
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  socialText: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%'
  },
  socialIcon: {
    width: 40,
    height: 40
  }
});
export default SignUpScreen;