import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const RelationshipScreen = () => {
  const navigation = useNavigation();
  const [selectedRelationships, setSelectedRelationships] = useState([]);
  const relationships = [{
    id: '1',
    label: 'Friendship'
  }, {
    id: '2',
    label: 'Long-term Relationship'
  }, {
    id: '3',
    label: 'Casual Dating'
  }, {
    id: '4',
    label: 'Marriage'
  }];

  const toggleRelationship = id => {
    if (selectedRelationships.includes(id)) {
      setSelectedRelationships(selectedRelationships.filter(item => item !== id));
    } else {
      setSelectedRelationships([...selectedRelationships, id]);
    }
  };

  const renderItem = ({
    item
  }) => <TouchableOpacity style={[styles.checkbox, selectedRelationships.includes(item.id) && styles.selected]} onPress={() => toggleRelationship(item.id)}>
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>;

  return <View style={styles.container}>
      <Text style={styles.title}>Select Relationship Types</Text>
      <FlatList data={relationships} renderItem={renderItem} keyExtractor={item => item.id} extraData={selectedRelationships} />
      <TouchableOpacity style={styles.nextButton} onPress={() => console.log(selectedRelationships)}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI13");
      }}><Text style={styles.nextButtonText}>Next</Text></Pressable>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  selected: {
    backgroundColor: '#f0f0f0'
  },
  label: {
    marginLeft: 10
  },
  nextButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 20
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
export default RelationshipScreen;