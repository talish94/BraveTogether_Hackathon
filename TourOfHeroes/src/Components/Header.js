import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Card, ListItem, Body, Icon, CardItem} from 'react-native-elements';

import * as data from './user.json';

const list = [
  {
    name: 'Saadia Bahat',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    birthYear: '1928',
    birthAt: 'Alitos in Lithuania',
    age: 93,
  },
];

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={{marginLeft: 110, backgroundColor: 'blue'}}>
          {
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={{fontSize: 18}}>
                  {data.profileProperties.first_name}{' '}
                  {data.profileProperties.last_name}
                </ListItem.Title>
                <ListItem.Subtitle style={{fontSize: 14}}>
                  Birth at: {data.profileProperties.place_of_birth}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{fontSize: 14}}>
                  Age: {data.profileProperties.age}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          }
        </View>
        <Image
          style={styles.survivalPic}
          source={{
            uri:
              'https://www.yadvashem.org/sites/default/files/styles/main_image/public/saadia-bahat.jpg?itok=zq0WgJSv',
          }}
        />
      </View>

      //    </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '26.5%',
    padding: 5,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    backgroundColor: '#D3D3D3',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 3,
  },
  survivalPic: {
    width: 105,
    height: 150,
    justifyContent: 'flex-end',
    borderRadius: 10,
    position: 'absolute',
    marginTop: 5,
    marginLeft: 5,
  },
});
