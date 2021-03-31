// import React, {Component} from 'react';
import database from '@react-native-firebase/database';

// //todo: add returns to all functions
// class dbUtils extends Component {
//   constructor() {
//     super();
//     // this.searchUserIdByFirstNameInFirebase = this.searchUserIdByFirstNameInFirebase.bind(this)
//   }

//   this.state({
//     data: '',
//   });

//   componentDidMount() {
//     this.searchUserIdByFirstNameInFirebase = this.searchUserIdByFirstNameInFirebase.bind(
//       this,
//     );
//     this.searchUserIdByStoryIdInFirebase = this.searchUserIdByStoryIdInFirebase.bind(
//       this,
//     );
//   }

//   // Search UserId by StoryId in Firebase
//   searchUserIdByStoryIdInFirebase(storyId) {
//     const sss = 'asdasdasd';
//     this.setState({userId: sss});
//     console.log(this.state.userId);
//     database()
//       .ref()
//       .child('users')
//       .orderByChild('storyId')
//       .equalTo(storyId)
//       .on('value', function (snapshot) {
//         console.log(snapshot.val());
//         snapshot.forEach(function (data) {
//           this.setState(() => {
//             return {userId: data.key};
//           });
//           console.log(data.key);
//         });
//       });
//     return this.state.userId;
//   }

//   // Reading data json from Firebase
// fetchDataFromFirebase(userId) {
//   var x = "sadasd"
//   database()
//     .ref(`/users/${userId}`)
//     .once('value')
//     .then(snapshot => {
//       x = snapshot.val();
//       console.log('User data: ', snapshot.val());
//     }).catch(console.error());
//     return x;
// }

//   // Search UserId by First name in Firebase
//   async searchUserIdByFirstNameInFirebase(name) {
//     this.state = {
//       userId: 'abcd',
//       // userIds: [],
//       // storyId: '',
//       // userData: '',
//     };

//     var sss = 'asdasdasd';
//     this.state.userId = '33333333';
//     // this.setState({ userId: '3333333', });
//     // this.setState({ userId: sss }, () => {
//     //   console.log(this.state.userId, 'userId111111');
//     // });
//     console.log(`start11111 func on : ${this.state.userId}`);
//     this.setState({userId: 'newVal'}, function () {
//       console.log(`start2222 func on : ${this.state.userId}`);
//     });
//     this.setState(() => {
//       return {userIds: 'dsfsfdsf'};
//     });
//     var x = [];
//     var y = 8;
//     console.log(`start func on : ${this.state.userIds}`);
//     // let userIds = [];
//     var usersRef = database().ref();
//     var p = await usersRef
//       .child('users')
//       .orderByChild('profileProperties/first_name')
//       .equalTo(name)
//       .on('value', snapshot => {
//         console.log(snapshot.val());
//         var x = [];
//         snapshot.forEach(data => {
//           // this.setState(previousState => ({
//           //   userIds: [...previousState.userIds, data.key],
//           // }));
//           // this.setState({userIds: this.state.userIds.concat(data.key)});
//           this.state.userId = '444444444';
//           // userIds.push(data.key);
//           x.push(data.key);
//           y = 54;
//           console.log(`inside func mid111: ${x}`);
//           console.log(`Searched userId: ${data.key}`);
//           console.log(`inside func on : ${this.state.userId}`);
//         });
//         return x;
//       });
//     // await database()
//     //   .ref()
//     //   .child('users')
//     //   .orderByChild('profileProperties/first_name')
//     //   .equalTo(name)
//     //   .on('value', snapshot => {
//     //     console.log(snapshot.val());
//     //     snapshot.forEach(data => {
//     //       // this.setState(previousState => ({
//     //       //   userIds: [...previousState.userIds, data.key],
//     //       // }));
//     //       this.setState({userIds: this.state.userIds.concat(data.key)});
//     //       // userIds.push(data.key);
//     //       console.log(`Searched userId: ${data.key}`);
//     //       console.log(`inside func on : ${this.state.userIds}`);
//     //     });
//     //   });
//     // console.log(`inside func end: ${state.userId}`);
//     console.log(`inside func end111: ${x}`);
//     console.log(`inside func end: ${y}`);
//     console.log(`inside func end33333333: ${p}`)
//     // console.log(`inside func: ${userIds}`);
//     return x;
//   }
// }

