let name=document.getElementById("name").value
let email=document.getElementById("email").value
let reg=document.getElementById("reg").value

function validate()
{
     if(name.length==0)
     {
        alert("please enter your name")
     }
     else if(email.length==0)
     {
        alert("please enter your email")

     }
     else if(reg.length==0)
     {
        alert("please enter your regno")
     }

}