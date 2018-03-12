import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Memories = () => (
    <View style={styles.container}>
        <Text>Memories</Text>
    </View>
);

export default Memories;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });