import React from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Register() {
    return(
        <View>
            <TextInput
                placeholder="Digite nome do produto"
            />
            <TextInput
                placeholder="Digite preço do produto"
            />
            <TextInput
                placeholder="Digite a quantidade do produto"
            />
            <Button title="Cadastrar produto"/>
        </View>
    );
}