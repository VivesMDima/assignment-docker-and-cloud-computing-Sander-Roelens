import { FlatList, StyleSheet, View } from 'react-native'
import {ListItem} from './Item'
import { Dimensions } from 'react-native'
import { useState, useEffect } from 'react'
import { getanomalies } from '../../../api/anomaly'

const window = Dimensions.get("window")
const isPhone = window.height > window.width
const style = StyleSheet.create({
    gridContainer: {
        justifyContent: 'space-evenly'
    },
    wrapper: {
        alignItems: "center", 
    }  
})


const ItemList = () => {
    const [items, setItems] = useState([])
    const [fromIndex,setFromIndex] = useState(0)
    useEffect(() => {
        getanomalies(fromIndex,13).then((output) => {
            setItems(output)
            setFromIndex(fromIndex+output.length)
        })
    },[])
    const fetchMore = () => {
        getanomalies(fromIndex).then((output) => {
            let sub = items
            setItems(sub.concat(output))
            setFromIndex(fromIndex+output.length)
        })
    }

    return (
    <FlatList
    numColumns={isPhone ? 1 : 2}
        { ...(!isPhone && {columnWrapperStyle: style.gridContainer})}
        data={items}
        renderItem={({ item }) =>  
            isPhone ? 
        <View style={style.wrapper}>
            <ListItem item={item} />
        </View> : 
        <ListItem item={item} />
        }
        keyExtractor={(item, index) => index.toString()}

        onEndReachedThreshold={0.9}
        onEndReached={fetchMore}

        accessible={true}
        accessibilityLabel={`List of items`}
        accessibilityHint="Select an item in the list to go to it's detail page."
        accessibilityRole="list"
        accessibilityLanguage="en"
    />
    )
}

export { ItemList}
