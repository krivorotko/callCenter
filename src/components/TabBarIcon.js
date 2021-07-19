import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

const BADGE_DIAMETER = 18;

const STATICS_MAP = {
    chats: 'messages',
    consultations: 'consultations',
    home: 'home',
};

export const TabBarIcon = ({focused, name}) => {
    const {image, color} = useSelector(state => state.statics);
    const toolbar = useSelector(state => state.toolbar);
    const toolbarKey = STATICS_MAP[name];
    const tabLocator = TAB_NAVIGATION[name.toUpperCase()];
    const isBadgeShown = !!toolbar[toolbarKey];
    const value = toolbar[toolbarKey];
    const displayedValue = value > 99 ? '99' : value;
    return (
        <View style={styles.iconContainer} {...createTestingProps(tabLocator)}>
            <FastImage
                style={[styles.icon, {tintColor: focused ? color.kit_mainColor : color.unactiveColor}]}
                source={{uri: image[`tabbar_${name}_icon`]}}
            />
            {isBadgeShown && (
                <View style={[styles.badge, {backgroundColor: color.kit_red}]}>
                    <Typography
                        center
                        variant="sub3"
                        color={color.kit_white}
                        {...createTestingProps(TAB_NAVIGATION.BADGE)}
                    >
                        {displayedValue}
                    </Typography>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        width: 24,
        height: 24,
    },
    icon: {
        width: 24,
        height: 24,
    },
    badge: {
        position: 'absolute',
        width: BADGE_DIAMETER,
        height: BADGE_DIAMETER,
        borderRadius: BADGE_DIAMETER / 2,
        right: -BADGE_DIAMETER / 3,
        top: -BADGE_DIAMETER / 3,
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
});

TabBarIcon.propTypes = {
    name: PropTypes.string.isRequired,
    focused: PropTypes.bool.isRequired,
};
