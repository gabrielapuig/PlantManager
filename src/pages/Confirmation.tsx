import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text
} from 'react-native';

import {Button} from '../componentes/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params{
    title: string;
    subtitle: string;
    buttonTitle: string;
    icon: 'smile' | 'hug';
    nextScreen: string;
}

const emojis = {
    hug: '🤗',
    smile: '😄'
}

export function Confirmation(){

    const navegation = useNavigation();
    const routes = useRoute();

    const{
        title,
        subtitle,
        buttonTitle,
        icon,
        nextScreen
    } = routes.params as Params;

    function handleMoveOn(){
        navegation.navigate(nextScreen);
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    {emojis[icon]}
                </Text>

                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>

            </View>

            <View style={styles.footer}>
                <Button 
                    title={buttonTitle}
                    onPress={handleMoveOn}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'space-around',
    },
    content:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign:'center',
        color: colors.heading,
        lineHeight: 28,
        marginTop: 15,
    },
    subtitle:{
        fontFamily: fonts.text,
        textAlign:'center',
        fontSize: 17,
        paddingHorizontal:10,
        color: colors.heading,
    },
    emoji:{
        fontSize:78,
    },
    footer:{
        width:'100%',
        paddingHorizontal:75,
        marginTop: 20,
    }
})