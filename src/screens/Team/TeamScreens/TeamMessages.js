import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	View,
	StyleSheet,
	Text,
	Image,
	TextInput,
	FlatList,
	KeyboardAvoidingView,
	Platform,
	ActivityIndicator,
} from 'react-native';
import Typography from '../../../components/Text/Typography';
import CustomButton from '../../../components/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import chatActions from '../../../store/chat/actions';
import { getUserChat } from '../../../store/chat/selectors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 0,
	},
	userInfo: {
		marginTop: 18,
		marginLeft: 21,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: 9,
	},
	userIcon: {
		marginRight: 23,
		borderRadius: 50,
		width: 55,
		height: 55,
	},
	online: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: '#1CAF20',
		marginRight: 4,
	},
	offline: {
		width: 10,
		height: 10,
		borderRadius: 50,
		backgroundColor: '#727171',
		marginRight: 4,
	},
	onlineText: {
		color: '#1CAF20',
		fontSize: 12,
		fontWeight: '400',
		marginRight: 7,
	},
	offlineText: {
		color: '#727171',
		fontSize: 12,
		fontWeight: '400',
		marginRight: 7,
	},
	input: {
		marginHorizontal: 11,
		paddingVertical: 8,
		width: '75%',
	},
});

const RenderMessage = ({ message }) => {
	const iconMyMessage = require('../../../assets/icons/myMessage.png');
	const isMyMessage = false;
	const backgroundColor = isMyMessage ? '#E0F7FF' : '#fff';
	return (
		<View
			style={{
				marginTop: 15,
				marginHorizontal: 28,
				flexDirection: 'row',
				justifyContent: isMyMessage ? 'flex-end' : 'flex-start',
			}}
		>
			<View
				style={{
					position: 'relative',
					backgroundColor,
					paddingVertical: 12,
					paddingHorizontal: 8,
					width: 269,
					borderRadius: 5,
				}}
			>
				<Text
					style={{
						fontSize: 16,
						fontWeight: '400',
						lineHeight: 19,
					}}
				>
					{message['Message']}
				</Text>
				<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
					<Text style={{ fontWeight: '400', fontSize: 12, color: '#B5B5B5', marginTop: 5 }}>
						12:15 pm
					</Text>
				</View>
			</View>
		</View>
	);
};

const TeamMessages = () => {
	const iconUser = require('../../../assets/icons/user.png');
	const dispatch = useDispatch();
	const userChat = useSelector(getUserChat);
	const hasOnline = userChat['State'] === 'Active';
	const { messages, isFetching } = useSelector(state => state.chats);
	const [message, setMessage] = useState('');

	const handleAddMessage = () => {
		setMessage('');
	};

	const fetchMessages = () => {
		dispatch(chatActions.getChatList());
	};

	useEffect(() => {
		fetchMessages();
	}, [dispatch]);

	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView
				style={{ flex: 1 }}
				behavior={Platform.OS === 'ios' ? 'padding' : null}
				keyboardVerticalOffset={90}
			>
				<View style={styles.userInfo}>
					<View style={{ flexDirection: 'row' }}>
						<Image source={iconUser} style={styles.userIcon} />
						<View style={{ width: 150 }}>
							<Text
								style={{ fontWeight: '500', fontSize: 18, lineHeight: 21 }}
								numberOfLines={1}
								variant="h3"
							>
								{userChat['UserName']}
							</Text>
							<Text
								style={{ width: 150, fontSize: 14, fontWeight: '400', lineHeight: 16 }}
								numberOfLines={1}
							>
								{userChat['Login']}
							</Text>
						</View>
					</View>
					{hasOnline && (
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<View style={styles.online} />
							<Text style={styles.onlineText}>online</Text>
						</View>
					)}

					{!hasOnline && (
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<View style={styles.offline} />
							<Text style={styles.offlineText}>offline</Text>
						</View>
					)}
				</View>
				<FlatList
					style={{ backgroundColor: '#F3F3F3', paddingTop: 10 }}
					data={messages}
					onRefresh={fetchMessages}
					onEndReachedThreshold={0.25}
					refreshing={false}
					keyExtractor={item => item['Timestamp']}
					renderItem={({ item }) => <RenderMessage message={item} />}
					ListFooterComponent={isFetching && <ActivityIndicator color={'#1FB8F1'} size="large" />}
					ListEmptyComponent={() =>
						!isFetching ? (
							<Typography center variant="h4">
								Сообщений нет
							</Typography>
						) : null
					}
				/>
				<View style={{ flexDirection: 'row' }}>
					<TextInput
						value={message}
						onChangeText={setMessage}
						style={styles.input}
						placeholder="Your message"
					/>
					<CustomButton title="Send" onPress={handleAddMessage} />
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default TeamMessages;
