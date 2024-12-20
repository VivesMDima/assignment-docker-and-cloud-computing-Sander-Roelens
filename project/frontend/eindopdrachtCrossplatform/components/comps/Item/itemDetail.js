import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { Text, View,Image, StyleSheet, TouchableOpacity, ScrollView} from "react-native"
import { useTheme } from '../../../assets/styles/toggle';
import { getanomalies, size } from "@/api/anomaly";
import { Dimensions } from "react-native";
const window = Dimensions.get("window")
const isPhone = window.height > window.width
const buttonStyle = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 16,
    },
    button: {
        display: "flex",
        alignItems: "center",
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderStyle: "solid",
        
    },
    image:{
        aspectRatio: 1/1,
        height: "50vh",
        width: isPhone ? "100%" : "50vh",
        objectFit: "cover",
        margin: 10,
        borderWidth: isPhone ? 2 : 1
        
    },
    imageScoller:{
        display: "flex",
        flexDirection: isPhone ? "column" : "row",
        justifyContent: "space-evenly",
        padding: 10,
        alignItems: "center",
        overflowX: "auto"
    },
    fieldContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 10,
        
    },
    title:{
        width: "100%",
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 28,
    },
    description: {
        fontSize: 16,  
        textAlign: "center"
    },
    field: {
        fontWeight: "bold"
    }
})

const ItemDetail = ({route, navigation}) => {
    const { styles} = useTheme()
    const [item, setItem] = useState()
    useEffect(() => {
        getanomalies(0,size).then((output) => {
            setItem(output.find((i) => {
                return i.id == route.params.itemId
            }))
        })
    }, [])
    if(item)
        return <>
        
        <Text style={[styles.text,buttonStyle.title,styles.container]} >{item.title} ({item.id})</Text>
        <ScrollView  style={styles.container}
                    accessible={true}
                    accessibilityHint="Details of the selected item"
                    accessibilityLabel={`${item.title} is located at ${item.x} X and ${item.y} Y on the planet ${item.world}`}
                    accessibilityRole="summary"
                    accessibilityLanguage="en"
                >
                        <View>
                        <View style={buttonStyle.fieldContainer}>
                            <Text style={[styles.text,buttonStyle.field]} >X: {item.x}</Text>
                            <Text style={[styles.text,buttonStyle.field]} >Y: {item.y}</Text>
                            <Text style={[styles.text,buttonStyle.field]} >World: {item.world}</Text>
                        </View>
                        <Text style={[styles.text,buttonStyle.description]} 
                            accessible={true}
                            accessibilityHint="Description of the selected item"
                            accessibilityRole="text"
                            accessibilityLanguage="en"

                        >{item.description}</Text>

                        <View style={buttonStyle.imageScoller}>
                        {item.images.map((imageUrl,index) =>  
                        <Image key={index} style={[buttonStyle.image,styles.container]} source={{uri: imageUrl,headers: {Accept: '*/*',}}} />
                        )
      }
                        </View>
                    </View>
        </ScrollView>
        <TouchableOpacity 
        style={[styles.accentContainer,buttonStyle.button,styles.container]}
        onPress={navigation.goBack}
        accessible={true}
        accessibilityLabel={`Back button`}
        accessibilityHint="Click to go back to the previous screen."
        accessibilityRole="button"
        accessibilityLanguage="en"
        >
            <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
    </>
}

export {ItemDetail}