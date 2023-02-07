import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import {Feather} from '@expo/vector-icons';

const SearchScreen = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle} >
            <Feather style={styles.iconStyle} name="search" size={30} />
            <TextInput 
            style={styles.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            autoCapitalize='none'
            autoCorrect={false}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5, 
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: "row",
    },
    inputStyle: {
        borderColor: 'black',
        flex: 1,
        fontSize: 20,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    },

});

export default SearchScreen