import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import Typography from '../../../components/Text/Typography';
import { useSelector } from 'react-redux';
import { getMetricsSelector } from '../../../store/metrics/selectors';

const styles = StyleSheet.create({
	container: {},
	shadow: {},
	member: {
		marginVertical: 3,
		backgroundColor: '#fff',
		borderRadius: 8,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		elevation: 1,
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		marginLeft: 16,
		marginRight: 15,
		paddingHorizontal: 12,
		paddingVertical: 9,
	},
	image: {
		width: 100,
		height: 79,
	},
});

const ItemMember = ({ item }) => {
	const graphicIcon = require('../../../assets/icons/graphic.png');
	return (
		<View style={styles.shadow}>
			<TouchableOpacity style={styles.member}>
				<Text style={{ fontSize: 16, lineHeight: 19 }} variant="body1">
					{item['Key']}
				</Text>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Typography style={{ marginRight: 21 }} variant="h2">
						8.9
					</Typography>
					<Image source={graphicIcon} style={styles.image} />
				</View>
			</TouchableOpacity>
		</View>
	);
};

const MyPerfomance = ({ style }) => {
	const metrics = useSelector(getMetricsSelector);

	return (
		<View style={[styles.container, style]}>
			<Text style={{ fontWeight: '500', fontSize: 24, lineHeight: 28 }}>My Perfomance</Text>
			<FlatList
				style={{ marginHorizontal: -16, marginTop: 11 }}
				horizontal
				data={metrics}
				renderItem={({ item, index }) => {
					return <ItemMember item={item} />;
				}}
				keyExtractor={item => `${item.key}`}
				showsHorizontalScrollIndicator={false}
				initialNumToRender={2}
			/>
		</View>
	);
};

export default MyPerfomance;
