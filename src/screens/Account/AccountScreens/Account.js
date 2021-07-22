import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	TextInput,
	Text,
	Image,
	TouchableOpacity,
} from 'react-native';
import ScrollPage from '../../../hoc/ScrollPage';
import AvatarUser from '../../Home/components/AvatarUser';
import Typography from '../../../components/Text/Typography';
import SpacerLine from '../../../components/SpacerLine';
import { useNavigation } from '@react-navigation/native';
import screens from '../../../screens';

const user = {
	image: '',
	firstName: 'Jack',
	lastName: 'Smith',
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 0,
	},
	userInfo: {
		marginTop: 18,
		flexDirection: 'row',
	},
	description: {
		marginTop: 15,
	},
	title: {
		fontWeight: '500',
		fontSize: 24,
	},
	inputTitle: {
		fontWeight: '400',
		fontSize: 16,
		color: '#727171',
	},
	input: {
		marginTop: 7,
		borderRadius: 5,
		backgroundColor: '#F3F3F3',
		paddingVertical: 8,
		paddingHorizontal: 11,
	},
});

const Account = () => {
	const navigation = useNavigation();
	const arrowRight = require('../../../assets/icons/arrow.png');

	const goToPerfomance = () => {
		navigation.navigate(screens.AccountsRoot, {
			screen: screens.AccountPerfomance,
		});
	};
	return (
		<SafeAreaView style={styles.container}>
			<ScrollPage>
				<View style={styles.userInfo}>
					<AvatarUser style={{ marginRight: 7 }} />
					<View>
						<Typography variant="large">{user.firstName}</Typography>
						<Typography variant="large">{user.lastName}</Typography>
					</View>
				</View>
				<Text style={{ fontSize: 18, fontWeight: '400', marginTop: 21 }}>Call center agent</Text>
				<SpacerLine style={{ marginTop: 11 }} />
				<TouchableOpacity
					onPress={goToPerfomance}
					style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
				>
					<Text
						style={{
							color: '#1FB8F1',
							fontSize: 24,
							fontWeight: '500',
						}}
					>
						My perfomance
					</Text>
					<Image source={arrowRight} style={{ width: 18, height: 22 }} />
				</TouchableOpacity>
				<SpacerLine style={{ marginTop: 13 }} />
				<TouchableOpacity
					style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
				>
					<Text
						style={{
							color: '#1FB8F1',
							fontSize: 24,
							fontWeight: '500',
						}}
					>
						Notification
					</Text>
					<Image source={arrowRight} style={{ width: 18, height: 22 }} />
				</TouchableOpacity>
				<SpacerLine style={{ marginTop: 13 }} />
				<Text style={styles.title}>Contact info</Text>

				<View style={{ marginTop: 16 }}>
					<Text style={styles.inputTitle}>First Name</Text>
					<TextInput value="Jack" style={styles.input} />
				</View>

				<View style={{ marginTop: 16 }}>
					<Text style={styles.inputTitle}>Last Name</Text>
					<TextInput value="Smith" style={styles.input} />
				</View>

				<View style={{ marginTop: 16 }}>
					<Text style={styles.inputTitle}>Adress</Text>
					<TextInput placeholder="123 sample way" style={styles.input} />
				</View>

				<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
					<View>
						<Text style={styles.inputTitle}>State</Text>
						<TextInput placeholder="123 sample way" style={[styles.input, { width: 150 }]} />
					</View>
					<View>
						<Text style={styles.inputTitle}>Zip</Text>
						<TextInput placeholder="12345" style={[styles.input, { width: 150 }]} />
					</View>
				</View>

				<View style={{ marginTop: 16, marginBottom: 40 }}>
					<Text style={styles.inputTitle}>E-mail</Text>
					<TextInput placeholder="test@test.ru" style={styles.input} />
				</View>
			</ScrollPage>
		</SafeAreaView>
	);
};

export default Account;
