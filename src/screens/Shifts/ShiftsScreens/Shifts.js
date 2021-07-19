import React from 'react';
import { StyleSheet, SafeAreaView, View, FlatList, TouchableOpacity, Image } from 'react-native';
import ScrollPage from '../../../hoc/ScrollPage';
import Typography from '../../../components/Text/Typography';
import CustomButton from '../../../components/CustomButton';
import ShadowView from 'react-native-simple-shadow-view/src/ShadowView';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 0,
	},
	shiftContainer: {
		marginHorizontal: 1,
		elevation: 1,
		marginBottom: 2,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		backgroundColor: 'white',
		borderRadius: 5,
		color: '#000',
		paddingHorizontal: 9,
		paddingVertical: 11,
		marginTop: 15,
	},
	shiftIcon: {
		width: 52,
		height: 55,
		borderRadius: 50,
		marginRight: 21,
	},
});

const ShiftItem = item => {
	const user = require('../../../assets/icons/user.png');

	return (
		<TouchableOpacity style={styles.shiftContainer}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'flex-end',
				}}
			>
				<Typography style={{ marginRight: 7 }} variant="h2">
					Monday
				</Typography>
				<Typography variant="h4">July 28, 8:30 am- 4:00 pm</Typography>
			</View>
			<View
				style={{
					flexDirection: 'row',
					marginTop: 9,
				}}
			>
				<Image source={user} style={styles.shiftIcon} />
				<View>
					<Typography variant="h3">Jack Smith</Typography>
					<Typography style={{ marginTop: 6 }} variant="h4">
						Call center agent
					</Typography>
					<Typography variant="h4">Sales/Technical Support</Typography>
				</View>
			</View>
			<Typography variant="h3" style={{ marginTop: 15 }}>
				Status
			</Typography>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'flex-end',
					justifyContent: 'space-between',
				}}
			>
				<Typography variant="h4" style={{ marginTop: 15 }}>
					Acknowledged
				</Typography>
				<CustomButton title="Shift Change" />
			</View>
		</TouchableOpacity>
	);
};

const Shifts = () => {
	const shifts = [{}, {}, {}, {}, {}, {}, {}, {}];
	return (
		<SafeAreaView style={styles.container}>
			<ScrollPage>
				<FlatList style={{ marginTop: 19 }} data={shifts} renderItem={ShiftItem} />
			</ScrollPage>
		</SafeAreaView>
	);
};

export default Shifts;
