

/* mobile dropdown menu triggered by clicking "hamburger" button */
document.getElementById("mobile-menu-button").addEventListener("click", function () {

	var numberOfLinks = document.getElementsByClassName("page-links");

	if (document.getElementsByTagName("nav")[0].getElementsByClassName("page-links")[0].style.display != "block") {

		for (var i = 0; i < numberOfLinks.length; i++) {
			document.getElementsByTagName("nav")[0].getElementsByClassName("page-links")[i].style.display = "block";
		}

	} else {

		for (var i = 0; i < numberOfLinks.length; i++) {
			document.getElementsByTagName("nav")[0].getElementsByClassName("page-links")[i].style.display = "none";
		}

	}

});

/* display the hidden nav links when expanding browser width from mobile size to desktop size */
function displayHiddenNavLinksOnDesktop() {

	var numberOfLinks = document.getElementsByClassName("page-links");

	if (window.innerWidth >= 450) { // display links on desktop view
		for (var i = 0; i < numberOfLinks.length; i++) {
			document.getElementsByTagName("nav")[0].getElementsByClassName("page-links")[i].style.display = "block";
		}
	} else {
		for (var i = 0; i < numberOfLinks.length; i++) { // hide links on mobile view
			document.getElementsByTagName("nav")[0].getElementsByClassName("page-links")[i].style.display = "none";
		}
	}

}

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






