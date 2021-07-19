import React from 'react';
import { View, StyleSheet, Image } from 'react-native';


const AvatarUser = ({
											user,
											style = {},
										}) => {
	const userIcon = require('../../../assets/icons/user.png');

	return <Image style={[styles.container, style]} source={userIcon} />;
};

const styles = StyleSheet.create({
	container: {
		width: 70,
		height: 70,
		borderRadius: 50,
	},
});

export default AvatarUser;
