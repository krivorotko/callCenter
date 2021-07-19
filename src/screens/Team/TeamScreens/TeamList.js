import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image,
} from 'react-native';
import ScrollPage from '../../../hoc/ScrollPage';
import Typography from '../../../components/Text/Typography';
import SpacerLine from '../../../components/SpacerLine';
import screens from '../../index';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 0,
	},
	shiftContainer: {
		flexDirection: 'row',
		marginTop: 16,
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
	return (
		<TouchableOpacity style={styles.shiftContainer} onPress={onPress}>
			<View style={{ flexDirection: 'row' }}>
				<Image style={styles.shiftIcon} source={user} />
				<View style={styles.online} />
				<View>
					<Typography variant="h3">Tameke Jonson</Typography>
					<Typography>Tameke Jonson</Typography>
				</View>
			</View>
			<View styles={styles.messageWrapper}>
				<Image source={messages} style={styles.messageImage} />
				<Text style={styles.messageCounter}>5</Text>
			</View>
		</TouchableOpacity>
	);
};

const TeamList = ({ navigation }) => {
	const handleMessagePress = () => {
		navigation.navigate(screens.TeamRoot, {
			screen: screens.TeamMessage,
		});
	};

	const shifts = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 },
		{ id: 6 },
		{ id: 7 },
		{ id: 8 },
	];
	return (
		<SafeAreaView style={styles.container}>
			<ScrollPage>
				<FlatList
					style={{ marginTop: 19 }}
					data={shifts}
					renderItem={({ item, index }) => (
						<TeamListItem item={item} onPress={handleMessagePress} />
					)}
					ItemSeparatorComponent={SpacerLine}
					keyExtractor={item => `${Date.now() + '_' + item.id}`}
				/>
			</ScrollPage>
		</SafeAreaView>
	);
};

export default TeamList;
