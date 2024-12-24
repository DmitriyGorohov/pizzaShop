import { type FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '@src/styles/Colors';
import React from 'react';
import Navigation from '@src/navigation/navigation';
import { Screens } from '@src/navigation/const';

interface ReservationSuccessScreenProps {}

const ReservationSuccessScreen: FC<
    ReservationSuccessScreenProps
> = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <Text
                style={{
                    color: Colors.textBlack,
                    fontSize: 24,
                  paddingTop: 30,
                  paddingBottom: 100,
                    fontWeight: '400',
                }}
            >
                Your reservation has been successfully placed
            </Text>
            <Image
                source={require('@src/assets/img-pizza/cart-success/cart-success.png')}
                resizeMode="cover"
            />
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => Navigation.navigate(Screens.MAIN_SCREEN)}
                style={{
                    backgroundColor: Colors.button.buttonOrange,
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 40,
                    paddingHorizontal: 80,
                    paddingVertical: 12,
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        color: Colors.textBlack,
                        fontWeight: '400',
                    }}
                >
                    Back to menu
                </Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
    },
});
export default ReservationSuccessScreen;
