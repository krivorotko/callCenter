import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	Button,
	TextInput,
	ActivityIndicator,
	Text,
} from 'react-native';
import Typography from '../../../components/Text/Typography';
import ScrollPage from '../../../hoc/ScrollPage';
import AvatarUser from '../components/AvatarUser';
import SpacerLine from '../../../components/SpacerLine';
import WorkingInformation from '../components/WorkingInformation';
import CustomButton from '../../../components/CustomButton';
import TeamMembers from '../components/TeamMembers';
import MyPerfomance from '../components/MyPerfomance';
import { modalTypes } from '../../Modals/modalTypes';
import screens from '../../index';
import { useDispatch, useSelector } from 'react-redux';
import metricsActions from '../../../store/metrics/actions';
import chatsActions from '../../../store/chat/actions';
import authActions from '../../../store/auth/actions';
import { getMetricsIsFetching } from '../../../store/metrics/selectors';
import { getIsFetchingChatSelector } from '../../../store/chat/selectors';
import { getUserIsFetching, getUserSelector } from '../../../store/auth/selectors';
import ShiftModal from '../../Modals/components/ShiftModal';

const user = {
	image: '',
	firstName: 'Jack',
	lastName: 'Smith',
};

const informations = [
	{
		name: 'Today shift',
		description: 'Monday, July 12, 2021',
	},
	{
		name: '9:00 am - 4:30 pm',
		description: 'Sales / Technical Support',
	},
];

const HomeScreen = ({ navigation }) => {
	const [isShowShiftChange, setIsShowShiftChange] = useState(false);
	const dispatch = useDispatch();
	const isFetchingMetrics = useSelector(getMetricsIsFetching);
	const isFetchingMemberChat = useSelector(getIsFetchingChatSelector);
	// const isFetchingUser = useSelector(getUserIsFetching);
	const user = useSelector(getUserSelector);

	useEffect(() => {
		dispatch(metricsActions.getMetrics());
		dispatch(chatsActions.getMemberList());
		dispatch(authActions.getWhoami());
	}, [dispatch]);

	const handleShiftChangePress = () => {
		setIsShowShiftChange(true);
	};

	if (!user['FirstName']) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator color={'#1FB8F1'} size="large" />
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<ScrollPage>
				<View style={styles.userInfo}>
					<AvatarUser style={{ marginRight: 7 }} />
					<View>
						<Text style={{ fontWeight: '500', fontSize: 28, lineHeight: 32 }}>
							{user['FirstName']}
						</Text>
						<Text style={{ fontWeight: '500', fontSize: 28, lineHeight: 32 }}>
							{user['LastName']}
						</Text>
					</View>
				</View>
				<Text style={{ marginTop: 15, fontSize: 18, lineHeight: 21 }}>
					{user['Department'] || 'No data'}
				</Text>
				<SpacerLine />
				{informations.map(information => (
					<WorkingInformation style={{ marginTop: 10 }} information={information} />
				))}
				<SpacerLine style={{ marginTop: 15 }} />
				<Text style={{ fontWeight: '500', fontSize: 24, lineHeight: 28 }}>Status</Text>
				<View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text style={{ fontWeight: '400', fontSize: 24, lineHeight: 28 }}>Clocked In</Text>
					<CustomButton onPress={handleShiftChangePress} title="Shift Change" />
				</View>
				<TextInput
					value="Please make sure you cover all outbound call lists befor our 2pm meeting."
					multiline
					allowFontScaling={false}
					style={styles.input}
				/>
				<SpacerLine style={{ marginTop: 15 }} />
				{isFetchingMemberChat ? (
					<ActivityIndicator color={'#1FB8F1'} size="large" />
				) : (
					<TeamMembers
						style={{
							marginTop: 10,
						}}
					/>
				)}

				<SpacerLine style={{ marginTop: 15 }} />
				{isFetchingMetrics ? (
					<ActivityIndicator color={'#1FB8F1'} size="large" />
				) : (
					<MyPerfomance style={{ marginBottom: 54 }} />
				)}
			</ScrollPage>
			{isShowShiftChange && (
				<ShiftModal onClose={() => setIsShowShiftChange(false)} hasVisible={isShowShiftChange} />
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 0,
	},
	userInfo: {
		marginTop: 18,
		flexDirection: 'row',
	},
	description: {
		marginTop: 15,
	},
	input: {
		minHeight: 88,
		paddingHorizontal: 10,
		paddingVertical: 6,
		backgroundColor: '#F3F3F3',
		borderRadius: 5,
		marginTop: 18,
		fontWeight: '400',
		fontSize: 16,
		lineHeight: 18,
	},
});

export default HomeScreen;
