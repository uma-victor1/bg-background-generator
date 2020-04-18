var css = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.querySelector("#gragra");


color1.addEventListener("input", function(){
  body.style.background = "linear-gradient(to right," + color1.value +","+ color2.value + ")";
});
color2.addEventListener("input", function(){
    body.style.background = "linear-gradient(to right," + color1.value +","+ color2.value + ")";
});

var rev = document.querySelector(".reveal")
var butt = document.querySelector(".clickme")


butt.addEventListener("click", function(){
  rev.classList.toggle("showme");
});