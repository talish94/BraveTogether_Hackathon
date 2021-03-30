import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';


export default class Boxes extends React.Component{
    render(){
        return(
        <ScrollView>
                <View style ={styles.container}>
                    <View style={styles.box}>
                        <View style={styles.inner}>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            <Text>Story</Text>
                            </View>
                    </View>
                </View>
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        width: '100%',
        height: '60%',
        padding: 5,

    },
    inner: {
        flex:1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:25
    },
});