import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import Typography from '../../../components/Text/Typography';
import screens from '../../index';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberListSelector } from '../../../store/chat/selectors';
import chatActions from '../../../store/chat/actions';

const styles = StyleSheet.create({
	container: {},
	member: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		elevation: 1,
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		marginVertical: 3,
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
	const [firstName, lastName] = item['UserName'].split(' ');

	return (
		<TouchableOpacity style={styles.member} onPress={onPress}>
			<Image source={user} style={styles.memberIcon} />
			<View style={styles.memberInfo}>
				<Text
					style={{ fontWeight: '500', fontSize: 18, lineHeight: 21 }}
					numberOfLines={1}
					variant="h3"
				>
					{firstName}
				</Text>
				<Text
					style={{ fontWeight: '500', fontSize: 18, lineHeight: 21 }}
					numberOfLines={1}
					variant="h3"
				>
					{lastName}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const TeamMembers = ({ style }) => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const members = useSelector(getMemberListSelector);

	const handleItemPress = user => {
		dispatch(chatActions.setUserChat(user));
		navigation.navigate(screens.TeamRoot, {
			screen: screens.TeamMessage,
		});
	};
	return (
		<View style={[styles.container, style]}>
			<Text style={{ fontWeight: '500', fontSize: 24, lineHeight: 28 }} variant="large">
				Shift team members
			</Text>
			<FlatList
				style={{ marginHorizontal: -16, marginTop: 11 }}
				horizontal
				data={members}
				renderItem={({ item, index }) => {
					return <ItemMember onPress={() => handleItemPress(item)} item={item} />;
				}}
				ListEmptyComponent={() => (
					<Typography style={{ marginHorizontal: 16 }} center variant="h4">
						No data
					</Typography>
				)}
				keyExtractor={item => `${item['UserName']}`}
				showsHorizontalScrollIndicator={false}
				initialNumToRender={2}
			/>
		</View>
	);
};

export default TeamMembers;
