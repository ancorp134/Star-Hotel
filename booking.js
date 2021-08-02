
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD9_NcDY-M750eB6-1aygAj3-79Mr_mn7s",
  authDomain: "hotel-management-ddbd5.firebaseapp.com",
  databaseURL: "https://hotel-management-ddbd5.firebaseio.com",
  projectId: "hotel-management-ddbd5",
  storageBucket: "hotel-management-ddbd5.appspot.com",
  messagingSenderId: "265169504837",
  appId: "1:265169504837:web:dd5b0004d8192678a7f12c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection


// Listen for form submit
document.getElementById('bookingForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var checkin = getInputVal('checkin');
  var checkout = getInputVal('checkout');
  var roomtype = getInputVal('roomtype');
  var noofroom = getInputVal('noofroom');
  var noofmember = getInputVal('noofmember');
  // Save message
  saveMessage(name, email, phone, checkin, checkout, roomtype, noofroom, noofmember);


  // Clear form
  document.getElementById('bookingForm').reset();
  document.querySelector('.alert').style.display = 'block';
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, checkin, checkout, roomtype, noofroom, noofmember) {
  firebase.database().ref('Booking/' + phone).set({
    Name: name,
    Email: email,
    MobileNumber: phone,
    CheckIn: checkin,
    CheckOut: checkout,
    RoomType: roomtype,
    NoOfRoom: noofroom,
    NoOfMember: noofmember
  });
}