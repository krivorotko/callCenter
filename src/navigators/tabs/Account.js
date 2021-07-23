import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreens from '../../screens/Account';
import screens from '../../screens';
import { Dimensions, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Typography from '../../components/Text/Typography';
import styleConstants from '../../styles/styleConstants';
import { useNavigation } from '@react-navigation/native';

const AccountStack = createStackNavigator();

const { width } = Dimensions.get('window');
const spaceTakenByIcons = 74 + 32;

const pageOptions = ({ route }) => {
	return {
		headerTitle: children => (
			<View style={{ width }}>
				<Typography center numberOfLines={1} variant="h3" color="white">
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

const pageOptions2 = ({ route }) => {
	const leftArrow = require('../../assets/icons/leftArrow.png');
	const navigation = useNavigation();
	return {
		headerTitle: children => (
			<View>
				<Typography center numberOfLines={1} variant="h3" color="white">
					{route.name}
				</Typography>
			</View>
		),
		headerRight: () => <></>,
		headerLeft: () => (
			<TouchableOpacity
				hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}
				onPress={() => navigation.navigate(screens.TeamRoot, { screen: screens.Team })}
			>
				<Image source={leftArrow} style={{ width: 18, height: 23, marginLeft: 6 }} />
			</TouchableOpacity>
		),
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
				options={pageOptions2}
			/>
		</AccountStack.Navigator>
	);
};

export default AccountScreenNavigator;
