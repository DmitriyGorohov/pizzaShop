import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Colors from '@src/styles/Colors';

interface CounterProps {
    quantity: number;
    width?: number;
    onIncrement: () => void;
    onDecrement: () => void;
    newCounter?: boolean;
}

const Counter: React.FC<CounterProps> = ({
    quantity,
    onIncrement,
    width,
    onDecrement,
  newCounter
}) => {
    return (
        <>
            {newCounter ? (
              <View style={styles.counterContainerNew}>
                  <TouchableOpacity
                    onPress={onIncrement}
                    style={[styles.counterButton, { alignItems: 'flex-start' }]}
                  >
                      <Image
                        source={require('@src/assets/img-pizza/up-arrow/up-arrow.png')}
                      />
                  </TouchableOpacity>
                  <Text style={styles.counterText}>{quantity}</Text>
                  <TouchableOpacity
                    onPress={onDecrement}
                    style={[styles.counterButton, { alignItems: 'flex-end' }]}
                  >
                      <Image
                        source={require('@src/assets/img-pizza/down-arrow/down-arrow.png')}
                      />
                  </TouchableOpacity>
              </View>
              ) : (
              <View style={[styles.counterContainer, width && { width }]}>
                  <TouchableOpacity
                    onPress={onDecrement}
                    style={[styles.counterButton, { alignItems: 'flex-start' }]}
                  >
                      <Text style={styles.counterText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.counterText}>{quantity}</Text>
                  <TouchableOpacity
                    onPress={onIncrement}
                    style={[styles.counterButton, { alignItems: 'flex-end' }]}
                  >
                      <Text style={styles.counterTextRight}>+</Text>
                  </TouchableOpacity>
              </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.button.buttonOrange,
        borderRadius: 8,
        padding: 10,
        borderWidth: 0.5,
        borderColor: Colors.gray,
    },
    counterContainerNew: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: Colors.white,
        padding: 10,
        marginRight: 10,
    },
    counterButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    counterText: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.textBlack,
    },
    counterTextRight: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.textBlack,
    },
    addButton: {
        backgroundColor: Colors.white,
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

export default Counter;
