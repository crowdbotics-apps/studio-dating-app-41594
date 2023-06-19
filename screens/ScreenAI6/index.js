import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const TermsAndConditionsScreen = () => {
  const terms = ['Term 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Term 2: Integer nec odio. Praesent libero.', 'Term 3: Sed cursus ante dapibus diam.', 'Term 4: Sed nisi. Nulla quis sem at nibh elementum imperdiet.', 'Term 5: Duis sagittis ipsum. Praesent mauris.'];
  return <View style={styles.container}>
      <Text style={styles.title}>Terms and Conditions</Text>
      <ScrollView style={styles.scrollView}>
        {terms.map((term, index) => <Text key={index} style={styles.term}>
            {term}
          </Text>)}
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  scrollView: {
    width: '90%',
    marginBottom: 20
  },
  term: {
    fontSize: 16,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default TermsAndConditionsScreen;