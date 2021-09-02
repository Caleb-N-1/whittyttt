
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyBxs560ZPvalE7z4dAm_4D3kuwQNQRXmhU",
      authDomain: "wheeeeeeeeeeeeeeeeeeeeee-825da.firebaseapp.com",
      databaseURL: "https://wheeeeeeeeeeeeeeeeeeeeee-825da-default-rtdb.firebaseio.com",
      projectId: "wheeeeeeeeeeeeeeeeeeeeee-825da",
      storageBucket: "wheeeeeeeeeeeeeeeeeeeeee-825da.appspot.com",
      messagingSenderId: "203473470269",
      appId: "1:203473470269:web:bfda1403a5a5f88a72bb54",
      measurementId: "G-FW1G4W9VBP"
    };
    
    // Initialize Firebase
    var app = initializeApp(firebaseConfig);
   

user_name=localStorage.getItem("Username")
document.getElementById("user_name").innerHTML="welcome " + user_name

function addRoom(){
      room_name = document.getElementById("room_name").value

      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name",room_name)

      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name - " + Room_names  )
row = "<div class = 'room_name' id="+Room_names+"onclick=redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("Username")
    localStorage.removeItem("room_name")
    window.location = "index.html"
}