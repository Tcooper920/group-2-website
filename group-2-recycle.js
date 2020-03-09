
window.onresize = displayHiddenNavLinksOnDesktop;

/* rosie js */
/* hover on recycle symbol - it spins */

var spinner = document.getElementsByClassName("threeRsWhite");

var R1symbol = document.getElementsByClassName("threeRsR1");

var R2symbol = document.getElementsByClassName("threeRsR2");

var R3symbol = document.getElementsByClassName("threeRsR3");

spinner.addEventListener("mouseover", spinFunction());

function spinFunction(){
    console.log("hi")
}
$('.threeRsWhite').mouseover(function(){
    $(this).fadeOut();
    $(this).fadeIn();
});






