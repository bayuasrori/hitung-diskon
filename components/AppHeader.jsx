import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components';
export default () => (
    <View style={styles.header}>
        <Text style={{ fontSize: 18 }}>Hitung Diskon</Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
        marginTop: StatusBar.currentHeight + 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    }
})