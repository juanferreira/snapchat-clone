import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ headerContainerStyle }) => (
    <View style={headerContainerStyle}>
        <Icon style={styles.icon} name="snapchat-ghost"/>
        <Icon style={styles.icon} name="search"/>
        <TextInput placeholder="Search" placeholderTextColor="#fff" />
        <Icon style={styles.icon} name="bolt"/>
        <Icon style={styles.icon} name="camera"/>
    </View>
);

export default Header;

const styles = StyleSheet.create({
    icon: {
        color: '#fff'
    }
});