// var x = new dbUtils();
// export default x;

// // Reading data json from Firebase
// fetchDataFromFirebase: function(userId) {
//   return database()
//     .ref(`/users/${userId}`)
//     .once('value')
//     .then(snapshot => {
//       console.log('User data: ', snapshot.val());
//     });
// },

// // Search UserId by First name in Firebase
// searchUserIdByFirstNameInFirebase: function(name) {
//     let userIds = null;
//     database()
//       .ref()
//       .child('users')
//       .orderByChild('profileProperties/first_name')
//       .equalTo(name)
//       .on('value', function (snapshot) {
//         console.log(snapshot.val());
//         snapshot.forEach(function (data) {
//           this.setState({userIds.push(data.key)});
//         //   userIds.push(data.key);
//             userIds = data.key
//           console.log(`Searched userId: ${data.key}`);
//         });
//       });
//     console.log(`inside func: ${this.userIds}`);
//     console.log(`inside func: ${userIds}`);
//     return userIds;
//   },


// todo: add return to function...  for future use.
// Add user to Firebase
export const addUserToFirebase = userId =>
  database()
    .ref('/users/')
    .update({
      userId: {
        paths: {},
        profileProperties: {},
        storyId: '',
      },
    })
    .then(() => console.log(`User: ${userId} as been created. `));

// Updating path to Firebase
export const addPathToFirebase = (userId, index, lat, long, story) =>
  database()
    .ref(`/users/${userId}/paths/`)
    .update({
      index: {
        lat: lat,
        long: long,
        story: story,
      },
    })
    .then(() => console.log(`Path of: ${userId} as been updated. `));

// Updating profileProperties to user in Firebase
export const addProfilePropertiesToUserInFirebase = (
  userId,
  firstName,
  lastName,
  age,
  placeOfBirth,
) =>
  database()
    .ref(`/users/${userId}/profileProperties/`)
    .update({
      first_name: firstName,
      last_name: lastName,
      age: age,
      place_of_birth: placeOfBirth,
    })
    .then(() =>
      console.log(`ProfileProperties of: ${userId} as been updated. `),
    );

// Updating storyId to user in Firebase
export const addStoryIdToUserInFirebase = (userId, storyId) =>
  database()
    .ref(`/users/${userId}/`)
    .update({
      storyId: storyId,
    })
    .then(() => console.log(`StoryId of: ${userId} as been updated. `));

// Search UserId by StoryId in Firebase
export const searchUserIdByStoryIdInFirebase = storyId =>
  database()
    .ref()
    .child('users')
    .orderByChild('storyId')
    .equalTo(storyId)
    .on('value', function (snapshot) {
      console.log(snapshot.val());
      snapshot.forEach(function (data) {
        console.log(data.key);
      });
    });

// Search UserId by First name in Firebase
export const searchUserIdByFirstNameInFirebase = name => {
  let userIds = [];
  database()
    .ref()
    .child('users')
    .orderByChild('profileProperties/first_name')
    .equalTo(name)
    .on('value', function (snapshot) {
      console.log(snapshot.val());
      snapshot.forEach(function (data) {
        userIds = '234234';
        console.log(`Searched userId: ${data.key}`);
      });
    });
  console.log(`inside func: ${userIds}`);
  return userIds.length;
};

// Search UserId by Last name in Firebase
export const searchUserIdByLastNameInFirebase = name =>
  database()
    .ref()
    .child('users')
    .orderByChild('profileProperties/last_name')
    .equalTo(name)
    .on('value', function (snapshot) {
      console.log(snapshot.val());
      snapshot.forEach(function (data) {
        console.log(`Searched userId: ${data.key}`);
      });
    });

// Remove user from Firebase
export const removeUserFromFirebase = userId =>
  database()
    .ref(`/users/${userId}`)
    .remove()
    .then(console.log(`user: ${userId} removed .`));
