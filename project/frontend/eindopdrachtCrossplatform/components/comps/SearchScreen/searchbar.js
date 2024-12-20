import { useEffect, useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"
import { useTheme } from '../../../assets/styles/toggle';


const style = StyleSheet.create({
    searchbar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15, 
        padding: 8,
        margin: 5,
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 25
        
    },
    text:{
            padding: 15,
            width: '100%',
            fontSize: 16,
    }
})

export const SearchBar = ({ findSearch }) => {
    const [search, setSearch] = useState("")
    const { styles } = useTheme();

    const changeSearch = (value) => {
        setSearch(value)   
        findSearch(value)
    }
    
    return (
        <View
        accessible={true}
        accessibilityLabel={`Searchbar`}
        accessibilityHint="Search for items with specified properties."
        accessibilityRole="search"
        accessibilityLanguage="en"
        style={[style.searchbar,styles.container]}
        >
            <TextInput 
                style={[styles.text,style.text]}
                placeholder="Search here..."
                placeholderTextColor={'gray'}
                value={search}
                onChangeText={changeSearch}
                accessible={true}
                accessibilityRole="search"
                accessibilityLabel="Search bar"
                accessibilityHint="Type to search for items"
                accessibilityLanguage="en"
            />
        </View>
    )
}

