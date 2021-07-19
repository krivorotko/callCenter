/**
 * Line spacer to visually separate components
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Palette from "../styles/palette";

const LINE_HEIGHT = 0.5,
	MARGIN_VERTICAL = 8;

const SpacerLine = ({ style }) => <View style={[styles.line, style]} />;

export default SpacerLine;

const styles = StyleSheet.create({
	line: {
		alignSelf: 'stretch',
		height: LINE_HEIGHT,
		marginVertical: MARGIN_VERTICAL,
		backgroundColor: Palette.lightishGrey,
	},
});
