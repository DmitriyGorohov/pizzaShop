import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';
import { menuData } from '@src/utils/common';
import Colors from '@src/styles/Colors';
import Navigation from '@src/navigation/navigation';
import { Screens } from '@src/navigation/const';
import { shopSelector } from '@src/store/shop/shopSlice';
import { useSelector } from 'react-redux';

const MainScreen = (): React.JSX.Element => {
    const { itemBasket } = useSelector(shopSelector);
    const handleNavigate = (screen: string) => {
        Navigation.navigate(screen);
    };

    const handleNavigateCart = () => {
        Navigation.navigate(Screens.CART);
    };

    const renderItem = ({ item }: { item: (typeof menuData)[0] }) => (
        <TouchableOpacity
            onPress={() => handleNavigate(item.route)}
            activeOpacity={0.7}
            style={styles.itemContainer}
        >
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor={'transparent'} />
            <Text
                style={{
                    color: Colors.white,
                    fontSize: 32,
                    fontWeight: '500',
                    textAlign: 'center',
                    zIndex: 999,
                    paddingTop: 100,
                    paddingBottom: 150,
                }}
            >
                Olimpic
            </Text>
            <Image
                source={require('@src/assets/img-pizza/background.png')}
                resizeMode={'cover'}
                style={{
                    position: 'absolute',
                    // bottom: 0,
                  height: '150%',
                    // top: -100,
                    // left: -700,
                }}
            />
            <FlatList
                data={menuData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleNavigateCart}
                style={styles.cartButton}
            >
                <Image
                    resizeMode="cover"
                    source={require('@src/assets/img-pizza/cart/cart-3-svgrepo-com1.png')}
                    style={styles.cartIcon}
                />
                {itemBasket.length > 0 && (
                    <View
                        style={{
                            width: 24,
                            height: 24,
                            borderRadius: 24 / 2,
                            backgroundColor: Colors.button.buttonRed,
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                        }}
                    >
                        <Text style={{ color: Colors.textOrange }}>
                            {itemBasket.length}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        padding: 16,
    },
    itemContainer: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 74,
        marginVertical: 8,
        backgroundColor: Colors.button.buttonOrange,
        borderRadius: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: '300',
    },
    icon: {
        width: 44,
        height: 44,
        resizeMode: 'cover',
    },
    cartButton: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 40,
        right: 20,
        padding: 16,
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        backgroundColor: Colors.button.buttonOrange,
    },
    cartIcon: {
        width: 40,
        height: 40,
    },
    cartText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
export default MainScreen;
