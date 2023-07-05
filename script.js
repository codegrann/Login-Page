let div = document.getElementById("div");
let reset = document.getElementById("reset");
let email1 = document.getElementById("email1");
let email2 = document.getElementById("email2");
let password = document.querySelector("#password");
let togglePassword = document.querySelector("#togglePassword");

reset.addEventListener("click", submit);
togglePassword.addEventListener("click", toggle);
togglePassword.style.color="red";
password.style.backgroundColor="red";
function toggle(){
  // togglePassword.style.color="blue"
  this.classList.toggle("bigEye");
}

function submit() {
  confirm(`Confirm that ${email2.value} is your email`);
  alert(`We have sent you a reset code to ${email2.value}`);
}

//  email1.addEventListener("mouseup", capitalize);
//  function capitalize(){
// email1.value.style.fontVariant="upper";
//  }
