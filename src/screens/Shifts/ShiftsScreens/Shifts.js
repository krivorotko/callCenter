import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	FlatList,
	TouchableOpacity,
	Image,
	ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import shiftActions from '../../../store/shifts/actions';
import Typography from '../../../components/Text/Typography';
import CustomButton from '../../../components/CustomButton';

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
	const dispatch = useDispatch();
	const [mode, setMode] = useState('Assigned');
	const [end, setEnd] = useState('2021-07-21T11:38:59');
	const { items, isFetching } = useSelector(state => state.shifts);
	console.log('shifts: ', items, 'isFetching: ', isFetching);

	const fetchShifts = () => {
		dispatch(shiftActions.getShifts({ mode, end }));
	};

	useEffect(() => {
		fetchShifts();
	}, [dispatch, mode, end]);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				style={{ marginTop: 19 }}
				data={items}
				onRefresh={fetchShifts}
				onEndReachedThreshold={0.25}
				refreshing={false}
				renderItem={({ item }) => <ShiftItem item={item} />}
				ListFooterComponent={isFetching && <ActivityIndicator color={'#1FB8F1'} size="large" />}
				ListEmptyComponent={() =>
					!isFetching ? (
						<Typography center variant="h4">
							Нет данных
						</Typography>
					) : null
				}
			/>
		</SafeAreaView>
	);
};

export default Shifts;
