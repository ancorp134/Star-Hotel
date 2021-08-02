
function getdata() {
  var Booking = document.getElementById("Booking").value;

  //firebase data retrieval function
  //path of your data
  //.once will get all your data in one time
  firebase.database().ref('Booking/' + Booking).once('value').then(function (snapshot) {
    //here we will get data
    //enter your field name
    var name = snapshot.val().Name;
    var email = snapshot.val().Email;
    var phone = snapshot.val().MobileNumber;
    var checkin = snapshot.val().CheckIn;
    var checkout = snapshot.val().CheckOut;
    var roomtype = snapshot.val().RoomType;
    var noofroom = snapshot.val().NoOfRoom;
    var noofmember = snapshot.val().NoOfMember;


    //now we have data in variables
    //now show them in our html

    document.getElementById("name").innerHTML = name;
    document.getElementById("email").innerHTML = email;
    document.getElementById("number").innerHTML = phone;
    document.getElementById("checkin").innerHTML = checkin;
    document.getElementById("checkout").innerHTML = checkout;
    document.getElementById("roomtype").innerHTML = roomtype;
    document.getElementById("noofroom").innerHTML = noofroom;
    document.getElementById("noofmember").innerHTML = noofmember;
  })

  document.querySelector('.fetchdata').style.display = 'block';
  setTimeout(function () {
    document.querySelector('.fetchdata').style.display = 'none';
  }, 35000);
}
function deletedata() {
  var Delete = document.getElementById("Delete").value;
  firebase.database().ref('Booking/' + Delete).remove();

  document.querySelector('.alert').style.display = 'block';
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);
}