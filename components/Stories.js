import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Stories = () => (
    <View style={styles.container}>
        <Text>Stories</Text>
    </View>
);

export default Stories;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });