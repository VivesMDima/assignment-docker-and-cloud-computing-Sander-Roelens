import { useNavigation } from "@react-navigation/native"
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native"
import { useTheme } from '../../../assets/styles/toggle';
import { Dimensions } from "react-native";

const window = Dimensions.get("window")
const isPhone = window.height > window.width

const itemStyle = StyleSheet.create({
    image: {
        height: isPhone ? "auto" : "100%",
        width: isPhone ? "100%" : "50%",
        aspectRatio: isPhone ? 1/1 : 2/1,
        resizeMode: "cover",
        borderRadius: 10,
        borderWidth: 2, 
    },
    textContainer: {
        width: 'min-content',
    },
    flexContainer: {
        display: "flex",
        flexDirection: isPhone ? "column" : "row",
        margin: 10,
        padding: 10,
        justifyContent:"space-between",
        width: isPhone ? "80%" : "40%",
        borderStyle: "solid",
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: "gray",
    },
    textFields: {
        display: "flex",
        flexDirection: "row",
    },  
    titleText: {
        fontSize: 24,
        fontWeight: "bold",
        overflow: "visible"
    },
    smallerText: {
        fontSize: 16,
        padding: 3,
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
                <View style={itemStyle.textFields}>
                    <Text style={[styles.text, itemStyle.smallerText]}>X:</Text><Text style={[styles.text, itemStyle.smallerText]}>{item.x}</Text>
                </View>
                <View style={itemStyle.textFields}>
                    <Text style={[styles.text, itemStyle.smallerText]}>Y:</Text><Text style={[styles.text, itemStyle.smallerText]}>{item.y}</Text>
                </View>
                <View style={itemStyle.textFields}>
                    <Text style={[styles.text, itemStyle.smallerText]}>World:</Text><Text style={[styles.text, itemStyle.smallerText]}>{item.world}</Text>
                </View>
            </View>
            <Image style={[itemStyle.image, styles.container]} source={{uri: item.images[0]}} />
        </TouchableOpacity>
    )
}


export {ListItem}