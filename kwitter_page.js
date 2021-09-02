//YOUR FIREBASE LINK

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

user_name = localStorage.getItem("username")
room_name = localStorage.getItem("roomname")

function send() {
      msg = document.getElementById("msg").Value
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      })
      document.getElementById("msg").Value = ""
}

function logout() {
      localStorage.removeItem("user_name")
      room_name.removeItem("room_name")
      window.location.replace("kwitter.html")
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data)
                        name = message_data['name'];
                        message = message_data['message']
                        like = message_data['like']
                        name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>"
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class'btn btn-warning' id=" + firebase_message_id + "value" + like + "onclick='updateLike(this.id)'";
                        span_with_tag = "<span class='glyphicon-thumbs-up>'Like:" + like + "</span><button><hr>"

                        row = name_with_tag + message_with_tag + like_button + span_with_tag
                        document.getElementById("output").innerHTML += row;

                  }
            });
      });
}
getData();

//End code

function updateLike(message_id) {
      console.log("clicked on like button - " + message_id)
      button_id = message_id
      likes = document.getElementById(button_id).Value
      updated_likes = Number(likes) + 1
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      })
}