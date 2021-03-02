import React,  { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../css/style';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>
                Battleship
            </Text>
        </View>
    )
}
