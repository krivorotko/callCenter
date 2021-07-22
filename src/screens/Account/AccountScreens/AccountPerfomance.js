import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	TextInput,
	Text,
	Image,
	TouchableOpacity,
	FlatList,
	Dimensions,
} from 'react-native';
import ScrollPage from '../../../hoc/ScrollPage';
import AvatarUser from '../../Home/components/AvatarUser';
import Typography from '../../../components/Text/Typography';
import SpacerLine from '../../../components/SpacerLine';

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
	earningsTitle: {
		fontWeight: '400',
		fontSize: 16,
		marginTop: 25,
		lineHeight: 18,
	},
	earningsDescription: {
		fontWeight: '500',
		marginTop: 15,
		fontSize: 24,
		lineHeight: 28,
	},
	step: {
		paddingHorizontal: 7,
		paddingVertical: 3,
		marginTop: 12,
		backgroundColor: '#1FB8F1',
		minWidth: 150,
		position: 'relative',
		maxWidth: 190,
	},
	stepSelected: {
		backgroundColor: '#FFAB2E',
	},
	stepText: {
		fontSize: 16,
		color: '#fff',
		lineHeight: 19,
	},
	popup: {
		width: 144,
		height: 74,
		backgroundColor: '#FFAB2E',
		borderRadius: 10,
		position: 'absolute',
		right: 7,
		top: -10,
	},
	triangle: {
		width: 0,
		height: 0,
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderLeftWidth: 14,
		borderRightWidth: 14,
		borderBottomWidth: 23,
		borderLeftColor: 'transparent',
		borderRightColor: 'transparent',
		borderBottomColor: 'red',
		transform: [{ rotate: '-90deg' }],
		right: 144 + 7 + 14,
	},
});

const AccountPerfomance = () => {
	const { width } = Dimensions.get('window');
	const arrowRight = require('../../../assets/icons/arrow.png');
	const [earlings, setEarlings] = useState([]);
	const [earling, setEarling] = useState(null);

	const handleSelectEarlingPress = item => {
		setEarling(item);
	};

	useEffect(() => {
		const result = [];

		for (let i = 1; i < 30; i++) {
			result.push({ id: i, value: Math.floor(Math.random() * 100) });
		}
		setEarlings(result);
	}, []);

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
					style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
				>
					<Text
						style={{
							color: '#1FB8F1',
							fontSize: 24,
							fontWeight: '500',
						}}
					>
						Contact info
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
				<Text style={styles.title}>My perfomance</Text>

				<Text style={{ marginTop: 21, fontWeight: '500', fontSize: 18, lineHeight: 21 }}>
					Earnings
				</Text>
				<View
					style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
				>
					<View>
						<Text style={styles.earningsTitle}>Today</Text>
						<Text style={styles.earningsTitle}>This week</Text>
						<Text style={styles.earningsTitle}>Last 30 Days</Text>
					</View>
					<View>
						<Text style={styles.earningsDescription}>$ 145.15</Text>
						<Text style={styles.earningsDescription}>$ 1,345.23</Text>
						<Text style={styles.earningsDescription}>$ 26,762.28</Text>
					</View>
				</View>
				<Text style={{ fontWeight: '500', fontSize: 18, lineHeight: 21, marginTop: 48 }}>
					Earnings (Last 30 Days)
				</Text>
				{earlings.map(item => {
					const isSelected = item.id === earling?.id;
					const viewWidth = 150 + width / (item.value || 20) / 2;
					return (
						<View style={{ position: 'relative' }}>
							<TouchableOpacity
								onPress={() => handleSelectEarlingPress(item)}
								key={item.id + '_lings'}
								style={[
									styles.step,
									isSelected && styles.stepSelected,
									{ width: viewWidth || 150 },
								]}
							>
								<Text style={[styles.stepText, isSelected && { color: '#000' }]}>
									Sep {item.id}
								</Text>
							</TouchableOpacity>

							{isSelected && (
								<View style={styles.popup}>
									{/*<View styles={styles.triangle} />*/}
									<Text
										style={{
											marginTop: 10,
											textAlign: 'center',
											fontWeight: '400',
											fontSize: 16,
											lineHeight: 18,
										}}
									>
										8 hours
									</Text>
									<Text
										style={{
											textAlign: 'center',
											marginTop: 5,
											fontSize: 24,
											fontWeight: '500',
											lineHeight: 28,
										}}
									>
										$ {item.value}
									</Text>
								</View>
							)}
						</View>
					);
				})}
			</ScrollPage>
		</SafeAreaView>
	);
};

export default AccountPerfomance;
