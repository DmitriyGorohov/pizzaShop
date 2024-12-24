import { KeyboardView } from '@src/components/base/KeyboardView';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Colors from '@src/styles/Colors';
import Navigation from '@src/navigation/navigation';

const ContactsScreen = (): React.JSX.Element => {
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [comment, setComment] = useState('');
    const [taskIndex, setTaskIndex] = useState('');

    return (
        <View style={styles.container}>
            <KeyboardView isScroll scrollViewStyle={{ paddingBottom: 50 }}>
                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: 16,
                        paddingTop: 20,
                        paddingBottom: 50,
                    }}
                >
                    <View style={styles.form}>
                        <Text style={styles.label}>Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.textBlack}
                            placeholder={'Phone number'}
                            value={phone}
                            keyboardType={'phone-pad'}
                            onChangeText={setPhone}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Address</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.textBlack}
                            placeholder={'Address'}
                            value={address}
                            onChangeText={setAddress}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Data</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.textBlack}
                            placeholder={'Comments'}
                            value={comment}
                            onChangeText={setComment}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Index</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.textBlack}
                            placeholder={'Index'}
                            value={taskIndex}
                            onChangeText={setTaskIndex}
                        />
                    </View>
                </View>
            </KeyboardView>
            <Pressable
                onPress={() => Navigation.pop()}
                style={{
                    alignSelf: 'center',
                    borderRadius: 30,
                    paddingHorizontal: 80,
                    paddingVertical: 12,
                    position: 'absolute',
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
                    Save
                </Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    form: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.textBlack,
        marginBottom: 4,
    },
    input: {
        color: Colors.textBlack,
        fontSize: 16,
        fontWeight: '400',
        paddingHorizontal: 16,
        width: '100%',
        height: 50,
        backgroundColor: Colors.button.buttonOrange,
        borderRadius: 30,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 7 },
        shadowOpacity: 0.1,
        elevation: 11,
    },
});
export default ContactsScreen;
