let div=document.getElementsByTagName("div")
let reset=document.getElementById("reset");
let email=document.getElementById("email");
reset.addEventListener("click", submit);
function submit(){
    alert(`We have sent you a reset code to ${email.value}`)
    div.style.backgroundColor="black";
};