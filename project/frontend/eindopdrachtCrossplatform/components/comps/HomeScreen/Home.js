import { StyleSheet, View, TouchableOpacity, Text } from "react-native"
import { ItemList } from '../itemList/List'
import { useTheme } from '../../../assets/styles/toggle';
import { useNavigation } from '@react-navigation/native';


const style = StyleSheet.create({
    flex: {
        flex: 1
    },
    button: {
        display: "flex",
        alignItems: "center",
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderStyle: "solid",
        
    },
    text: {
        fontWeight: "bold",
        fontSize: 16,
    },
})

const Home = () => {
    const { styles } = useTheme();
    const navigation = useNavigation()
    const navigateToCreate = () =>{
        navigation.navigate("Create",{})
    }
    const component = (
            <View style={[styles.container, style.flex]}>
                <TouchableOpacity style={[styles.container, style.button, styles.accentContainer]} onPress={navigateToCreate}>
                    <Text style={[styles.text, style.text]}>Create</Text>
                </TouchableOpacity>
                <ItemList/>
            </View>
    )
    return component
}

export { Home }