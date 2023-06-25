const firebaseConfig = {
    apiKey: "AIzaSyDuFrI-gO-8oYr57RjRwJOBXOhjoF752vA",
    authDomain: "htmlquanap.firebaseapp.com",
    databaseURL: "https://htmlquanap-default-rtdb.firebaseio.com",
    projectId: "htmlquanap",
    storageBucket: "htmlquanap.appspot.com",
    messagingSenderId: "361140603018",
    appId: "1:361140603018:web:52c0e13486abd25acd0573"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var learnhtmlDB = firebase.database().ref('learnHTML');

