// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD9_NcDY-M750eB6-1aygAj3-79Mr_mn7s",
  authDomain: "hotel-management-ddbd5.firebaseapp.com",
  databaseURL: "https://hotel-management-ddbd5.firebaseio.com",
  projectId: "hotel-management-ddbd5",
  storageBucket: "hotel-management-ddbd5.appspot.com",
  messagingSenderId: "265169504837",
  appId: "1:265169504837:web:132f9e0da4ee4e4aa7f12c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Listen for a submit
document.querySelector(".contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let phone = document.querySelector(".phone").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, phone, message);

  saveContactInfo(name, email, phone, message);

  document.querySelector(".contactForm").reset();

  document.querySelector('.alert').style.display = 'block';
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);
}

// Save infos to Firebase
function saveContactInfo(name, email, phone, message) {
  firebase.database().ref('Messages/' + phone).set({
    Name: name,
    Email: email,
    PhoneNumber: phone,
    Message: message
  });
}