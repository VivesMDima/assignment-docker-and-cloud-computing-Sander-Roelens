import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native"
import { useTheme } from '../../../assets/styles/toggle';
import { Dimensions } from "react-native";

const window = Dimensions.get("window")
const isPhone = window.height > window.width

const itemStyle = StyleSheet.create({
    image: {
        height: isPhone ? "auto" : "100%",
        width: isPhone ? "100%" : "auto",
        aspectRatio: isPhone ? 1/1 : 2/1,
        resizeMode: "cover",
    },
    textContainer: {
        width: 'min-content',
        display: "flex",
        flexDirection: "row",
        width: "100%"
    },
    fieldContainer: {
        justifyContent: "center",
        width: "25%"
        
    },
    flexContainer: {
        overflow: "hidden",
        display: "flex",
        flexDirection: isPhone ? "column" : "row",
        margin: 10,
        width: isPhone ? "90%" : "40%",
        borderStyle: "solid",
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "gray",
    },
    titleText: {
        fontSize: isPhone ? 20 : 24,
        fontWeight: "bold",
        padding: 20,
        width: "75%"
    }
})

const ListItem = (props) => {
    const {item} = props
    const { styles } = useTheme();

const navigation = useNavigation()
    const handleClick = () => {
        navigation.navigate("Detail", { itemId: item.id})
    }
    if(item)
        return (
        <TouchableOpacity 
            style={[styles.container,itemStyle.flexContainer,styles.accentContainer]}
            onPress={handleClick}
            accessible={true}
            accessibilityLabel={`${item.title} is located at ${item.x} X and ${item.y} Y on the planet ${item.world}`}
            accessibilityHint="Click to open details of this item."
            accessibilityRole="button"
            accessibilityLanguage="en"

            >
            <View style={itemStyle.textContainer}>
                    <Text style={[styles.text, itemStyle.titleText]}>{item.title}</Text>
                <View style= {itemStyle.fieldContainer}>
                    <Text style={styles.text}>X: {item.x}</Text>
                    <Text style={styles.text}>Y: {item.y}</Text>
                    <Text style={styles.text}>World: {item.world}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export {ListItem}