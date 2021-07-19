import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	View,
	Button,
	TextInput,
	FlatList,
	TouchableOpacity,
	Image,
	Text,
} from 'react-native';
import ScrollPage from '../../../hoc/ScrollPage';
import Typography from '../../../components/Text/Typography';
import CustomButton from '../../../components/CustomButton';
import StatDay from '../components/StatDay';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 0,
	},
});

const Stats = () => {
	const calendar = require('../../../assets/icons/calendar.png');
	const counters = require('../../../assets/icons/counters.png');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollPage>
				<Text style={{ fontSize: 24, fontWeight: '500', marginTop: 18 }}>Schedule Adherence</Text>
				<TouchableOpacity>
					<Image style={{ marginTop: 11, height: 31, width: '100%' }} source={calendar} />
				</TouchableOpacity>
				<View>
					<StatDay style={{ marginTop: 15 }} />
					<StatDay style={{ marginTop: 15 }} />
					<StatDay style={{ marginTop: 15 }} />
					<StatDay style={{ marginTop: 15 }} />
					<StatDay style={{ marginTop: 15 }} />
				</View>

				<Image
					source={counters}
					style={{ height: 280, width: '100%', marginTop: 15, marginBottom: 11 }}
				/>
			</ScrollPage>
		</SafeAreaView>
	);
};

export default Stats;
