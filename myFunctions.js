var btn_submit = document.getElementsByClassName("btn_submit")
var info = document.getElementById("info")

btn_submit.onclick = function(){
    info.style.display = "block"
}




$(document).ready(function(){
    $(".btn_submit").click(function(){
       $("#info").slideToggle() 
    })
})