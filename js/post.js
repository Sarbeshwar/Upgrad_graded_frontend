
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

var likes =0;
function liker() {
    if(likes===0)
    {
      document.getElementById("like").innerHTML ='<i class="fas fa-thumbs-up"></i>&nbsp;Liked!';    
        likes++;
        document.getElementById("liketxt").innerHTML = likes+' person liked this!';
    }
    else 
    {
            likes++;
        document.getElementById("liketxt").innerHTML = likes +' people have liked this!';
    }
}
function comments(cmt){
    var par = document.createElement("div");
    var lis = document.createTextNode(cmt.value);
   par.appendChild(lis);
   // par.prepend(lis);
    var vs = document.getElementById("listcomments");
    //vs.appendChild(par);
    vs.prepend(par);
    par.classList.add("cmntdiv");
    vs.style.padding ="10px 20px 20px 20px";
}
var once=1;
function editor(eds)
{
    var vs = document.getElementById("inaminadica");
    
    var ds = document.getElementById("blogTitle");
    
    if(once===1){
    var fun = document.getElementById("blogBody").innerHTML;
    var fun1 = document.getElementById("blogTitleNew").innerHTML;

    document.getElementById("blogBody").setAttribute('style','display:none;');
    document.getElementById("blogTitleNew").setAttribute('style','display:none;');    
    var par = document.createElement('textarea');
    var par1 = document.createElement('textarea');
    var lis = document.createTextNode(fun.trim());
    var lis1 = document.createTextNode(fun1.trim());
    par.appendChild(lis);
    par1.appendChild(lis1);
    vs.appendChild(par);
    ds.appendChild(par1);
    par.classList.add("editcmnt1");
    par1.classList.add("editcmnt2");
  par.style.height = (par.scrollHeight)+"px";
      par1.style.height = (par1.scrollHeight-25)+"px";
        document.getElementById("editing").innerHTML ='Save&nbsp;<i class="fas fa-save"></i>'; 
    once=2;
        
        document.getElementsByClassName("blogAuthor")[0].style.marginBottom="10px";
    }
    else {
       var gun = document.getElementsByClassName("editcmnt1")[0].value;
        var gun1 = document.getElementsByClassName("editcmnt2")[0].value;
       console.log(gun);
        document.getElementById("blogBody").innerHTML =gun;
        document.getElementById("blogTitleNew").innerHTML =gun1;
        document.getElementsByClassName("editcmnt1")[0].setAttribute('style','display:none;');
        document.getElementsByClassName("editcmnt2")[0].setAttribute('style','display:none;');
        document.getElementById("blogBody").setAttribute('style','display:block;');
        document.getElementById("blogTitleNew").setAttribute('style','display:block;');
         document.getElementById("editing").innerHTML ='Edit&nbsp;<i class="fas fa-edit"></i>';
        once=1;
        vs.removeChild(vs.lastChild);
        ds.removeChild(ds.lastChild);
    }
        
}