import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import SubText from "./Text/SubText";

export default () => (
    <View style={styles.wrapper}>
        <SubText style={styles.title}>Нет соединения с интернетом</SubText>
        <ActivityIndicator size="small" color="#FFF"/>
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        top: 64,
        left: 0,
        right: 0,
        marginHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 4,
        backgroundColor: 'red',

        // android shadow:
        elevation: 5,
        // iOS shadow:
        shadowRadius: 5,
        shadowColor: 'rgba(61,9,11,0.24)',
        shadowOffset: {width: 0, height: 14},
        shadowOpacity: 0.8,
    },
    title: {
        textAlign: 'center',
        alignSelf: 'stretch',
        marginRight: 4,
        color: '#fff',
    },
});
