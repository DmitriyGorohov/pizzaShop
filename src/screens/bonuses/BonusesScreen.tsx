import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import Colors from '@src/styles/Colors';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from '@src/navigation/navigation';

const BonusesScreen = (): React.JSX.Element => {
    const initialCards = Array(6).fill('');
    const [cards, setCards] = useState<string[]>(initialCards);
    const [modalVisible, setModalVisible] = useState(false);
    const [isError, setIsError] = useState(false);
    const [selectedCard, setSelectedCard] = useState<number | null>(null);
    const [inputValue, setInputValue] = useState('');
    const allAre = cards.slice(0, 6).every((element) => element === '1111');
    const nonEmptyCount = cards.filter((item) => item !== '').length;

    useEffect(() => {
        const loadCards = async () => {
            const savedCards = await AsyncStorage.getItem('cards');
            if (savedCards.length > 0) {
                setCards(JSON.parse(savedCards));
            }
        };
        loadCards();
    }, []);

    // Сохранение состояния в AsyncStorage
    const saveCards = async (newCards: string[]) => {
        await AsyncStorage.setItem('cards', JSON.stringify(newCards));
        setCards(newCards);
    };

    // Очистка AsyncStorage и сброс состояния
    const resetCards = async () => {
        await AsyncStorage.removeItem('cards');
        setCards(initialCards); // Сброс к первоначальному состоянию
    };

    // Открытие модалки
    const handleCardPress = (index: number) => {
        setSelectedCard(index);
        setModalVisible(true);
    };

    // Сохранение данных карточки
    const handleSave = () => {
        if (selectedCard !== null) {
            const newCards = [...cards];
            if (inputValue === '1111') {
                newCards[selectedCard] = inputValue;
                saveCards(newCards);
                setInputValue('');
                setSelectedCard(null);
                setModalVisible(false);
                setIsError(false);
            } else {
                setIsError(true);
            }
        }
    };
    return (
        <View style={styles.container}>
            <View
                style={{
                    marginTop: 12,
                    paddingVertical: 14,
                    paddingHorizontal: 24,
                    backgroundColor: Colors.button.buttonRed,
                    borderRadius: 12,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginBottom: 12,
                    }}
                >
                    <Text style={{ color: Colors.white }}>Loyalty card</Text>
                    <Text
                        style={{ color: Colors.white }}
                    >{`${nonEmptyCount}/6`}</Text>
                </View>
                <View
                    style={{
                        paddingVertical: 14,
                        paddingHorizontal: 24,
                        backgroundColor: Colors.white,
                        borderRadius: 12,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {cards.map((value, index) => (
                            <TouchableOpacity
                                key={index}
                                style={{ marginRight: 6, flexWrap: 'nowrap' }}
                                activeOpacity={1}
                                onPress={() => {
                                    if (index + 1 !== 8) {
                                        if (value !== '1111') {
                                            handleCardPress(index);
                                        }
                                    }
                                }}
                            >
                                {value === '1111' ? (
                                    <Image
                                        source={require('@src/assets/img-pizza/burger-15/burger.png')}
                                        resizeMode={'cover'}
                                    />
                                ) : (
                                    <Image
                                        source={require('@src/assets/img-pizza/empty-burger/Group.png')}
                                        resizeMode={'cover'}
                                    />
                                )}
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
            <Text
                style={{
                    color: Colors.textBlack,
                    fontSize: 18,
                    fontWeight: '400',
                    marginTop: 16,
                }}
            >
                Promotion terms and conditions: Eat specialty burgers at our
                restaurant 6 times and get 7 free!
            </Text>
            <Text
                style={{
                    color: Colors.textBlack,
                    fontSize: 20,
                    fontWeight: '600',
                    marginTop: 16,
                }}
            >
                History Rewards
            </Text>
            <View
                style={{
                    marginTop: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.textBlack,
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: Colors.textBlack,
                    }}
                >
                    +1 point
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                        paddingVertical: 6,
                        fontWeight: '400',
                        color: Colors.textGray,
                    }}
                >
                    24 June | 12:30
                </Text>
            </View>
            <View
                style={{
                    marginTop: 12,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.textBlack,
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: Colors.textBlack,
                    }}
                >
                    +1 point
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                        paddingVertical: 6,
                        fontWeight: '400',
                        color: Colors.textGray,
                    }}
                >
                    22 June | 12:30
                </Text>
            </View>
            <Modal isVisible={modalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Enter code</Text>
                        <TextInput
                            placeholderTextColor={Colors.textBlack}
                            style={[
                                styles.input,
                                isError && {
                                    borderWidth: 2,
                                    borderColor: Colors.button.buttonRed,
                                },
                            ]}
                            maxLength={4}
                            value={inputValue}
                            onChangeText={(text) => {
                                setIsError(false);
                                setInputValue(text);
                            }}
                            placeholder="Enter code"
                            keyboardType="number-pad"
                        />
                        {isError && (
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: '400',
                                    color: Colors.button.buttonRed,
                                    marginBottom: 12,
                                }}
                            >
                                The code is not correct
                            </Text>
                        )}
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={handleSave}
                                style={{
                                    backgroundColor: Colors.button.buttonRed,
                                    padding: 16,
                                    flex: 1,
                                    marginRight: 10,
                                    borderRadius: 12,
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontSize: 18,
                                        fontWeight: '400',
                                        color: Colors.white,
                                    }}
                                >
                                    Save
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    setInputValue('');
                                    setSelectedCard(null);
                                    setModalVisible(false);
                                    setIsError(false);
                                }}
                                style={{
                                    flex: 1,
                                    backgroundColor: Colors.button.buttonRed,
                                    padding: 16,
                                    borderRadius: 12,
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        color: Colors.white,
                                        fontSize: 18,
                                        fontWeight: '400',
                                    }}
                                >
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View
                style={{
                    paddingHorizontal: 16,
                    position: 'absolute',
                    alignSelf: 'center',
                    bottom: 40,
                    width: '100%',
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        if (!allAre) {
                            Navigation.pop();
                        } else {
                            resetCards();
                        }
                    }}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: Colors.button.buttonOrange,
                        borderRadius: 30,
                        paddingVertical: 12,
                    }}
                >
                    <Text
                        style={{
                            color: Colors.white,
                            fontSize: 20,
                            fontWeight: '700',
                        }}
                    >
                        {allAre ? 'Reset' : 'Back to menu'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
    },
    card: {
        width: Dimensions.get('window').width * 0.16,
        height: 65,
        backgroundColor: Colors.button.buttonRed,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 350,
        padding: 20,
        backgroundColor: Colors.white,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.textBlack,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        fontSize: 20,
        borderWidth: 0.5,
        borderColor: Colors.button.buttonRed,
        borderRadius: 30,
        paddingVertical: 12,
        backgroundColor: Colors.white,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
});
export default BonusesScreen;
