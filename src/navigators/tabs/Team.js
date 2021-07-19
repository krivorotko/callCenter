import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TeamScreens from '../../screens/Team';
import screens from '../../screens';
import { Dimensions, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Typography from '../../components/Text/Typography';
import styleConstants from '../../styles/styleConstants';
import { useNavigation } from '@react-navigation/native';

const TeamStack = createStackNavigator();

const { width } = Dimensions.get('window');
const spaceTakenByIcons = 74 + 32; // headerLeft + headerRight icons + margins + leeway.

const pageOptions = ({ route }) => {
	const leftArrow = require('../../assets/icons/leftArrow.png');
	const navigation = useNavigation();
	return {
		headerTitle: children => (
			<View style={{ maxWidth: width - spaceTakenByIcons }}>
				<Typography numberOfLines={1} variant="h3" color="white">
					{route.name}
				</Typography>
			</View>
		),
		headerRight: () => <></>,
		headerLeft: () => (
			<TouchableOpacity
				hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}
				onPress={() => navigation.goBack()}
			>
				<Image source={leftArrow} style={{ width: 18, height: 23, marginLeft: 6 }} />
			</TouchableOpacity>
		),
		headerBackground: () => (
			<View style={{ ...StyleSheet.absoluteFill, backgroundColor: styleConstants.MAIN_COLOR }} />
		),
	};
};

const pageOptions2 = ({ route }) => {
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

const TeamScreenNavigator = () => {
	return (
		<TeamStack.Navigator initialRouteName={screens.Team}>
			<TeamStack.Screen
				name={screens.Team}
				component={TeamScreens.TeamList}
				options={pageOptions2}
			/>
			<TeamStack.Screen
				name={screens.TeamMessage}
				component={TeamScreens.TeamMessages}
				options={pageOptions}
			/>
		</TeamStack.Navigator>
	);
};

export default TeamScreenNavigator;
