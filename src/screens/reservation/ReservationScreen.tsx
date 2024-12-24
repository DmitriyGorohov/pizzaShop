import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardView } from '@src/components/base/KeyboardView';
import Colors from '@src/styles/Colors';
import Navigation from '@src/navigation/navigation';
import { Screens } from '@src/navigation/const';

const ReservationScreen = (): React.JSX.Element => {
    const [firstName, setFirstName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [tableName, setTableName] = React.useState('');
    const [time, setTime] = React.useState('');
    const [date, setDate] = React.useState('');

    const disabled =
        firstName === '' ||
        phoneNumber === '' ||
        tableName === '' ||
        time === '' ||
        date === '';

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
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.textBlack}
                            placeholder={'First name'}
                            value={firstName}
                            onChangeText={setFirstName}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType={'phone-pad'}
                            placeholderTextColor={Colors.textBlack}
                            placeholder={'Phone Number'}
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Table number</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.textBlack}
                            placeholder={'Task name'}
                            value={tableName}
                            onChangeText={setTableName}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>
                            Indicate time of the visit
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.textBlack}
                            placeholder={'HH.MM'}
                            value={time}
                            onChangeText={setTime}
                        />
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>Date</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.textBlack}
                            placeholder={'DD.MM.YY'}
                            value={date}
                            onChangeText={setDate}
                        />
                    </View>
                </View>
            </KeyboardView>
            <Pressable
                onPress={
                    disabled
                        ? null
                        : () => {
                              Navigation.navigate(Screens.RESERVATION_SUCCESS);
                          }
                }
                style={{
                    alignSelf: 'center',
                    borderRadius: 30,
                    paddingHorizontal: 80,
                    paddingVertical: 12,
                    position: 'absolute',
                    bottom: 40,
                    opacity: disabled ? 0.5 : 1,
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
                    Reservation
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
    cartIcon: {
        width: 24,
        height: 24,
    },
    cartText: {
        color: 'white',
        fontWeight: 'bold',
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
export default ReservationScreen;
