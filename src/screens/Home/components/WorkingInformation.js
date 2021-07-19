import React from 'react';
import { StyleSheet, View } from 'react-native';
import Typography from '../../../components/Text/Typography';

const WorkingInformation = ({ information = {}, style = {} }) => {
	return (
		<View style={[styles.container, style]}>
			<Typography variant="large">{information.name}</Typography>
			<Typography variant="h3">{information.description}</Typography>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});

export default WorkingInformation;
