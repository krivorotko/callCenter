import { Dimensions } from 'react-native';

const { width: sWidth, height: sHeight } = Dimensions.get('screen');
const { width: wWidth, height: wHeight } = Dimensions.get('window');

export const IS_SE = sWidth <= 375;
export const SCREEN_SIZE = { sWidth, sHeight, wWidth, wHeight };
