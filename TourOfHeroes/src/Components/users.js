import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView  } from 'react-native';

import Header from './Header';
import Boxes from './Boxes';

class profile extends React.Component{
    render(){
        return(
            <View style ={styles.container}>
                <Header />           
                <Boxes />
            </View>
        );
    }
}
export default profile;
const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});