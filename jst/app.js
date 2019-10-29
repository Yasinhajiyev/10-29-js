var next=document.getElementById("next")
var before=document.getElementById("before")
var sliderul=document.querySelector(".container ul")

var start=0

next.onclick=function(){
    start++;   
    if(start==sliderul.querySelectorAll("li").length){
        start=0
    }
    sliderul.style.left=-800*start+"px"
}