import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card, ListItem, Button, Icon, Avatar} from 'react-native-elements';
import MapView, {
  PROVIDER_GOOGLE,
  Polygon,
  Polyline,
  LatLng,
} from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as data from './user.json';


export default class Boxes extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    
    const story = data.stories[0];

    return (
      <ScrollView>
        <View style={styles.box}>
          {
            <View style={{height: 350}}>
              <ScrollView style={{flex: 1}} nestedScrollEnabled={true}>
                <Text style={{fontSize: 18}}>
                  {this.props.story}
                </Text>
              </ScrollView>
            </View>
          }
        </View>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.miniMap}
            region={{
              latitude: parseFloat(story.paths[0].lat),
              longitude: parseFloat(story.paths[0].long),
              //latitude: 37.78825,
              //longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={{
                latitude: parseFloat(story.paths[0].lat),
                longitude: parseFloat(story.paths[0].long),
              }}
              pinColor={'purple'} // any color
              title={'title'}
              description={'description'}
            />
            <Marker
              coordinate={{
                latitude: parseFloat(story.paths[1].lat),
                longitude: parseFloat(story.paths[1].long),
              }}
              pinColor={'purple'} // any color
              title={'title'}
              description={'description'}
            />
            <Marker
              coordinate={{
                latitude: parseFloat(story.paths[2].lat),
                longitude: parseFloat(story.paths[2].long),
              }}
              pinColor={'purple'} // any color
              title={'title'}
              description={'description'}
            />
            <Marker
              coordinate={{
                latitude: parseFloat(story.paths[3].lat),
                longitude: parseFloat(story.paths[3].long),
              }}
              pinColor={'purple'} // any color
              title={'title'}
              description={'description'}
            />
            <Polyline
              coordinates={parsPathsIntoListOfCoo(story.paths)}
              strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
              strokeColors={[
                '#7F0000',
                '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                '#B24112',
                '#E5845C',
                '#238C23',
                '#7F0000',
              ]}
              strokeWidth={6}
            />
          </MapView>
        </View>
        <View style={styles.fixToText}>
          <TouchableOpacity
            style={styles.roundButton1}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const parsPathsIntoListOfCoo = jsonPath => {
  var googleCoordinates = [];
  var coords = Object.keys(jsonPath).map(key => jsonPath[key]);
  coords.forEach(coord =>
    googleCoordinates.push({
      latitude: parseFloat(coord.lat),
      longitude: parseFloat(coord.long),
    }),
  );
  return googleCoordinates;
};

const styles = StyleSheet.create({
  miniMap: {
    height: 350,
    width: 410,
    //alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 2,
    paddingLeft: 200,
  },
  box: {
    width: '95%',
    height: 380,
    padding: 5,
    margin: 10,
    borderRadius: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    backgroundColor: '#ffffff',
    elevation: 3,
    paddingTop: 5,
  },
  container: {
    alignItems: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 350,
    position: 'absolute',
    paddingTop: 700,
    borderRadius: 100,
  },
  roundButton1: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'blue',
  },
});
