function sendMessage() {
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var message = document.getElementById("message").value;
// Returns successful data submission message when the entered information is stored in database.
var dataString = '&fname1=' + fname + '&lname1=' + lname + '&email1=' + email +'&subject1=' + subject +'&message1=' + message;
if (fname == '') {
  alert('First name is mandatory');
}else if (email == '') {
  alert('Email is mandatory');
}else if (validateEmail(email)==false) {
  alert('Enter proper mail address');
}else if (subject == '') {
  alert('Subject is mandatory');
}else if (message.length<15) {
  alert('Message is too short');
}else {
// AJAX code to submit form.
jQuery.ajax({
type: "POST",
url: "inc/mail.php",
data: dataString,
cache: false,
success: function(html) {
alert(html);
}
});
}
return false;
}
function validateEmail(email) {
    var re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
    return re.test(email);
}
