import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Chat = () => (
    <View style={styles.container}>
        <Text>Chat</Text>
    </View>
);

export default Chat;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });