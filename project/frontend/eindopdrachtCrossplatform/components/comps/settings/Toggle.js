import { useTheme} from '../../../assets/styles/toggle'
import { useState } from "react";
import { StyleSheet, Switch, View, Text } from "react-native";

const buttonStyle = StyleSheet.create({
    cointainer: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 0,
        margin: 5,
        justifyContent: 'space-between',
        marginRight: 20
    },
    text: {
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 10
    },
})

export const ToggleButton = (props) => {
    
    const { styles } = useTheme();
    const { toggleSwitch, force } = props
    const [isEnabled, setIsEnabled] = useState(force ? force : false);
    const toggle = ()=>{
        setIsEnabled(!isEnabled)
        toggleSwitch(props.children,!isEnabled)
    }

    return (
        <View style={buttonStyle.cointainer}>
                
                <Text style={[styles.text, buttonStyle.text]}>Include {props.children} in search</Text>
                <Switch 
                style={buttonStyle.toggle}
                    onValueChange={toggle}
                    value={isEnabled}
                    disabled={force ? force: false}
                    />
            </View>
    )
}