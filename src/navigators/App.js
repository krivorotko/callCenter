import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import screens from '../screens';
import MainTabs from '../navigators/Tabs';
import ModalsContainer from '../screens/Modals';

const AppStack = createStackNavigator();
const MainScreensStack = createStackNavigator();

const defaultStackOptions = {
	...TransitionPresets.SlideFromRightIOS,
};

const MainScreens = () => {
	return (
		<MainScreensStack.Navigator headerMode="none" screenOptions={defaultStackOptions}>
			<MainScreensStack.Screen name={screens.MainRoot} component={MainTabs} />
		</MainScreensStack.Navigator>
	);
};

const modalsOptions = {
	// Error modals just pop-out, no need to animate shit.
	animationEnabled: false,
	cardStyle: { backgroundColor: 'transparent' },
	detachPreviousScreen: false,
};

const _App = () => {
	return (
		<AppStack.Navigator mode="modal" headerMode="none">
			<AppStack.Screen name="Main" component={MainScreens} />
			<AppStack.Screen name="BottomModal" component={ModalsContainer} options={modalsOptions} />
		</AppStack.Navigator>
	);
};

export default _App;
