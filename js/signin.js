var attempt = 3; 
function validate(){
var first = document.getElementById("first").value;
var last = document.getElementById("last").value;
var password = document.getElementById("password").value;
if ( first == "manasi" && last == "mhatre" &&  password == "happyhappylife"){
alert ("Login successfully");
window.location = "index.html"; 
return false;
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");
if( attempt == 0){
document.getElementById("first").disabled = true;
document.getElementById("last").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}