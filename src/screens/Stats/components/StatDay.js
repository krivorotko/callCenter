import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: '400',
	},
	description: {
		fontSize: 14,
		fontWeight: '400',
	},
	day: {
		fontSize: 12,
		fontWeight: '400',
		color: '#727171',
	},
});

const StatDay = ({ style = {}, day, date }) => {
	const chartImage = require('../../../assets/icons/chart.png');
	const dates = ['8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm'];
	return (
		<View style={style}>
			<View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
				<Text style={styles.title}>{day} </Text>
				<Text style={styles.description}>{date}</Text>
			</View>

			<Image source={chartImage} style={{ height: 48, width: '100%', marginTop: 8 }} />

			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginTop: 6,
				}}
			>
				{dates.map(day => (
					<Text style={styles.day}>{day}</Text>
				))}
			</View>
		</View>
	);
};

export default StatDay;
