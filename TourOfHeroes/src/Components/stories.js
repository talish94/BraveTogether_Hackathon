import React,  { useState, useEffect  } from 'react';
import { ListItem } from 'react-native-elements'
import { Text, View, Image, StyleSheet } from 'react-native';
import logoImage from '../assets/images/logo.jpg';
import getToken from '../auth/auth';
import base64 from 'react-native-base64';
import { useNavigation } from '@react-navigation/native';

const axios = require('axios').default;
const logoImageUri = Image.resolveAssetSource(logoImage).uri


const Stories  = () => {

    const navigation = useNavigation();
    const [token, setToken] = useState('');
    const [storiesList, setStoriesList] = useState([]);

    useEffect(async() => {
        const fetchData = async () => {
            const tokenResponse = await getToken();
            const response = await axios.get("http://10.0.2.2:5000/stories", {
                headers: {
                    "Authorization": "Basic " + base64.encode(tokenResponse + ":"),
                },
            });
            setStoriesList(response.data);
        };

    fetchData();
    }, []);
        
    

    return(
        <View>
            <Image
                style={styles.logo}
                source={{uri: logoImageUri}}
             />
            {                                                                           
                storiesList.map((l, i) => (
                <ListItem key={i} bottomDivider onPress={() => {navigation.navigate('StoriesStackScreen', {
                    screen: 'Profile',
                    params: { story: l },
                  })}}>
                    <ListItem.Content>
                    <ListItem.Title>{l.title}</ListItem.Title>
                    {/* <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle> */}
                    </ListItem.Content>
                </ListItem>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 400,
        height: 80,
    },
   });

export default Stories;