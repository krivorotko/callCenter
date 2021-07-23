import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	FlatList,
	TouchableOpacity,
	Image,
	ActivityIndicator,
	Text,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import shiftActions from '../../../store/shifts/actions';
import Typography from '../../../components/Text/Typography';
import CustomButton from '../../../components/CustomButton';
import ShiftModal from '../../Modals/components/ShiftModal';
import moment from 'moment';

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

const ShiftItem = ({ item, onShiftPress }) => {
	const start = moment(item['Start']);
	const finish = moment(item['Stop']);
	const user = require('../../../assets/icons/user.png');

	return (
		<TouchableOpacity style={styles.shiftContainer}>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'flex-end',
				}}
			>
				<Text
					style={{ marginRight: 7, fontWeight: '400', fontSize: 24, lineHeight: 28 }}
					variant="h2"
				>
					{start.format('dddd')}
				</Text>
				<Text style={{ fontWeight: '400', fontSize: 14, lineHeight: 16 }} variant="h4">
					{start.format('MMMM D, hh:mm')} - {finish.format('hh:mm')}
				</Text>
			</View>
			<View
				style={{
					flexDirection: 'row',
					marginTop: 9,
				}}
			>
				<Image source={user} style={styles.shiftIcon} />
				<View>
					<Text
						style={{ width: 169, fontWeight: '500', fontSize: 18, lineHeight: 21 }}
						numberOfLines={1}
					>
						Jack Smith
					</Text>
					<Text
						style={{ marginTop: 6, fontWeight: '400', fontSize: 18, lineHeight: 21 }}
						variant="h4"
					>
						Call center agent
					</Text>
					<Text
						style={{ marginTop: 6, fontWeight: '400', fontSize: 18, lineHeight: 21 }}
						variant="h4"
					>
						Sales/Technical Support
					</Text>
				</View>
			</View>
			<Text style={{ marginTop: 15, fontWeight: '500', fontSize: 18, lineHeight: 21 }}>Status</Text>
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'flex-end',
					justifyContent: 'space-between',
				}}
			>
				<Text style={{ marginTop: 15, fontWeight: '400', fontSize: 18, lineHeight: 21 }}>
					Acknowledged
				</Text>
				<CustomButton onPress={onShiftPress} title="Shift Change" />
			</View>
		</TouchableOpacity>
	);
};

const Shifts = () => {
	const dispatch = useDispatch();
	const [hasShowShiftModal, setHasShowShiftModal] = useState(false);
	const [mode, setMode] = useState('Assigned');
	const [end, setEnd] = useState('2021-07-21T11:38:59');
	const { items, isFetching } = useSelector(state => state.shifts);

	const fetchShifts = () => {
		dispatch(shiftActions.getShifts({ mode, end }));
	};

	useEffect(() => {
		fetchShifts();
	}, [dispatch, mode, end]);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				style={{ marginTop: 19, marginHorizontal: 16 }}
				data={items}
				onRefresh={fetchShifts}
				onEndReachedThreshold={0.25}
				refreshing={false}
				renderItem={({ item }) => (
					<ShiftItem onShiftPress={() => setHasShowShiftModal(true)} item={item} />
				)}
				ListFooterComponent={isFetching && <ActivityIndicator color={'#1FB8F1'} size="large" />}
				ListEmptyComponent={() =>
					!isFetching ? (
						<Typography center variant="h4">
							No data
						</Typography>
					) : null
				}
			/>
			{hasShowShiftModal && (
				<ShiftModal hasVisible={hasShowShiftModal} onClose={() => setHasShowShiftModal(false)} />
			)}
		</SafeAreaView>
	);
};

export default Shifts;
