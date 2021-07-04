// JavaScript Document
function validate() {
var u = document.getElementById("username").value;
var p1 = document.getElementById("password").value;
 
if(u== "") {
alert("Vui lòng nhập username!");
return false;
}
if(p1 == "") {
alert("Vui lòng nhập password!");
return false;
}
 
alert("Bạn đã đăng nhâp thành công!")
 
return true;
}