import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SubText = ({ style, center, black, children, ...props }) => (
    <Text
        allowFontScaling={false}
        {...props}
        style={[styles.textSub, style, center && styles.center, black && styles.black]}
    >
        {children}
    </Text>
);

const styles = StyleSheet.create({
    textSub: {
        fontSize: 12,
        lineHeight: 16,
        color: '#fff',
    },
    center: {
        textAlign: 'center',
    },
    black: {
        color: '#000',
    },
});

export default SubText;
