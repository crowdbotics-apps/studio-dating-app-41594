import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI5");
      }}><Text style={styles.buttonText}>Create Account</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI8");
      }}><Text style={styles.forgotPassword}>Forgot Password?</Text></Pressable>
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image style={styles.socialIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
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
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5
  },
  button: {
    width: '80%',
    backgroundColor: '#1C86EE',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  forgotPassword: {
    color: '#1C86EE',
    textDecorationLine: 'underline',
    marginBottom: 20
  },
  socialContainer: {
    flexDirection: 'row'
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  socialIcon: {
    width: 30,
    height: 30
  }
});
export default LoginScreen;