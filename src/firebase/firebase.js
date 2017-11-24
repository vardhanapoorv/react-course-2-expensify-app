import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);
  
  const database = firebase.database();

  export { firebase, database as default };

//   database.ref('expenses').on('child_removed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//    database.ref('expenses')
//      .once('value')
//      .then((snapshot) => {
//        const expenses = [];
       
//        snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()  
//         });
//        });

//        console.log(expenses);
//      });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
    
//        snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()  
//         });
//        });

//        console.log(expenses);      
// });

//   database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
//   });

  
//   database.ref('notes/-KzTf6eksBYSSTTOk3B1').remove();

//   database.ref('notes').push({
//       title: 'Course Topics',
//       body: 'React Native, Angular, Python'
//   });


//   database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   });

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//       const val =  snapshot.val();
//       console.log(val); 
//     })
//     .catch((e) => {
//       console.log('Error fetching the data', e);  
//     })

//   database.ref().set({
//     name: 'Apoorv Vardhan',
//     age: 23,
//     stressLevel: 6,
//     job: {
//        title: 'Software Developer',
//        company: 'Google'
//     },
//     location: {
//        city: 'Bangalore',
//        country: 'India'
//     }
//   }).then(() => {
//     console.log('Data is saved');
//   }).catch((e) => {
//     console.log('This failed. ', e);
//   });

//   database.ref().update({
//       stressLevel: 9,
//       'location/city': 'Seattle',
//       'job/company': 'Amazon'
//   });

//   database.ref().set('This is my data.');

// database.ref('age').set(24);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
//     height: 172,
//     weight: 41
// }).then(() => {
//    console.log('Second set call worked'); 
// }).catch((e) => {   
//    console.log('Things didnt work for the second error', e); 
// });

// database.ref()
//   .remove()
//   .then(() => {
//       console.log('Data was removed');
//   })
//   .catch((e) => {
//       console.log('Did not remove data', e);
//   });  