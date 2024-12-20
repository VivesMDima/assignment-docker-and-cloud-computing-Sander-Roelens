import { useNavigation, useRoute } from "@react-navigation/native"
import { Text,View, FlatList, StyleSheet, TouchableOpacity } from "react-native"
import { useTheme } from '../../../assets/styles/toggle';
import { SearchBar} from './searchbar'
import { useState, useEffect } from "react";
import { ListItem } from "../Item/ItemSimple";
import { Dimensions } from 'react-native'
import { getanomalies, size } from '../../../api/anomaly'

const window = Dimensions.get("window")
const isPhone = window.height > window.width
const style = StyleSheet.create({
    wrapper: {
        alignItems: "center", 
    } , 
    gridContainer: {
        justifyContent: 'space-evenly'
    },
    button: {
        display: "flex",
        alignItems: "center",
        margin: 5,
        padding: 5,
        borderWidth: 2,
        borderStyle: "solid",
    },
    bold: {
        fontWeight:"bold",
        fontSize: 16
    }
})



const SearchView = () => {
    const { styles } = useTheme();
    const navigation = useNavigation()
    const route = useRoute()
    const { toggleX , toggleY , toggleWorld  } = route.params ?? {}
    const handleClick = () => {
        navigation.navigate("Settings")
    }
    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    useEffect(() => {
        getanomalies(0,size).then((output) => {
            setFilteredItems(output)
            setItems(output)
        })
    },[])


        const getFilteredData = (data) => {
            if (data.length == 0) {
                setFilteredItems(items);
                return;
            }
        
            let array = items.filter((item) => {
                let titleMatch = item.title.toUpperCase().includes(data.toUpperCase());
                let x = false
                if ( toggleX) {
                    x = item.x.toString().includes(data)
                }
                let y = false
                if ( toggleY) {
                    y = item.y.toString().includes(data)
                }
                let world = false
                if (toggleWorld) {
                    world = item.world.toUpperCase().includes(data.toUpperCase()) 
                }
                return titleMatch || x || y || world
            });
        
        setFilteredItems(array)
    }
    
        
    return (
        <View style={[styles.container, { flex: 1 }]}>
            <SearchBar findSearch={getFilteredData} />
            <TouchableOpacity style={[styles.container, style.button,styles.accentContainer]} onPress={handleClick}>
                <Text style={[styles.text,style.bold]}>
                    Settings
                </Text>
            </TouchableOpacity>
            <FlatList
                data={filteredItems}
                renderItem={({ item }) =>  
                    isPhone ? 
                <View style={style.wrapper}>
                    <ListItem item={item} />
                </View> : 
                <ListItem item={item} />
                }
                keyExtractor={(item, index) => index.toString()}
                accessible={true}
                accessibilityLabel={`List of items`}
                accessibilityHint="Select an item in the list to go to it's detail page."
                accessibilityRole="list"
                accessibilityLanguage="en"

                numColumns={isPhone ? 1 : 2}

        { ...(!isPhone && {columnWrapperStyle: style.gridContainer})}
            />
        </View>
    )
}

export {SearchView}