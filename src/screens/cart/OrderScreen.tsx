import React from 'react';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Navigation from '@src/navigation/navigation';
import Colors from '@src/styles/Colors';
import { Screens } from '@src/navigation/const';
import { useDispatch } from 'react-redux';
import { resetProductToBasket } from '@src/store/shop/shopSlice';

const OrderScreen = (): React.JSX.Element => {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: '400',
                    textAlign: 'center',
                    paddingHorizontal: 40,
                    paddingTop: 40,
                }}
            >
                Your order has been successfully placed
            </Text>
            <Image
                source={require('@src/assets/img-pizza/cart-success/cart-success.png')}
                resizeMode="cover"
                style={{
                    marginBottom: 50,
                }}
            />
            <Image
                source={require('@src/assets/img-pizza/cart-qr/QR.png')}
                resizeMode="cover"
            />
            <Pressable
                onPress={() => {
                    dispatch(resetProductToBasket());
                    Navigation.navigate(Screens.SHOP);
                }}
                style={{
                    borderRadius: 30,
                    paddingHorizontal: 80,
                    paddingVertical: 12,
                    position: 'absolute',
                    bottom: 40,
                    backgroundColor: Colors.button.buttonOrange,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{
                        color: Colors.textBlack,
                        fontSize: 20,
                        fontWeight: '500',
                    }}
                >
                    Back to menu
                </Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
    },
});
export default OrderScreen;
