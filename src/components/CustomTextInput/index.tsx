import React from 'react';
import {TextInput as RNTextInput, Text, TextInputProps, StyleSheet, Dimensions} from 'react-native';

interface CustomTextInputProps extends TextInputProps {
    error?: string;
}

export default function CustomTextInput({
    error,
    ...props
}: CustomTextInputProps) {
    return(
        <>
            <RNTextInput style={styles.container} {...props}/>
            { error && <Text style={styles.errorText}>{error}</Text>}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: '#FFFFFF90',
        padding: 10,
        width: Dimensions.get('screen').width - 80,
        borderRadius: 8,
    },
    textInput:{},
    errorText:{
        marginBottom: 10,
        color: '#FF0000',
    },
});