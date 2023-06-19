import React from 'react';
import { View, Text, Image, TextInput, FlatList, StyleSheet } from 'react-native';
const conversations = [{
  id: '1',
  name: 'John Doe',
  username: '@johndoe',
  lastMessageTimestamp: '2m'
}, {
  id: '2',
  name: 'Jane Smith',
  username: '@janesmith',
  lastMessageTimestamp: '5m'
}, {
  id: '3',
  name: 'Michael Johnson',
  username: '@michaeljohnson',
  lastMessageTimestamp: '10m'
}];

const MessageScreen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profilePicture} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.name}>Your Name</Text>
        <Text style={styles.username}>@yourusername</Text>
      </View>
      <TextInput style={styles.searchBar} placeholder="Search for conversations..." />
      <FlatList data={conversations} renderItem={({
      item
    }) => <View style={styles.conversation}>
            <Text style={styles.conversationName}>{item.name}</Text>
            <Text style={styles.conversationUsername}>{item.username}</Text>
            <Text style={styles.conversationTimestamp}>
              {item.lastMessageTimestamp}
            </Text>
          </View>} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  username: {
    fontSize: 14,
    color: '#888',
    marginLeft: 5
  },
  searchBar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    margin: 10,
    fontSize: 16
  },
  conversation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFFFFF'
  },
  conversationName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  conversationUsername: {
    fontSize: 14,
    color: '#888'
  },
  conversationTimestamp: {
    fontSize: 12,
    color: '#BDBDBD'
  }
});
export default MessageScreen;