import React from 'react';
import { StyleSheet, SafeAreaView, View, Button, TextInput } from 'react-native';
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
	const handleShiftChangePress = () => {
		navigation.navigate(screens.BottomModal, {
			modalType: modalTypes.SHIFT_CHANGE,
		});
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollPage>
				<View style={styles.userInfo}>
					<AvatarUser style={{ marginRight: 7 }} />
					<View>
						<Typography variant="large">{user.firstName}</Typography>
						<Typography variant="large">{user.lastName}</Typography>
					</View>
				</View>
				<Typography variant="h3" style={styles.description}>
					Call center agent
				</Typography>
				<SpacerLine />
				{informations.map(information => (
					<WorkingInformation style={{ marginTop: 10 }} information={information} />
				))}
				<SpacerLine style={{ marginTop: 15 }} />
				<Typography variant="large">Status</Typography>
				<View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
					<Typography variant="large">Clocked In</Typography>
					<CustomButton onPress={handleShiftChangePress} title="Shift Change" />
				</View>
				<TextInput
					value="Please make sure you cover all outbound call lists befor our 2pm meeting."
					multiline
					allowFontScaling={false}
					style={styles.input}
				/>
				<SpacerLine style={{ marginTop: 15 }} />
				<TeamMembers
					style={{
						marginTop: 10,
					}}
				/>
				<SpacerLine style={{ marginTop: 15 }} />
				<MyPerfomance style={{ marginBottom: 54 }} />
			</ScrollPage>
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
	},
});

export default HomeScreen;
