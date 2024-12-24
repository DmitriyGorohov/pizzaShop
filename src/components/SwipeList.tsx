import React, { type FC } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Colors from '@src/styles/Colors';
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    PanGestureHandlerProps,
} from 'react-native-gesture-handler';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import Counter from '@src/components/Counter';
import {
    addProductToBasket,
    decreaseProductQuantity,
    removeProductFromBasket,
} from '@src/store/shop/shopSlice';
import { useDispatch } from 'react-redux';
import { Product } from '@src/utils/common';

interface SwipeListProps
    extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
    item: { product: Product; quantity: number };
}

const TRANSLATE_X_THRESHOLD = Dimensions.get('window').width * 0.2;
const SwipeList: FC<SwipeListProps> = ({
    item,
    simultaneousHandlers,
}): React.JSX.Element => {
    const dispatch = useDispatch();
    const translateX = useSharedValue(0);

    const changeSwipe = () => {
        dispatch(removeProductFromBasket(item.product.id));
    };

    const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>(
        {
            onActive: (event) => {
                if (event.translationX < 0) {
                    translateX.value = event.translationX;
                }
            },
            onEnd: () => {
                const show = translateX.value < -TRANSLATE_X_THRESHOLD;
                if (show) {
                    translateX.value = withTiming(-TRANSLATE_X_THRESHOLD);
                } else {
                    translateX.value = withTiming(0, { duration: 200 });
                }
            },
        }
    );

    const translateStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            },
        ],
    }));
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={changeSwipe}
                style={{
                    height: 87,
                    width: 320,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    borderRadius: 12,
                    backgroundColor: Colors.button.buttonRed,
                    position: 'absolute',
                    right: 0,
                }}
            >
                <Image
                    source={require('@src/assets/img-pizza/remove/remove.png')}
                    resizeMode={'cover'}
                    style={{ position: 'absolute', right: 30, top: 30 }}
                />
            </TouchableOpacity>
            <PanGestureHandler
                simultaneousHandlers={simultaneousHandlers}
                onGestureEvent={panGesture}
            >
                <Animated.View style={[styles.cartItem, translateStyle]}>
                    <Image
                        source={item.product.image}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.infoContainer}>
                        <Text numberOfLines={2} style={styles.title}>
                            {item.product.title}
                        </Text>
                        <View style={styles.detailsContainer}>
                            <Text style={styles.price}>
                                $ {item.product.price}
                            </Text>
                        </View>
                    </View>
                    <Counter
                        newCounter
                        width={50}
                        quantity={item.quantity}
                        onIncrement={() =>
                            dispatch(addProductToBasket(item.product))
                        }
                        onDecrement={() =>
                            dispatch(decreaseProductQuantity(item.product.id))
                        }
                    />
                    <View style={styles.detailsContainer}>
                        <Text style={styles.price}>$ {item.product.price}</Text>
                    </View>
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};
const styles = StyleSheet.create({
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        borderColor: Colors.button.buttonOrange,
        borderWidth: 1,
        marginBottom: 16,
        borderRadius: 12,
        width: '100%',
    },
    image: {
        borderRadius: 0,
        marginRight: 12,
    },
    infoContainer: {
        alignItems: 'center',
        width: 80,
        height: 60,
        marginRight: 10,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 10,
        fontWeight: '500',
        textAlign: 'center',
        color: Colors.textBlack,
        marginBottom: 4,
    },
    detailsContainer: {
        // alignItems: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.textBlack,
        marginRight: 8,
    },
    weight: {
        fontSize: 12,
        color: Colors.textGray,
    },
});
export default SwipeList;
