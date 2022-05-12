// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyASD6NmRlICKbJ1-UncNb2hkda_4r0v3Mw",
    authDomain: "lets-chat-web-app-a72a7.firebaseapp.com",
    projectId: "lets-chat-web-app-a72a7",
    storageBucket: "lets-chat-web-app-a72a7.appspot.com",
    messagingSenderId: "638641360343",
    appId: "1:638641360343:web:9bcfc113514a9a5c734f92",
    measurementId: "G-6PS34WPPDD"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
 
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
  
}



