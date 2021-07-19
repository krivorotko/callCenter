import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Typography from '../../../components/Text/Typography';
import ShadowView from 'react-native-simple-shadow-view/src/ShadowView';
import screens from '../../index';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
	container: {},
	shadow: {
		marginBottom: 2,
		borderRadius: 8,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	member: {
		backgroundColor: '#F3F3F3',
		borderRadius: 50,
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15,
		paddingVertical: 12,
		paddingHorizontal: 13,
		marginLeft: 16,
		width: 233,
	},
	memberIcon: {
		width: 55,
		height: 55,
		marginRight: 22,
		borderRadius: 50,
	},
	memberInfo: {
		flexDirection: 'column',
	},
});

const ItemMember = ({ item, onPress }) => {
	const user = require('../../../assets/icons/user.png');

	return (
		<ShadowView style={styles.shadow}>
			<TouchableOpacity style={styles.member} onPress={onPress}>
				<Image source={user} style={styles.memberIcon} />
				<View style={styles.memberInfo}>
					<Typography variant="h3">Tameke</Typography>
					<Typography variant="h3">Jonson</Typography>
				</View>
			</TouchableOpacity>
		</ShadowView>
	);
};

const TeamMembers = ({ style }) => {
	const navigation = useNavigation();
	const members = [{ id: 1 }, { id: 3 }, { id: 2 }];
	const handleItemPress = () => {
		navigation.navigate(screens.TeamRoot, {
			screen: screens.TeamMessage,
		});
	};
	return (
		<View style={[styles.container, style]}>
			<Typography variant="large">Shift team members</Typography>
			<FlatList
				style={{ marginHorizontal: -16, marginTop: 11 }}
				horizontal
				data={members}
				renderItem={({ item, index }) => {
					return <ItemMember onPress={handleItemPress} item={item} />;
				}}
				keyExtractor={item => `${item.id}_5`}
				showsHorizontalScrollIndicator={false}
				initialNumToRender={2}
			/>
		</View>
	);
};

export default TeamMembers;
