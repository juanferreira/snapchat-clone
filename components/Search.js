import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Search = () => (
    <View style={styles.container}>
        <Text>Search</Text>
    </View>
);

export default Search;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });