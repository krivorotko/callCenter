import React from 'react';
import {Text as RNText, Dimensions, Platform} from 'react-native';
import {SelectableText} from '@astrocoders/react-native-selectable-text';

const VARIANTS = {
    h1: {
        fontSize: 48,
        lineHeight: 64,
    },
    h2: {
        fontSize: 24,
        lineHeight: 32,
    },
    h3: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '400',
    },
    h4: {
        fontSize: 16,
        lineHeight: 24,
    },
    h5: {
        fontSize: 14,
        lineHeight: 24,
    },
    h6: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'bold',
    },
    body1: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: 'normal',
    },
    body2: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
    sub1: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'normal',
    },
    sub2: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 'normal',
    },
    allCaps: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
    sub3: {
        fontSize: 10,
        lineHeight: 12,
        fontWeight: 'normal',
    },
    mono: {
        fontSize: 14,
        lineHeight: 20,
    },
    large: {
        fontSize: 28,
        lineHeight: 32
    }
};

// Adjust fontSize/lineHeight for small width devices so stuff fits.
// Reduce all values by 2pt.
// TODO: Remove platform check is stuff is doesn't fit on android devices too.

const isSE = Platform.OS === 'ios' && Dimensions.get('window').width < 375;
export const FONT_SIZE_OFFSET = isSE ? 2 : 0;

const ADJUSTED_VARIANTS = Object.keys(VARIANTS).reduce((acc, item) => {
    let fontItem = VARIANTS[item];
    acc[item] = {
        ...fontItem,
        fontSize: fontItem.fontSize - FONT_SIZE_OFFSET,
        lineHeight: fontItem.lineHeight - FONT_SIZE_OFFSET,
    };
    return acc;
}, {});

const Typography = ({
                        style = {},
                        center = false,
                        selectable = false,
                        color = '#000000',
                        children,
                        variant = 'body1',
                        ...rest
                    }) => {
    const coreProps = ADJUSTED_VARIANTS[variant];
    const textProps = {
        style: {
            ...coreProps,
            ...(center && {textAlign: 'center'}),
            color,
            ...style,
        },
        ...rest,
    };
    if (selectable) {
        return <SelectableText {...textProps} value={children}/>;
    }
    return <RNText {...textProps}>{children}</RNText>;
};

export default Typography;
