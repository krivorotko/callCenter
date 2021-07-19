import React, { useState } from 'react';
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
} from 'react-native';
import ScrollPage from '../../../hoc/ScrollPage';
import Typography from '../../../components/Text/Typography';
import CustomButton from '../../../components/CustomButton';

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
	onlineText: {
		color: '#1CAF20',
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
	const isMyMessage = message.myMessage;
	const backgroundColor = isMyMessage ? '#E0F7FF' : '#fff';
	return (
		<View
			style={{
				marginTop: 15,
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
				{/*<Image*/}
				{/*	source={iconMyMessage}*/}
				{/*	style={{*/}
				{/*		width: 30,*/}
				{/*		height: 26,*/}
				{/*		backgroundColor: 'transparent',*/}
				{/*		zIndex: 1,*/}
				{/*		right: 0,*/}
				{/*		position: 'absolute',*/}
				{/*	}}*/}
				{/*/>*/}
				<Text
					style={{
						fontSize: 16,
						fontWeight: '400',
						lineHeight: 19,
					}}
				>
					{message.message}
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
	const [messages, setMessages] = useState([
		{
			message: 'Hello',
			myMessage: false,
		},
	]);
	const [message, setMessage] = useState('');

	const handleAddMessage = () => {
		setMessages([...messages, { message, myMessage: true }]);
		setMessage('');
	};

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
						<View>
							<Typography variant="h3">Tameke Jonson</Typography>
							<Typography>Tameke Jonson</Typography>
						</View>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<View style={styles.online} />
						<Text style={styles.onlineText}>online</Text>
					</View>
				</View>
				<ScrollPage style={{ backgroundColor: '#F3F3F3' }}>
					<FlatList
						data={messages}
						keyExtractor={item => item.message}
						renderItem={props => <RenderMessage message={props.item} />}
					/>
				</ScrollPage>
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
