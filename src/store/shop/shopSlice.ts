import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '@src/store/store';
import { Product } from '@src/utils/common';

export const shopSelector = (state: RootState): ShopState => state.shop;

export interface ShopState {
    totalCount: number;
    itemBasket: { product: Product; quantity: number }[];
}

const initialState = {
    totalCount: 0,
    itemBasket: [],
};

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        resetProductToBasket: (state) => {
            state.itemBasket = [];
            state.totalCount = 0;
        },
        addProductToBasket: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.itemBasket.find(
                (item) => item.product.id === action.payload.id
            );

            if (existingProduct) {
                // Если продукт уже в корзине, увеличиваем количество
                existingProduct.quantity += 1;
            } else {
                // Если продукта нет в корзине, добавляем его
                state.itemBasket.push({ product: action.payload, quantity: 1 });
            }

            // Пересчитываем общую сумму
            state.totalCount += action.payload.price;
        },
        removeProductFromBasket: (state, action: PayloadAction<number>) => {
            const productIndex = state.itemBasket.findIndex(
                (item) => item.product.id === action.payload
            );

            if (productIndex !== -1) {
                const product = state.itemBasket[productIndex];
                state.totalCount -= product.product.price * product.quantity;

                // Удаляем продукт из корзины
                state.itemBasket.splice(productIndex, 1);
            }
        },
        decreaseProductQuantity: (state, action: PayloadAction<number>) => {
            const product = state.itemBasket.find(
                (item) => item.product.id === action.payload
            );

            if (product) {
                product.quantity -= 1;
                state.totalCount -= product.product.price;

                // Если количество продукта достигает 0, удаляем его
                if (product.quantity <= 0) {
                    state.itemBasket = state.itemBasket.filter(
                        (item) => item.product.id !== action.payload
                    );
                }
            }
        },
    },
});

export const shopSliceReducer = shopSlice.reducer;
export const {
    addProductToBasket,
    resetProductToBasket,
    decreaseProductQuantity,
    removeProductFromBasket,
} = shopSlice.actions;
