
/*window.onresize = displayHiddenNavLinksOnDesktop;*/

/* rosie js */
/* hover on recycle symbol - it spins */

var spinner = document.getElementsByClassName("threeRsWhite");

var R1 = document.getElementsByClassName("R1");

var R2 = document.getElementsByClassName("R2");

var R3 = document.getElementsByClassName("R3");

var R1_Explained = document.getElementsByClassName("R1_Explained");

var R2_Explained = document.getElementsByClassName("R2_Explained");

var R3_Explained = document.getElementsByClassName("R3_Explained");


var RSymbol;

R1.addEventListener("click", function(){
    RSymbol = "pick1"
});

R2.addEventListener("click", function(){
    RSymbol = "pick2"
});

R3.addEventListener("click", function(){
    RSymbol = "pick3"
});

function recyclePicks(R1, R2, R3){
    if(RSymbol == "pick1"){
        R2.style.color = "000"
    }
}
R2.style.color = "000"









