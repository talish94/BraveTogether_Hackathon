import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {Marker} from 'react-native-maps';
import { Searchbar } from 'react-native-paper';
const axios = require('axios').default;
import base64 from 'react-native-base64';
import logoImage from '../assets/images/logo.jpg';
import getToken from '../auth/auth';
const logoImageUri = Image.resolveAssetSource(logoImage).uri

const HomeScreen  = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');
    // const [token, setToken] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const search = async(token) =>{
        try{
            const response = await axios.get("http://10.0.2.2:5000/stories", {
                params: { text: searchQuery },
                headers: {
                    "Authorization": "Basic " + base64.encode(token + ":"),
                },
            });
    
            console.log(response.data);
        }
        catch(e){
            console.log(e);
        }
    }

    const handleKeyDown = async() => {
        if (searchQuery.length > 0){
            const token = await getToken();
            setToken(tokenResponse);
            const searchResults = await search(token);
        }
    };

    return(
        <View style={styles.container}>
            <Image
                source={{uri: logoImageUri}}
                style={styles.logo}
             />
             <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                onIconPress={handleKeyDown}
            />
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
            latitude: 51.1021648529282,
            longitude: 11.489313321999326,
            latitudeDelta: 1.5,
            longitudeDelta: 0.2,
            }}>
            <Marker
                coordinate={{
                latitude: 51.1021648529282,
                longitude: 11.489313321999326,
                }}
                pinColor={'purple'} // any color
                title={'0'}
                description={'description'}
            />
            <Marker
                coordinate={{
                latitude: 51.58369063298165,
                longitude: 11.589313321999326,
                }}
                pinColor={'purple'} // any color
                title={'2'}
                description={'description'}
            />
            <Marker
                coordinate={{
                latitude: 51.1021678529282,
                longitude: 10.534998032329677,
                }}
                pinColor={'purple'} // any color
                title={'3'}
                description={'description'}
            />
            <Marker
                coordinate={{
                latitude: 51.3341678529282,
                longitude: 10.514998032329677,
                }}
                pinColor={'purple'} // any color
                title={'4'}
                description={'description'}
            />
            <Marker
                coordinate={{
                latitude: 51.1721678529282,
                longitude: 11.234998032329677,
                }}
                pinColor={'purple'} // any color
                title={'5'}
                description={'description'}
            />
            <Marker
                coordinate={{
                latitude: 50.6721678529282,
                longitude: 10.234998032329677,
                }}
                pinColor={'purple'} // any color
                title={'5'}
                description={'description'}
            />
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 800,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
        height: 650,
        width: 400,
    },
    logo: {
        width: 400,
        height: 105,
    },
    searchBar: {
        width: 400,
        height: 70, 
    }
   });

export default HomeScreen;