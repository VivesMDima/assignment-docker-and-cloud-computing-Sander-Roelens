import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { postAnomaly } from "../../../api/anomaly";
import { useNavigation } from "@react-navigation/native";
import {useTheme} from '../../../assets/styles/toggle'

const style = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    inputContainer: {
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginTop: 5,
        borderRadius: 5,
    },
});

export const CreateScreen = () => {
    
    const {styles} = useTheme()

    const [title, setTitle] = useState('new item');
    const [x, setX] = useState('0');
    const [y, setY] = useState('0');
    const [description, setDescription] = useState('Description not available');
    const [world, setWorld] = useState('earth');
    const [images, setImages] = useState('https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg');
    const navigation = useNavigation()
    const [errormessage, setErrormessage] = useState("")

    const handleSubmit = () => {
        const data = {
            title,
            x,
            y,
            description,
            world,
            images,
        };
        postAnomaly(data).then((result) => {
            if(result.error){
                setErrormessage(result.errorMessage)
            }else{
                navigation.goBack()
            }
        })
       
    };

    return (
        <View style={[style.container, styles.container]}>
            <Text style={{color:"red"}}>{errormessage}</Text>
            <View style={style.inputContainer}>
                <Text style={styles.text}>Title</Text>
                <TextInput
                    style={[style.input,styles.container]}
                    value={title}
                    onChangeText={setTitle}
                    
                />
            </View>

            <View style={style.inputContainer}>
                <Text style={styles.text}>X</Text>
                <TextInput
                    style={[style.input,styles.container]}
                    value={x}
                    onChangeText={setX}
                />
            </View>

            <View style={style.inputContainer}>
                <Text style={styles.text}>Y</Text>
                <TextInput
                    style={[style.input,styles.container]}
                    value={y}
                    onChangeText={setY}
                />
            </View>

            <View style={style.inputContainer}>
                <Text style={styles.text}>Description</Text>
                <TextInput
                    style={[style.input,styles.container]}
                    value={description}
                    onChangeText={setDescription}
                />
            </View>

            <View style={style.inputContainer}>
                <Text style={styles.text}>World</Text>
                <TextInput
                    style={[style.input,styles.container]}
                    value={world}
                    onChangeText={setWorld}
                />
            </View>

            <View style={style.inputContainer}>
                <Text style={styles.text}>Images</Text>
                <TextInput
                    style={[style.input,styles.container]}
                    value={images}
                    onChangeText={setImages}
                />
            </View>

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};
