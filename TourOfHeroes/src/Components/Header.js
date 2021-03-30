import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Header extends React.Component{
    render(){
        return(
            <View style ={styles.header}>
                <View style= {{paddingRight:5,fontSize:'24',maxWidth:290}}>
                    <Text>סעדיה בהט</Text>
                    <Text>נולד בשנת 1928 באליטוס שבליטא </Text>
                    <Text>הוריו : מנדל (מנחם) וג'ניה (שיינה-יפה) בוקשיצקי</Text>
                </View>
                <Image style={styles.survivalPic}
                    source = {{
                        uri: 'https://www.yadvashem.org/sites/default/files/styles/main_image/public/saadia-bahat.jpg?itok=zq0WgJSv',
                    }}
                    />
            </View>
            
        );
    }
}


const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '20%',
        flexDirection: 'row',
        paddingLeft: 5,
        paddingTop: 10,
        backgroundColor: '#D3D3D3',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        justifyContent: 'flex-end',
        borderWidth:0.25
    },
    survivalPic:{
        width: 100,
        height: '95%',
        justifyContent: 'flex-end',
        borderRadius:10
    },

});