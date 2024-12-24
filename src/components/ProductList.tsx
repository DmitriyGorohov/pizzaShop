import { Product } from '@src/utils/common';
import React from 'react';
import {
    FlatList,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Colors from '@src/styles/Colors';
import { useDispatch, useSelector } from 'react-redux';
import {
    addProductToBasket,
    decreaseProductQuantity,
    shopSelector,
} from '@src/store/shop/shopSlice';
import Counter from '@src/components/Counter';

const ProductList = ({ data }: { data: Product[] }) => {
    const dispatch = useDispatch();
    const { itemBasket } = useSelector(shopSelector);

    return (
        <FlatList
            data={data}
            numColumns={2}
            bounces={false}
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
                <View style={[styles.product,
                    data.length === 1 && { width: '96%' },
                    index % 2 !== 0 && { marginRight: 0 },
                ]}>
                    <Image
                        resizeMode="cover"
                        source={item.image}
                        style={styles.image}
                    />

                    <Text numberOfLines={1} style={styles.title}>
                        {item.title}
                    </Text>

                    <Text style={styles.price}>$ {item.price}</Text>
                    <View style={styles.actionsContainer}>
                        {itemBasket.some(
                            (basketItem) => basketItem.product.id === item.id
                        ) ? (
                            <Counter
                                quantity={
                                    itemBasket.find(
                                        (basketItem) =>
                                            basketItem.product.id === item.id
                                    )?.quantity
                                }
                                onIncrement={() =>
                                    dispatch(addProductToBasket(item))
                                }
                                onDecrement={() =>
                                    dispatch(decreaseProductQuantity(item.id))
                                }
                            />
                        ) : (
                            <TouchableOpacity
                                onPress={() =>
                                    dispatch(addProductToBasket(item))
                                }
                                style={styles.addButton}
                            >
                                <Text style={styles.addButtonText}>
                                    Add to basket
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    product: {
        width: '45%',
        backgroundColor: Colors.white,
        marginRight: 24,
        borderWidth: 1,
        padding: 4,
        borderColor: Colors.button.buttonOrange,
        marginBottom: 13,
        borderRadius: 10,
    },
    contentContainerStyle: {
        width: '100%',
        paddingBottom: 90,
        marginTop: 12,
    },
    image: {
        alignSelf: 'center',
        width: '100%',
        height: 85,
        borderRadius: 12,
        marginBottom: 12,
    },
    title: {
        fontWeight: '400',
        fontSize: 12,
        textAlign: 'center',
        color: Colors.textBlack,
    },
    price: {
        paddingTop: 20,
        paddingBottom: 20,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '300',
        color: Colors.textBlack,
    },
    actionsContainer: {
        marginTop: 8,
        width: '100%',
    },
    addButton: {
        backgroundColor: Colors.button.buttonOrange,
        borderRadius: 8,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        elevation: 3,
    },
    addButtonText: {
        fontSize: 12,
        textAlign: 'center',
        color: Colors.textBlack,
    },
});

export default ProductList;
