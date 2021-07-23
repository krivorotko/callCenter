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
					<StatDay day={'Monday'} date={'July 28, 8:30 am- 4:00 pm'} style={{ marginTop: 15 }} />
					<StatDay style={{ marginTop: 15 }} day={'Tuesday'} date={'July 29, 8:30 am- 4:00 pm'} />
					<StatDay style={{ marginTop: 15 }} day={'Wednesday'} date={'July 30, 8:30 am- 4:00 pm'} />
					<StatDay style={{ marginTop: 15 }} day={'Thursday'} date={'July 31, 8:30 am- 4:00 pm'} />
					<StatDay style={{ marginTop: 15 }} day={'Friday'} date={'August 1, 8:30 am- 4:00 pm'} />
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
