let div = document.getElementById("div");
let reset = document.getElementById("reset");
let email1 = document.getElementById("email1");
let email2 = document.getElementById("email2");


reset.addEventListener("click", submit);


function submit() {
  confirm(`Confirm that ${email2.value} is your email`);
  if(email2.value=='') {
    alert(`Enter a valid email`);
    return ;
  }else if(/\w+@\w+.\w+/.test(email2.value)){
    return
  }

  alert(`We have sent you a reset code to ${email2.value}`);
}

//  email1.addEventListener("mouseup", capitalize);
//  function capitalize(){
// email1.value.style.fontVariant="upper";
//  }
