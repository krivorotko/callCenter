import React, { useEffect } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image,
	ActivityIndicator,
} from 'react-native';
import Typography from '../../../components/Text/Typography';
import SpacerLine from '../../../components/SpacerLine';
import screens from '../../index';
import { useDispatch, useSelector } from 'react-redux';
import chatActions from '../../../store/chat/actions';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 0,
	},
	shiftContainer: {
		flexDirection: 'row',
		paddingVertical: 11,
		paddingHorizontal: 16,
		justifyContent: 'space-between',
	},
	shiftIcon: {
		width: 55,
		height: 55,
		borderRadius: 50,
		marginRight: 21,
	},
	online: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: '#1CAF20',
		marginRight: 4,
		marginTop: 5,
	},
	offline: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: '#727171',
		marginRight: 4,
		marginTop: 5,
	},
	messageWrapper: {
		position: 'relative',
	},
	messageImage: {
		width: 27,
		height: 21,
	},
	messageCounter: {
		position: 'absolute',
		fontSize: 12,
		fontWeight: '500',
		color: '#105C79',
		left: 9,
	},
});

const TeamListItem = ({ item, onPress = () => {} }) => {
	const messages = require('../../../assets/icons/messages.png');
	const user = require('../../../assets/icons/user.png');
	const isActive = item['State'] === 'isActive';

	return (
		<TouchableOpacity
			style={[styles.shiftContainer, !isActive && { backgroundColor: '#F3F3F3' }]}
			onPress={onPress}
		>
			<View style={{ flexDirection: 'row', width: 170 }}>
				<Image style={styles.shiftIcon} source={user} />
				<View style={[isActive && styles.online, !isActive && styles.offline]} />
				<View>
					<Text
						style={{ fontSize: 18, fontWeight: '500', lineHeight: 21 }}
						numberOfLines={1}
						variant="h3"
					>
						{item.UserName}
					</Text>
					<Text style={{ fontWeight: '400', lineHeight: 16, fontSize: 14, marginTop: 5 }}>
						No data
					</Text>
				</View>
			</View>
			<View styles={styles.messageWrapper}>
				<Image source={messages} style={styles.messageImage} />
				<Text style={styles.messageCounter}>1</Text>
			</View>
		</TouchableOpacity>
	);
};

const TeamList = ({ navigation }) => {
	const dispatch = useDispatch();
	const { isFetching, items } = useSelector(state => state.chats);

	const getMemberList = () => {
		dispatch(chatActions.getMemberList());
	};

	useEffect(() => {
		getMemberList();
	}, [dispatch]);

	const handleMessagePress = user => {
		dispatch(chatActions.setUserChat(user));
		navigation.navigate(screens.TeamRoot, {
			screen: screens.TeamMessage,
		});
	};

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				style={{
					marginTop: 9,
				}}
				data={items}
				onRefresh={getMemberList}
				onEndReachedThreshold={0.25}
				refreshing={false}
				renderItem={({ item, index }) => (
					<TeamListItem item={item} onPress={() => handleMessagePress(item)} />
				)}
				ListFooterComponent={isFetching && <ActivityIndicator color={'#1FB8F1'} size="large" />}
				ListEmptyComponent={() =>
					!isFetching ? (
						<Typography center variant="h4">
							No data
						</Typography>
					) : null
				}
				ItemSeparatorComponent={() => (
					<SpacerLine
						style={{ height: 1, marginVertical: 0, marginLeft: 18, padding: 0, margin: 0 }}
					/>
				)}
				keyExtractor={item => `${item.UserName}`}
			/>
		</SafeAreaView>
	);
};

export default TeamList;
