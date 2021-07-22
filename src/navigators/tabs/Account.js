import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreens from '../../screens/Account';
import screens from '../../screens';
import { Dimensions, View, StyleSheet } from 'react-native';
import Typography from '../../components/Text/Typography';
import styleConstants from '../../styles/styleConstants';

const AccountStack = createStackNavigator();

const { width } = Dimensions.get('window');
const spaceTakenByIcons = 74 + 32;

const pageOptions = ({ route }) => {
	return {
		headerTitle: children => (
			<View style={{ maxWidth: width - spaceTakenByIcons }}>
				<Typography numberOfLines={1} variant="h3" color="white">
					{route.name}
				</Typography>
			</View>
		),
		headerRight: () => <></>,
		headerBackground: () => (
			<View style={{ ...StyleSheet.absoluteFill, backgroundColor: styleConstants.MAIN_COLOR }} />
		),
	};
};

const AccountScreenNavigator = () => {
	return (
		<AccountStack.Navigator>
			<AccountStack.Screen
				name={screens.Account}
				component={AccountScreens.Account}
				options={pageOptions}
			/>
			<AccountStack.Screen
				name={screens.AccountPerfomance}
				component={AccountScreens.AccountPerfomance}
				options={pageOptions}
			/>
		</AccountStack.Navigator>
	);
};

export default AccountScreenNavigator;
