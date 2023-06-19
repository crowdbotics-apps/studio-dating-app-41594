import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const GenderPreferenceScreen = () => {
  const [selectedGenders, setSelectedGenders] = useState([]);
  const genderData = [{
    id: '1',
    label: 'Male'
  }, {
    id: '2',
    label: 'Female'
  }, {
    id: '3',
    label: 'Non-binary'
  }, {
    id: '4',
    label: 'Transgender'
  }, {
    id: '5',
    label: 'Other'
  }];

  const handleSelect = id => {
    if (selectedGenders.includes(id)) {
      setSelectedGenders(selectedGenders.filter(genderId => genderId !== id));
    } else {
      setSelectedGenders([...selectedGenders, id]);
    }
  };

  const renderItem = ({
    item
  }) => <TouchableOpacity style={[styles.checkbox, {
    backgroundColor: selectedGenders.includes(item.id) ? '#42A5F5' : '#FFFFFF'
  }]} onPress={() => handleSelect(item.id)}>
      <Text style={styles.checkboxLabel}>{item.label}</Text>
    </TouchableOpacity>;

  return <View style={styles.container}>
      <Text style={styles.title}>Select Gender Preferences</Text>
      <FlatList data={genderData} renderItem={renderItem} keyExtractor={item => item.id} numColumns={2} columnWrapperStyle={styles.checkboxWrapper} />
      <TouchableOpacity style={styles.nextButton} onPress={() => console.log('Next')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  checkboxWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20
  },
  checkbox: {
    width: '48%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#42A5F5',
    borderRadius: 5,
    marginBottom: 10
  },
  checkboxLabel: {
    fontSize: 16,
    fontWeight: '500'
  },
  nextButton: {
    backgroundColor: '#42A5F5',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});
export default GenderPreferenceScreen;