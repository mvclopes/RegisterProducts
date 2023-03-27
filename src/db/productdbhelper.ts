import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveProduct(productName: string) {
    try {
        let key: string = new Date().getTime() + "-" + productName.replace(/\s/g, '') 
        await AsyncStorage.setItem(key, productName);
    } catch (error) {
        console.error(`Failed to save product ${productName} - error: ${error}`);
    }
}

async function getAllProducts() {
    try {
        AsyncStorage.getAllKeys()
        .then((keys) => {
            AsyncStorage.multiGet(keys)
            .then((result) => {
                console.log(`${JSON.stringify(result)}`);
            })
            .catch((error) => console.error(`Failed to get all product - error: ${error}`));
        })
        .catch((error) => console.error(`Failed to get all product keys - error: ${error}`));
    } catch (error) {
        
    }
}

export const ProductDatabaseHelper = {
    saveProduct,
    getAllProducts
};