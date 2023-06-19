import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const PrivacyPolicyScreen = () => {
  const privacyPolicyText = `
  1. Introduction
  Welcome to our Privacy Policy. This document explains how we collect, use, and share your personal information when you use our services.

  2. Information We Collect
  We collect information you provide directly to us, such as your name, email address, and any other information you choose to provide.

  3. How We Use Your Information
  We use your information to provide, maintain, and improve our services, communicate with you, and personalize your experience.

  4. Sharing Your Information
  We may share your information with third-party service providers, partners, and other users in accordance with our Privacy Policy.

  5. Security
  We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.

  6. Your Rights
  You have the right to access, update, or delete your personal information at any time.

  7. Changes to This Privacy Policy
  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

  8. Contact Us
  If you have any questions about this Privacy Policy, please contact us at support@example.com.
  `;
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.title}>Privacy Policy</Text>
      </View>
      <Text style={styles.content}>{privacyPolicyText}</Text>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF'
  },
  logo: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 10
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 50
  }
});
export default PrivacyPolicyScreen;