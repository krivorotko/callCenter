import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Typography from '../../../components/Text/Typography';
import ShadowView from 'react-native-simple-shadow-view';

const styles = StyleSheet.create({
	container: {},
	shadow: {},
	member: {
		marginBottom: 10,
		backgroundColor: '#fff',
		borderRadius: 8,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
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

const ItemMember = item => {
	const graphicIcon = require('../../../assets/icons/graphic.png');
	return (
		<ShadowView style={styles.shadow}>
			<TouchableOpacity style={styles.member}>
				<Typography variant="body1">Advense score</Typography>
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
		</ShadowView>
	);
};

const MyPerfomance = ({ style }) => {
	const members = [{ id: 1 }, { id: 3 }, { id: 2 }];
	return (
		<View style={[styles.container, style]}>
			<Typography variant="large">My Perfomance</Typography>
			<FlatList
				style={{ marginHorizontal: -16, marginTop: 11 }}
				horizontal
				data={members}
				renderItem={({ item, index }) => {
					return <ItemMember item={item} />;
				}}
				keyExtractor={item => `${item.id}`}
				showsHorizontalScrollIndicator={false}
				initialNumToRender={2}
			/>
		</View>
	);
};

export default MyPerfomance;
