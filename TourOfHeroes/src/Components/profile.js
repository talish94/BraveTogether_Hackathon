import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView  } from 'react-native';
import Header from './Header';
import Boxes from './Boxes';
const Profile  = ({ route }) => {

    const story = route.params;
    return(
        <View style ={styles.container}>
            <Header storyId={story.story.id} />           
            <Boxes story={story.story.text} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});

export default Profile;