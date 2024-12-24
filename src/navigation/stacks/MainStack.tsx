import React from 'react';
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import { Screens } from '../const';
import MainScreen from '@src/screens/main/MainScreen';
import ShopScreen from '@src/screens/shop/ShopScreen';
import ContactsScreen from '@src/screens/contacts/ContactsScreen';
import EventsScreen from '@src/screens/events/EventsScreen';
import ReservationScreen from '@src/screens/reservation/ReservationScreen';
import BonusesScreen from '@src/screens/bonuses/BonusesScreen';
import Colors from '@src/styles/Colors';
import CartScreen from '@src/screens/cart/CartScreen';
import ReservationSuccessScreen from '@src/screens/reservation/ReservationSuccessScreen';
import OrderScreen from '@src/screens/cart/OrderScreen';
import EventContentScreen from '@src/screens/events/EventContentScreen';
import { Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { resetProductToBasket } from '@src/store/shop/shopSlice';

const Stack = createStackNavigator();

const MainStack = (): React.JSX.Element => {
    const dispatch = useDispatch();
    return (
        <Stack.Navigator initialRouteName={Screens.MAIN_SCREEN}>
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerShown: false,
                }}
                name={Screens.MAIN_SCREEN}
                component={MainScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerTitle: 'Menu',
                    headerTitleAlign: 'center',
                    headerBackTitle: 'Back',
                    headerTintColor: Colors.white,
                    headerBackTitleVisible: true,
                    headerBackTitleStyle: {
                        color: Colors.white,
                    },
                    headerStyle: {
                        backgroundColor: Colors.button.buttonRed,
                    },
                }}
                name={Screens.SHOP}
                component={ShopScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerTitle: 'Contacts',
                    headerTitleAlign: 'center',
                    headerBackTitle: 'Back',
                    headerTintColor: Colors.white,
                    headerBackTitleVisible: true,
                    headerBackTitleStyle: {
                        color: Colors.white,
                    },
                    headerStyle: {
                        backgroundColor: Colors.button.buttonRed,
                    },
                }}
                name={Screens.CONTACTS}
                component={ContactsScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerTitle: 'Events',
                    headerBackTitle: 'Back',
                    headerTitleAlign: 'center',
                    headerTintColor: Colors.white,
                    headerBackTitleVisible: true,
                    headerBackTitleStyle: {
                        color: Colors.white,
                    },
                    headerStyle: {
                        backgroundColor: Colors.button.buttonRed,
                    },
                }}
                name={Screens.EVENTS}
                component={EventsScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerTitle: 'Reservation',
                    headerBackTitle: 'Back',
                    headerTitleAlign: 'center',
                    headerTintColor: Colors.white,
                    headerBackTitleVisible: true,
                    headerBackTitleStyle: {
                        color: Colors.white,
                    },
                    headerStyle: {
                        backgroundColor: Colors.button.buttonRed,
                    },
                }}
                name={Screens.RESERVATION}
                component={ReservationScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerTitle: 'Shopping cart',
                    headerTitleAlign: 'center',
                    headerBackTitle: 'Back',
                    headerStyle: {
                        backgroundColor: Colors.button.buttonRed,
                    },
                    headerRight: () => {
                        return (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => dispatch(resetProductToBasket())}
                                style={{ marginRight: 16 }}
                            >
                                <Image
                                    source={require('@src/assets/img-pizza/remove/remove.png')}
                                />
                            </TouchableOpacity>
                        );
                    },
                    headerTintColor: Colors.white,
                    headerBackTitleVisible: true,
                    headerBackTitleStyle: {
                        color: Colors.white,
                    },
                }}
                name={Screens.CART}
                component={CartScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerBackTitleVisible: true,
                    headerBackTitle: 'Back',
                    headerTitleAlign: 'center',
                    headerTitle: 'Loyalty Card',
                    headerTintColor: Colors.white,
                    headerBackTitleStyle: {
                        color: Colors.white,
                    },
                    headerStyle: {
                        backgroundColor: Colors.button.buttonRed,
                    },
                }}
                name={Screens.BONUSES}
                component={BonusesScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerBackTitleVisible: true,
                    headerBackTitle: 'Back',
                    headerTitleAlign: 'center',
                    headerTitle: '',
                    headerTintColor: Colors.white,
                    headerBackTitleStyle: {
                        color: Colors.white,
                    },
                    headerStyle: {
                        backgroundColor: Colors.button.buttonRed,
                    },
                }}
                name={Screens.RESERVATION_SUCCESS}
                component={ReservationSuccessScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerBackTitleVisible: true,
                    headerBackTitle: 'Back',
                    headerTitleAlign: 'center',
                    headerTitle: 'Order',
                    headerStyle: {
                        backgroundColor: Colors.button.buttonRed,
                    },
                    headerTintColor: Colors.white,
                    headerBackTitleStyle: {
                        color: Colors.white,
                    },
                }}
                name={Screens.CART_SUCCESS}
                component={OrderScreen}
            />
            <Stack.Screen
                options={{
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                    headerBackTitleVisible: true,
                    headerBackTitle: 'Back',
                    headerTitleAlign: 'center',
                    headerTitle: 'Event',
                    headerTintColor: Colors.white,
                    headerBackTitleStyle: {
                        color: Colors.white,
                    },
                  headerStyle: {
                      backgroundColor: Colors.button.buttonRed,
                  },
                }}
                name={Screens.EVENTS_CONTENT}
                component={EventContentScreen}
            />
        </Stack.Navigator>
    );
};
export default MainStack;
