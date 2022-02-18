function validation() {
  var form = document.getElementById("form");
  var email= document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(email.match(pattern)){
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML = "Your Email Adress in Valid.";
      text.style.color = "#00ff00";
      
  }
  else{
      form.classList.remove("valid")
      form.classList.add("invalid")
      text.innerHTML = "Your Email Adress in inValid.";
      text.style.color = "#ff0000";
  }
  if(email == "")
  {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00ff00";
  }
}
function CheckPassword() {
  var form = document.getElementById("form1");
  var password = document.getElementById("password").value;
  var text = document.getElementById("text1");
  var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  if(password.match(pattern)){
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML = "Good";
      text.style.color = "#00ff00";
      
  }
  else{
      form.classList.remove("valid")
      form.classList.add("invalid")
      text.innerHTML = "Bad";
      text.style.color = "#ff0000";
  }
  if(password == "")
  {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00ff00";
  }
}
const audio = new Audio();
audio.src = "./click.mp3";

