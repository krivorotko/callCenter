import React from 'react';
import {
	Alert,
	Modal,
	StyleSheet,
	Text,
	Pressable,
	View,
	Image,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import SpacerLine from '../../../components/SpacerLine';

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		width: 343,
		backgroundColor: 'white',
		borderRadius: 5,
		alignItems: 'center',
		paddingHorizontal: 10,
		paddingVertical: 24,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	title: {
		fontWeight: '400',
		fontSize: 24,
		lineHeight: 28,
		textAlign: 'center',
	},
	description: {
		fontWeight: '400',
		fontSize: 16,
		lineHeight: 18,
		textAlign: 'center',
	},
});

const noop = () => {};

const ShiftModal = ({ hasVisible = false, onClose = noop }) => {
	const logo = require('../../../assets/images/logo.png');
	const handleButtonPress = () => {
		onClose();
	};

	return (
		<View style={styles.centeredView}>
			<Modal
				animationType={'fade'}
				transparent={true}
				visible={hasVisible}
				closeOnClick={true}
				onBackdropPress={handleButtonPress}
				onRequestClose={() => {
					console.log('REQUEST CLOSE!');
					handleButtonPress();
				}}
			>
				<View
					style={{
						position: 'absolute',
						width: '100%',
						height: '100%',
						justifyContent: 'center',
						backgroundColor: 'rgba(100,100,100, 0.5)',
						padding: 20,
					}}
				/>
				<TouchableOpacity onPress={handleButtonPress} style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={{ fontWeight: '500', fontSize: 24, lineHeight: 28, textAlign: 'center' }}>
							Need to make a shift change?
						</Text>
						<Text style={{ fontWeight: '400', fontSize: 16, lineHeight: 18, textAlign: 'center' }}>
							Choose between the two below options to start your shift change.
						</Text>

						<View style={{ marginTop: 59 }}>
							<Text style={styles.title}>Cover my shift</Text>
							<Text style={styles.description}>Put in a request to cover you shift</Text>
							<CustomButton style={{ marginTop: 10 }} title={'Continue'} />
						</View>
						<SpacerLine style={{ marginVertical: 17 }} />

						<View>
							<Text style={styles.title}>Trade my shift</Text>
							<Text style={styles.description}>Find someone to trade your shift</Text>
							<CustomButton style={{ marginTop: 10 }} title={'Continue'} />
						</View>

						<Image source={logo} style={{ width: 98, height: 53, marginTop: 36 }} />
					</View>
				</TouchableOpacity>
			</Modal>
		</View>
	);
};

export default ShiftModal;
