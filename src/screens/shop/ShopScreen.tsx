import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '@src/styles/Colors';
import SegmentedControl from '@src/components/SegmentedControl';
import ProductList from '@src/components/ProductList';
import {
    Product,
    allProducts,
    breakfasts,
    dinners,
    lunches,
} from '@src/utils/common';
import Navigation from '@src/navigation/navigation';
import { Screens } from '@src/navigation/const';
import { useSelector } from 'react-redux';
import { shopSelector } from '@src/store/shop/shopSlice';

const options = ['Pizza', 'Burger', 'Appetizers', 'Salad'];

const ShopScreen = (): React.JSX.Element => {
    const { totalCount, itemBasket } = useSelector(shopSelector);
    const [selectedOption, setSelectedOption] = useState('Pizza');
    const [value, setValue] = useState('');

    const getProducts = (): Product[] => {
        switch (selectedOption) {
            case 'Pizza':
                return breakfasts;
            case 'Burger':
                return lunches;
            case 'Appetizers':
                return dinners;
            case 'Salad':
                return allProducts;
            default:
                return [];
        }
    };

    // Отображаемые данные
    const products = getProducts().filter(product =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );

    const handleNavigateCart = () => {
        Navigation.navigate(Screens.CART);
    };

    return (
        <View style={styles.container}>
            <TextInput
              value={value}
              placeholder="Search"
              placeholderTextColor={Colors.textBlack}
              onChangeText={setValue}
              style={{
                  borderWidth: 1,
                  width: '100%',
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                  marginBottom: 14,
                  borderColor: Colors.button.buttonOrange,
                  borderRadius: 12,
              }}
            />
            <SegmentedControl
                options={options}
                selectedOption={selectedOption}
                onOptionPress={setSelectedOption}
            />
            <ProductList data={products} />
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleNavigateCart}
                style={styles.cartButton}
            >
                <Image
                    resizeMode="cover"
                    source={require('@src/assets/img/cart-icon/solar_cart-bold.png')}
                    style={styles.cartIcon}
                />
                <Text style={styles.cartText}>{totalCount} $</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.9}
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
                            zIndex: 999,
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
        paddingHorizontal: 16,
        backgroundColor: Colors.white,
        alignItems: 'center',
        paddingTop: 20,
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
export default ShopScreen;
