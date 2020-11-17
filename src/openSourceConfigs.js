const firebaseConfig = {
  apiKey: 'apiKey',
  authDomain: 'authDomain',
  databaseURL: 'databaseURL',
  projectId: 'projectId',
  storageBucket: 'storageBucket',
  messagingSenderId: 'messagingSenderId',
  appId: 'appId'
}

export default firebaseConfig

// to get actual data login to Firebase Console https://console.firebase.google.com/
// using google account. Create project. Go to Project settings -> Firebase SDK snippet. Choose SDK checkbox.
// Copy firebaseConfig object data from your web app's Firebase configuration.
// Rename this file to firebaseConfig.js

// Keep in mind, that firebaseConfig.js is added to .gitignore file
