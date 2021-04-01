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

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    const storyId = this.props.storyId;
    const foundUser = data.stories.find(story => story.storyId == storyId);

    return (
      <View style={styles.header}>
        <View style={{marginLeft: 110, backgroundColor: 'blue'}}>
          {
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={{fontSize: 18}}>
                  {foundUser.profileProperties.first_name}{' '}
                  {foundUser.profileProperties.last_name}
                </ListItem.Title>
                <ListItem.Subtitle style={{fontSize: 14}}>
                  Birth at: {foundUser.profileProperties.place_of_birth}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{fontSize: 14}}>
                  Age: {foundUser.profileProperties.age}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          }
        </View>
        <Image
          style={styles.survivalPic}
          source={{
            uri:
            foundUser.imageUrl,
          }}
        />
      </View>
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
