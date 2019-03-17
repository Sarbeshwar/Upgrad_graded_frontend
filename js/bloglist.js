
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
}
//var modal12 = document.getElementById('myModal12');
//var btn12 = document.getElementsByClassName("fa fa-trash");
//var span12 = document.getElementsByClassName("close12"); 
//btn12.onclick = function() {
//  modal12.style.display = "block";
//}
//span12.onclick = function() {
//  modal12.style.display = "none";
//}
//window.onclick = function(event) {
//  if (event.target == modal12) {
//    modal12.style.display = "none";
//  }
//}
function fun2()
{
 var modal12=document.getElementById("myModal12").style.display="block";
}
function fun3()
{
 var modal13=document.getElementById("myModal12").style.display="none";
}

   

