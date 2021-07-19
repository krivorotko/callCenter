import Animated from "react-native-reanimated";
import {TouchableOpacity, StyleSheet} from "react-native";
import {useOpenCloseTransition} from "../../../utils/animation/useOpenCloseTransition";
import React, {useRef} from "react";

const styles = StyleSheet.create({
    modalView: {
        borderRadius: 10,
        // Handle android.
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: 'white',
    }
})

const Wrapper = Animated.createAnimatedComponent(TouchableOpacity);

const ShiftChangeModal = () => {
    const translateY = useRef(new Animated.Value(500)).current;

    const [backgroundColor, toggleStatus] = useOpenCloseTransition({
        animatedValue: translateY,
        from: 500,
        to: 0,
    });

    const handleBackdropPress = () => {
        toggleStatus({isOpen: false, action: () => navigation.goBack()});
    };

    return (
        <Wrapper onPress={handleBackdropPress}
                 activeOpacity={1}
                 style={{
                     ...StyleSheet.absoluteFillObject,
                     backgroundColor,
                     justifyContent: 'flex-end',
                 }}>
            <Animated.View style={[styles.modalView, {transform: [{translateY}]}]}></Animated.View>
        </Wrapper>
    )
};

export default ShiftChangeModal;