import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
const users = [{
  id: '1',
  name: 'John Doe',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  name: 'Jane Smith',
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '3',
  name: 'Michael Johnson',
  image: 'https://tinyurl.com/42evm3m3'
}];

const UserItem = ({
  name,
  image
}) => <View style={styles.userItem}>
    <Image source={{
    uri: image
  }} style={styles.userImage} />
    <Text style={styles.userName}>{name}</Text>
  </View>;

const UsersListScreen = () => {
  return <View style={styles.container}>
      <FlatList data={users} renderItem={({
      item
    }) => <UserItem name={item.name} image={item.image} />} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  userName: {
    fontSize: 18
  }
});
export default UsersListScreen;