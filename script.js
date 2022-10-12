let div=document.getElementById("div")
let reset=document.getElementById("reset");
let email1=document.getElementById("email1");
let email2=document.getElementById("email2");
reset.addEventListener("click", submit);
function submit(){
  confirm(`Confirm that ${email2.value} is your email`);
  alert(`We have sent you a reset code to ${email2.value}`)
    
   
}

//  email1.addEventListener("mouseup", capitalize);
//  function capitalize(){
    // email1.value.style.fontVariant="upper";
//  }