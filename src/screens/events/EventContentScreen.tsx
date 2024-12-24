import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Colors from '@src/styles/Colors';
import { useRoute } from '@react-navigation/native';
import { MainRouteProps } from '@src/types/stacks/MainStacksType';

const EventContentScreen = (): React.JSX.Element => {
    const { params } = useRoute<MainRouteProps>();
    return (
        <ScrollView style={{ flexGrow: 1, backgroundColor: Colors.white }}>
            <Image source={params.item.image} style={styles.image} resizeMode={'stretch'} />
            <View style={styles.container}>
                <View
                    style={{
                        backgroundColor: Colors.white,
                        padding: 16,
                        width: '100%',
                        borderRadius: 16,
                        alignSelf: 'center',
                        position: 'absolute',
                        top: -60,
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.1,
                        elevation: 3,
                    }}
                >
                    <Text style={styles.title}>{params.item.title}</Text>
                    <Text style={{
                        color: Colors.textGray,
                        fontSize: 10,
                    }}>{params.item.date}</Text>
                    <Text style={{
                        color: Colors.textBlue,
                        fontSize: 14,
                        marginTop: 4,
                    }}>{params.item.time}</Text>
                </View>
                <Text style={{ fontWeight: '900', fontSize: 16, marginTop: 50, }}>About</Text>
                <Text style={{ fontWeight: '200', fontSize: 16, marginTop: 12, }}>{params.item.description}</Text>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 16,
        color: Colors.textBlack,
        marginLeft: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.textBlack,
        marginBottom: 12,
    },
    image: {
        alignSelf: 'center',
        width: Dimensions.get('window').width,
        marginTop: 20,
    },
    description: {
        fontSize: 16,
        color: '#666666',
        marginBottom: 24,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        padding: 12,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.input.borderColor,
        borderRadius: 8,
    },
    infoText: {
        fontSize: 16,
        color: '#333333',
        marginLeft: 8,
    },
});
export default EventContentScreen;
