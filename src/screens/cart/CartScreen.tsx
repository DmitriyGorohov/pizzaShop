import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import Colors from '@src/styles/Colors';
import { useSelector } from 'react-redux';
import { shopSelector } from '@src/store/shop/shopSlice';
import Navigation from '@src/navigation/navigation';
import CartList from '@src/components/CartList';
import { Screens } from '@src/navigation/const';

const CartScreen = (): React.JSX.Element => {
    const { totalCount, itemBasket } = useSelector(shopSelector);
    return (
        <View
            style={[
                styles.container,
                totalCount === 0 && { justifyContent: 'center' },
            ]}
        >
            {itemBasket.length > 0 && (
                <View
                    style={{
                        alignItems: 'center',
                        paddingVertical: 8,
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                        zIndex: 999,
                        flex: 1,
                        backgroundColor: Colors.white,
                    }}
                >
                    <View
                        style={{
                            paddingHorizontal: 12,
                            paddingTop: 12,
                            width: '100%',
                            marginBottom: 20,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 12,
                            }}
                        >
                            <Text
                                style={{
                                    color: Colors.textBlack,
                                    fontWeight: 700,
                                }}
                            >
                                Subtotal:{' '}
                            </Text>
                            <Text
                                style={{
                                    color: Colors.textBlack,
                                    fontWeight: 700,
                                }}
                            >
                                $ {totalCount.toFixed(2)}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 12,
                            }}
                        >
                            <Text
                                style={{
                                    color: Colors.textBlack,
                                    fontWeight: 700,
                                }}
                            >
                                Discount:{' '}
                            </Text>
                            <Text
                                style={{
                                    color: Colors.textBlack,
                                    fontWeight: 700,
                                }}
                            >
                                $ 0
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 12,
                            }}
                        >
                            <Text
                                style={{
                                    color: Colors.button.buttonOrange,
                                    fontWeight: 700,
                                }}
                            >
                                Total:{' '}
                            </Text>
                            <Text
                                style={{
                                    color: Colors.button.buttonOrange,
                                    fontWeight: 700,
                                }}
                            >
                                $ {totalCount.toFixed(2)}
                            </Text>
                        </View>
                    </View>
                  <Pressable
                    onPress={
                      itemBasket.length > 0
                        ? () => {
                          Navigation.navigate(Screens.CART_SUCCESS);
                        }
                        : null
                    }
                    style={{
                      borderRadius: 30,
                      paddingHorizontal: 80,
                      paddingVertical: 12,
                      opacity: itemBasket.length > 0 ? 1 : 0.5,
                      marginBottom: 40,
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
                      Order
                    </Text>
                  </Pressable>
                </View>
            )}
            {totalCount > 0 ? (
                <CartList />
            ) : (
                <View
                    style={{
                        paddingHorizontal: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        source={require('@src/assets/img-pizza/empty-cart/empty-cart.png')}
                        resizeMode="cover"
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            color: Colors.textBlack,
                            fontSize: 12,
                            fontWeight: '400',
                            marginBottom: 12,
                        }}
                    >
                        Basket is empty Choose the first course on the menu
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => Navigation.pop()}
                        style={{
                            borderRadius: 30,
                            paddingHorizontal: 50,
                            paddingVertical: 12,
                            backgroundColor: Colors.button.buttonOrange,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                color: Colors.textBlack,
                                fontSize: 12,
                                fontWeight: '300',
                            }}
                        >
                            Choose
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            {itemBasket.length < 1 && (
              <Pressable
                onPress={
                    itemBasket.length > 0
                      ? () => {
                          Navigation.navigate(Screens.CART_SUCCESS);
                      }
                      : null
                }
                style={{
                    borderRadius: 30,
                    paddingHorizontal: 80,
                    paddingVertical: 12,
                    position: 'absolute',
                    opacity: itemBasket.length > 0 ? 1 : 0.5,
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
                      Order
                  </Text>
              </Pressable>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
    },
});
export default CartScreen;
