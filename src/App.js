import React, {memo} from 'react';
import {Provider} from "react-redux";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import NoConnectionWarning from "./components/NoConnectionWarning";
import {useNetInfo} from '@react-native-community/netinfo';
import AppNavigation from './navigators/App';
import configureStore from "./store/configureStore";

const store = configureStore();

export default memo(() => {
    const netInfo = useNetInfo();
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <AppNavigation/>
                    {!netInfo.isConnected && <NoConnectionWarning/>}
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    )
});