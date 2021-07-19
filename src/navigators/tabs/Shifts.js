import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShiftsScreens from '../../screens/Shifts';
import screens from '../../screens';
import { Dimensions, View, StyleSheet } from 'react-native';
import Typography from '../../components/Text/Typography';
import styleConstants from '../../styles/styleConstants';


const ShiftsStack = createStackNavigator();

const { width } = Dimensions.get('window');
const spaceTakenByIcons = 74 + 32;

const pageOptions = ({ route }) => {
	return {
		headerTitle: (children) => (<View style={{ maxWidth: width - spaceTakenByIcons }}>
			<Typography numberOfLines={1} variant='h3' color='white'>
				{route.name}
			</Typography>
		</View>),
		headerRight: () => <></>,
		headerBackground: () => (
			<View style={{ ...StyleSheet.absoluteFill, backgroundColor: styleConstants.MAIN_COLOR }} />
		),
	};
};

const ShiftsScreenNavigator = () => {
	return (
		<ShiftsStack.Navigator>
			<ShiftsStack.Screen name={screens.Shifts} component={ShiftsScreens.Shifts} options={pageOptions} />
		</ShiftsStack.Navigator>
	);
};

export default ShiftsScreenNavigator;
