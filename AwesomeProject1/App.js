// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React, { useEffect, useState }  from 'react';
// import type {Node} from 'react';
// import {
//   FlatList,
//   ActivityIndicator,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const getUsersFromApi = () => {
//   return fetch('https://randomuser.me/api/')
//     .then((response) => response.json())
//     .then((json) => {
//       return json;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           {isLoading ? <ActivityIndicator/> : (
//         <FlatList
//           data={data}
//           renderItem={({ item }) => (
//             <Text>{item.results}, {item.results}</Text>
//           )}
//         />
//       )}
//           <Section title="Step One">
//             Editttt <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
// 
// export default App



import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
// import { ListItem, Avatar } from 'react-native-elements'
import { List, ListItem } from "react-native-elements";

export default class Home extends Component {

  
        state = {
            data: []
        };
    

    componentDidMount() {
        this.fetchData();
    }
    
    fetchData = async () => {
        const response = await fetch("https://lldev.thespacedevs.com/2.2.0/launch/?mode=list");
        const json = await response.json();
        this.setState({ data: json.results });
    };

    // renderItem = ({ item }) => (
    //     <List.Item
    //         title= {`${item.name}`}
    //         description="Item description"
    //         left={props => <List.Icon {...props} icon="folder" />}
            
    //     />
    // );
    
        // <ListItem bottomDivider >
        //   <Avatar source={item.image && { uri: item.image }}/>
        //   <ListItem.Content>
        //     <ListItem.Title>{item.name}</ListItem.Title>
        //     <ListItem.Subtitle>{item.window_start}</ListItem.Subtitle>
        //     <ListItem.Subtitle>{item.location}</ListItem.Subtitle>
        //     <ListItem.Subtitle>{item.status.abbrev}</ListItem.Subtitle>
        //   </ListItem.Content>
        //   <ListItem.Chevron />
        // </ListItem>
      
      
    render() {
        return(
            <View>
                <Text> homeee </Text>
                <List>
                    <FlatList
                    data={this.state.data}
                    // initialNumToRender={data.length}
                    keyExtractor={(x, i) => i}
                    // renderItem={(this.renderItem )}
                    renderItem={({ item }) =>
                        <ListItem
                            roundAvatar
                            avatar={{ uri: item.image }}
                            title={`${item.name} ${item.last_updated}`}
                        />}
                    />
                </List> 
            </View>
        );    
    }
}

    {/* //     title=  " fdsgdf" //{`${item.name}`}
                    //     description="Item description"
                    //     left={ () => <List.Icon icon="folder" />}
                        
                    // />}

                    // <Text>
                    // {`${item.name} ${item.last_updated}`}
                    // </Text>} */}

// const styles = StyleSheet.create({
//     container: {
//       marginTop: 15,
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "#F5FCFF"
//     }
//   });


















// import React, { Component } from 'react';
// import type {Node} from 'react';
// import { ActivityIndicator, FlatList, Text, View, Image } from 'react-native';
// import { Card, ListItem, Button, Icon } from 'react-native-elements'


// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [],
//       isLoading: true
//     };
//   }

// //   const cardBuilder = ({data}) => : Node => {
// //     return (
// //       <Card>
// //       <Card.Title>HELLO WORLD</Card.Title>
// //       <Card.Divider/>

// //         <Text style={{marginBottom: 10}}>
// //         </Text>
// //         <Button
// //           icon={<Icon name='code' color='#ffffff' />}
// //           buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
// //           title='VIEW NOW' />

// //     </Card>
// //     );
// // };

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };


//   componentDidMount() {
//     fetch('https://randomuser.me/api/')
//       .then((response) => response.json())
//       .then((json) => {
//         this.setState({ data: json.results });
//       })
//       .catch((error) => console.error(error))
//       .finally(() => {
//         this.setState({ isLoading: false });
//       });
//   };

//   render() {
//     const { data, isLoading } = this.state;
//     console.log(data);

//     return (
//       <View style={{ flex: 1, padding: 24 }}>
//            {isLoading ? <ActivityIndicator/> : (
//          <FlatList
//            data={data}
//            renderItem={({ item }) => (
//              <Text>"Cell-phone: "{item.cell}, "Gender: ",{item.gender}</Text>
//              <cardBuilder data=item> </cardBuilder>
//            )}
//          />
//        )}
//       </View>
      
//     );
//   }
// };

// import React, { Component } from 'react'
// import {
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   View,
// } from 'react-native'

// class App extends Component {
//   state = {
//     count: 0
//   }

//   onPress = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//  render() {
//     return (
//       <View style={styles.container}>
//         <TouchableOpacity
//          style={styles.button}
//          onPress={this.onPress}
//         >
//          <Text>Click me</Text>
//         </TouchableOpacity>
//         <View>
//           <Text>
//             You clicked { this.state.count } times
//           </Text>
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDDDD',
//     padding: 10,
//     marginBottom: 10
//   }
// })

// export default App;

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LotsOfStyles = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;