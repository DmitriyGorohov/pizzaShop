import React from 'react';
import {
    FlatList,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import Colors from '@src/styles/Colors';
import {events, EventType} from '@src/utils/common';
import Navigation from '@src/navigation/navigation';
import {Screens} from '@src/navigation/const';

const EventsList = () => {
    const onPress = (item: EventType) => {
        Navigation.navigate(Screens.EVENTS_CONTENT, { item })
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={events}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.8} onPress={() => onPress(item)} style={styles.eventCard}>
                        <Image
                            source={item.image}
                            resizeMode={'cover'}
                        />
                    </TouchableOpacity>
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    eventCard: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 24,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.textBlack,
        marginBottom: 8,
    },
    description: {
        fontSize: 14,
        color: Colors.textGray,
        marginBottom: 12,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    date: {
        fontSize: 13,
        color: Colors.textGray,
    },
    time: {
        fontSize: 13,
        color: Colors.textGray,
    },
    arrowButton: {
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
});

export default EventsList;
