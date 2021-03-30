import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView  } from 'react-native';

import Header from './screen/Header';
import Boxes from './screen/Boxes';

export default class profile extends React.Component{
    render(){
        return(
            <View style ={styles.container}>
                <Header />           
                <Boxes />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});