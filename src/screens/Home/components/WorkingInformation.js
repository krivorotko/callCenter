import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WorkingInformation = ({ information = {}, style = {} }) => {
	return (
		<View style={[styles.container, style]}>
			<Text style={{ fontWeight: '500', fontSize: 24, lineHeight: 28 }}>{information.name}</Text>
			<Text style={{ fontWeight: '400', fontSize: 16, lineHeight: 18 }}>
				{information.description}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default WorkingInformation;
