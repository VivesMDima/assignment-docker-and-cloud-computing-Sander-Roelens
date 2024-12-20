import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useTheme } from '../../../assets/styles/toggle';
import { ToggleButton} from './Toggle'
import { useState } from "react";

const buttonStyle = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: 16,
    },
    title: {
        fontSize: 24,
        padding: 15
    },
    button: {
        display: "flex",
        alignItems: "center",
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderStyle: "solid",
        
    },
    cointainer: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 0,
    }
})


const SettingsScreen = (props) => {

    const navigation = useNavigation();
    const { toggleTheme, styles } = useTheme();
    
    const [toggleX, setToggleX] = useState(false);
    const [toggleY, setToggleY] = useState(false);
    const [toggleWorld, setToggleWorld] = useState(false);
    
    const handleNavigate = () => {
        navigation.navigate('Search', {
            toggleX, 
            toggleY, 
            toggleWorld
        });
    }

    const toggle = (name, value) =>{
        if (name === "X") setToggleX(value);
        if (name === "Y") setToggleY(value);
        if (name === "World") setToggleWorld(value);
    }

    return (
        <View style={[styles.container,{height:"100%"}]}>
            <Text style={[styles.text,buttonStyle.text, buttonStyle.title]}>General options</Text>
            <TouchableOpacity  style={[styles.container, buttonStyle.button,styles.accentContainer]} onPress={toggleTheme}>
                <Text style={[styles.text, buttonStyle.text]}>Toggle Theme</Text>
            </TouchableOpacity>
            <Text style={[styles.text,buttonStyle.text, buttonStyle.title]}>Search options</Text>
            <Text style={[styles.text, buttonStyle.text,{padding:15}]}>Default search is with Title only.</Text>
            <ToggleButton toggleSwitch={toggle}>X</ToggleButton>
            <ToggleButton toggleSwitch={toggle}>Y</ToggleButton>
            <ToggleButton toggleSwitch={toggle}>World</ToggleButton>
            {/* <ToggleButton toggleSwitch={toggle}>Images</ToggleButton> */}
            
            <TouchableOpacity style={[styles.container, buttonStyle.button,styles.accentContainer]} onPress={handleNavigate}>
                <Text style={[styles.text, buttonStyle.text]}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

export { SettingsScreen };
