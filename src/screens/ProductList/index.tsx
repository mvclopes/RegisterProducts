import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Product } from "../../models/Product";
import { ListingNavigationProps } from "../../routes";

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const navigation = useNavigation<ListingNavigationProps>();

    const goToRegister = () => {
        console.log("Go to Register");
        navigation.replace("Register");
    };

    useEffect(() => {
        AsyncStorage.getAllKeys((err, keys) => {
            AsyncStorage.multiGet(keys, (err, result) => {
                const products: Product[] = [];
                result.map((_result, i, product) => {
                    products.push({id: product[i][0], name: product[i][1] as string});
                });
                setProducts(products); 
            });
          });
      }, [])
    
    return(
        <>  
            <View style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={ ({item}) =>
                    <View style={styles.containerFlatList}>
                        <Text style={styles.textFlatTitle}>{item.name}</Text> 
                    </View>
                    }
                    keyExtractor={ item => item.id }
                />
            </View>
            
            <View style={styles.floatingButton}>
                <TouchableOpacity onPress={() => goToRegister()}>
                    <Text style={styles.floatingButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    floatingButton: {   
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        position: 'absolute',
        bottom: 24,
        right: 24,
        borderRadius: 100
    },
    floatingButtonText: {
        fontSize: 48,
        color: '#fff',
        textAlign: 'center',
    },
    container: {
        flex: 1,
    },
    containerFlatList: {
        backgroundColor: 'blue',
        height: 80,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
    textFlatTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
});