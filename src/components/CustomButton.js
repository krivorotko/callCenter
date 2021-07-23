import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#A5E3F9',
		borderRadius: 5,
		fontWeight: 'bold',
		alignSelf: 'center',
		paddingVertical: 5,
		paddingHorizontal: 17,
	},
});

const noop = () => {};

const CustomButton = ({ title = '', onPress = noop, style = {} }) => {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.button, style]}>
			<Text
				style={{
					color: '#105C79',
					fontSize: 16,
					lineHeight: 19,
				}}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
