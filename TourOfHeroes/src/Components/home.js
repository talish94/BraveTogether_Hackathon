import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import { Marker } from 'react-native-maps';
import logoImage from '../assets/images/logo.jpg';
const logoImageUri = Image.resolveAssetSource(logoImage).uri

const HomeScreen  = () => {

    return(
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{uri: logoImageUri}}
             />
            <Text>dsadsdasd</Text> 

            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            {/* <Marker
                coordinate={{ latitude : '31.0461' , longitude : '34.8516' }}
                image={require('../assets/pin.png')}
                /> */}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 800,
      width: 400,
    //   justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
        height: 500,
        width: 400,
    },
    logo: {
        width: 400,
        height: 80,
    }
   });

export default HomeScreen;