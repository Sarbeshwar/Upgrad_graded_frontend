
var modal = document.getElementById('Signup_modal');
var btn = document.getElementById("signupbtn");
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }
}    

var modal2 = document.getElementById('Signin_modal');
var btn2 = document.getElementById("signinbtn");
var span2 = document.getElementsByClassName("close")[1]; 
btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
function fun1()
{
      document.getElementById('Signin_modal').style.display="none";
      document.getElementById('Signup_modal').style.display="block";
//    var b=document.getElementById("Signin_modal");
//    a.style.display="none";
//    b.style.display="block";
}
