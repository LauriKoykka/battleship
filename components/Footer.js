import React,  { Component } from 'react';
import { Text, View } from 'react-native';
import styles from '../css/style';

export default function Footer() {
    return(
        <View style={styles.footer}>
            <Text style={styles.author}>
                Author: Lauri Köykkä
            </Text>
        </View>
    )
}
