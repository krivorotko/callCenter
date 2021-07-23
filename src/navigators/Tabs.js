import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screens from '../screens';
import HomeScreenNavigator from './tabs/Home';
import ShiftsScreenNavigator from './tabs/Shifts';
import TeamScreenNavigator from './tabs/Team';
import StatsScreenNavigator from './tabs/Stats';
import AccountScreenNavigator from './tabs/Account';
import { Image, Platform, Text, View } from 'react-native';

const Tabs = createBottomTabNavigator();

const defaultOptions = {
	activeTintColor: 'blue',
	inactiveTintColor: 'grey',
	showLabel: true,
};

const styleIcon = {
	Home: {
		width: 23,
		height: 24,
	},
	Stats: {
		width: 18,
		height: 17,
	},
	Shifts: {
		width: 19,
		height: 17,
	},
	Team: {
		width: 33,
		height: 17,
	},
	Account: {
		width: 18,
		height: 18,
	},
};

const TabBarIcon = ({ name, focused }) => {
	const getIcon = () => {
		switch (name) {
			case 'Home':
				return require('../assets/icons/home.png');
			case 'Stats':
				return require('../assets/icons/stats.png');
			case 'Shifts':
				return require('../assets/icons/Shifts.png');
			case 'Team':
				return require('../assets/icons/team.png');
			case 'Account':
				return require('../assets/icons/accounts.png');
		}
	};

	const icon = getIcon();

	return <Image source={icon} style={[styleIcon[name], { marginBottom: 10 }]} />;
};

export const TabBarLabel = ({ name, focused }) => {
	return (
		<View>
			<Text
				style={{
					marginTop: 5,
					fontSize: 10,
					color: focused ? '#fff' : '#105C79',
				}}
			>
				{name}
			</Text>
		</View>
	);
};

const optionsV3 = iconName => () => {
	return {
		tabBarIcon: ({ focused }) => <TabBarIcon name={iconName} focused={focused} />,
		tabBarLabel: ({ focused }) => <TabBarLabel name={iconName} focused={focused} />,
	};
};

const TabsScreens = () => {
	return (
		<Tabs.Navigator
			tabBarOptions={{
				activeTintColor: '#fff',
				inactiveTintColor: 'lightgray',
				style: {
					backgroundColor: '#1FB8F1',
					paddingBottom: Platform.OS === 'ios' ? 15 : 3,
					paddingTop: Platform.OS === 'ios' ? 18 : 20,
				},
			}}
		>
			<Tabs.Screen
				name={screens.HomeRoot}
				options={optionsV3('Home')}
				component={HomeScreenNavigator}
			/>
			<Tabs.Screen
				options={optionsV3('Stats')}
				name={screens.StatsRoot}
				component={StatsScreenNavigator}
			/>
			<Tabs.Screen
				options={optionsV3('Shifts')}
				name={screens.ShiftsRoot}
				component={ShiftsScreenNavigator}
			/>
			<Tabs.Screen
				name={screens.TeamRoot}
				options={optionsV3('Team')}
				component={TeamScreenNavigator}
			/>
			<Tabs.Screen
				name={screens.AccountsRoot}
				options={optionsV3('Account')}
				component={AccountScreenNavigator}
			/>
		</Tabs.Navigator>
	);
};

export default TabsScreens;
