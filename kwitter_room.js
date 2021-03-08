  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCZAfIWmFnDI15NwRwgRkDcdTaZodnplac",
    authDomain: "slicee-e8392.firebaseapp.com",
    projectId: "slicee-e8392",
    storageBucket: "slicee-e8392.appspot.com",
    messagingSenderId: "238112784039",
    appId: "1:238112784039:web:ab7d273b1ab9c8767a6582"
  };
  // Initialize Firebase
function addroom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "add room name"
    })
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
  }