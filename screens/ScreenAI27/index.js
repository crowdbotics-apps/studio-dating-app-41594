import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [customDistance, setCustomDistance] = useState('');
  const distances = [10, 20, 30];
  return <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} onChangeText={setSearchText} value={searchText} placeholder="Search for a place" />
        <Image style={styles.searchIcon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.distancesContainer}>
        {distances.map((distance, index) => <TouchableOpacity key={index} style={styles.distanceButton}>
            <Text style={styles.distanceText}>{distance} miles</Text>
          </TouchableOpacity>)}
        <TextInput style={styles.customDistanceInput} onChangeText={setCustomDistance} value={customDistance} placeholder="Custom distance" keyboardType="numeric" />
      </View>
      <TouchableOpacity style={styles.doneButton}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI25");
      }}><Text style={styles.doneButtonText}>Done</Text></Pressable>
      </TouchableOpacity>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 20
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  searchIcon: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  distancesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  distanceButton: {
    backgroundColor: '#4B7BEC',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  distanceText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  customDistanceInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '30%'
  },
  doneButton: {
    backgroundColor: '#4B7BEC',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center'
  }
});
export default SearchScreen;