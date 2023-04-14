import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as Yup from 'yup';
import CustomTextInput from "../../components/CustomTextInput";
import { ProductDatabaseHelper } from "../../db/productdbhelper";
import { RegisterNavigationProps } from "../../routes";

const initialValues = {
    productName: '',
};

const RegisterSchema = Yup.object().shape({
    productName: Yup.string()
      .min(5, 'Valor digitado muito curto')
      .max(50, 'Valor digitado muito longo')
      .required('Campo de preenchimento obrigatório'),
});

interface RegisterProps {
    isUpdatingProduct?: boolean;
}

export default function Register({isUpdatingProduct}: RegisterProps) {
    const navigation = useNavigation<RegisterNavigationProps>();

    return(
        <Formik
            initialValues={{productName: initialValues.productName}}
            onSubmit={(values) => {
                console.log(`values: ${JSON.stringify(values)}`);
                ProductDatabaseHelper.saveProduct(values.productName);
                navigation.replace("Listing");
            }}
            validationSchema={RegisterSchema}
        >
            {({ handleChange, handleSubmit, values, errors }) => (
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {isUpdatingProduct === true ? "Atualizar produto": "Registrar produto" }
                    </Text>
                    <CustomTextInput
                        value={values.productName}
                        error={errors.productName}
                        placeholder="Digite nome do produto"
                        onChangeText={handleChange('productName')}
                    />
                    <Button 
                        title="Cadastrar produto" 
                        onPress={handleSubmit}
                    />
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
    },
    title: {
        padding: 16,
        textAlign: 'center',
        fontSize: 36,
        color: 'black',
    }
});