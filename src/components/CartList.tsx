import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import Colors from '@src/styles/Colors';
import { useSelector } from 'react-redux';
import { shopSelector } from '@src/store/shop/shopSlice';
import { ScrollView } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import SwipeList from '@src/components/SwipeList';

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

const CartList = () => {
    const { itemBasket } = useSelector(shopSelector);
    const scrollRef = useRef(null);

    return (
        <AnimatedScrollView ref={scrollRef} style={styles.container}>
            {itemBasket.map((item) => {
                return <SwipeList key={item.product.id} item={item} />;
            })}
        </AnimatedScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginBottom: 230,
        backgroundColor: Colors.white,
    },
});

export default CartList;
