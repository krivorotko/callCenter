import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreens from '../../screens/Home';
import screens from '../../screens';
import { Dimensions, View, StyleSheet } from 'react-native';
import Typography from '../../components/Text/Typography';
import styleConstants from '../../styles/styleConstants';


const HomeStack = createStackNavigator();

const { width } = Dimensions.get('window');
const spaceTakenByIcons = 74 + 32; // headerLeft + headerRight icons + margins + leeway.

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

const HomeScreenNavigator = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name={screens.Home} component={HomeScreens.Home} options={pageOptions} />
		</HomeStack.Navigator>
	);
};

export default HomeScreenNavigator;
