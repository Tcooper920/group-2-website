var naming = document.getElementById('naming');


sign.addEventListener("click", function() {
	alert(naming.value + " thank you for signing the pledge");
})


var five = document.getElementById('five');
five.addEventListener("click", function() {
	alert("Thank you for committing to donate " + five.value);
})

var ten = document.getElementById('ten');
ten.addEventListener("click", function() {
	alert("Thank you for committing to donate " + ten.value);
})

var twenty = document.getElementById('twenty');
twenty.addEventListener("click", function() {
	alert("Thank you for committing to donate " + twenty.value);


/* mobile dropdown menu triggered by clicking "hamburger" button *********/
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

/* display the hidden nav links when expanding browser width from mobile size to desktop size *********/
function displayHiddenNavLinksOnDesktop() {

	var numberOfLinks = document.getElementsByClassName("page-links");

	if (window.innerWidth >= 650) { // display links on desktop view
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

/* hide nav bar when scrolling down and show nav bar when scrolling up *********/
var beforeScrollPosition = window.pageYOffset;

window.onscroll = function() {

	var numberOfLinks = document.getElementsByClassName("page-links");
	
	var currentScrollingPosition = window.pageYOffset;

	if (beforeScrollPosition < currentScrollingPosition) {	
		for (var i = 0; i < numberOfLinks.length; i++) { // hide links in nav bar
			document.getElementsByTagName("nav")[0].getElementsByClassName("page-links")[i].style.display = "none";
		}
		document.getElementsByTagName("nav")[0].style.top = "-3rem"; // hide nav bar
	} else {
		
		if (window.innerWidth >= 650) { // hide links by default if window resized from desktop to mobile width
			for (var i = 0; i < numberOfLinks.length; i++) { // show links in nav bar
				document.getElementsByTagName("nav")[0].getElementsByClassName("page-links")[i].style.display = "block";
			}
		}
		document.getElementsByTagName("nav")[0].style.top = "0"; //show nav bar
	}
	beforeScrollPosition = currentScrollingPosition;
}

/* "Back to Top" button *********/

var backToTopBtn = document.getElementById("back-top-top");

backToTopBtn.addEventListener("click", function(){
	window.scrollTo(0, 0);
});
    
    
///////////// resets to recycle box shows and resets words white ////////RM///////////

document.getElementById("threeRsWhite").onclick = function() {spinSpinSpin()};

function spinSpinSpin(){
    document.getElementById("R1").style.opacity = "1";
    document.getElementById("R2").style.opacity = "1";
    document.getElementById("R3").style.opacity = "1";
    document.getElementById("R1_Explained").style.display = "block";
    document.getElementById("R2_Explained").style.display = "none";
    document.getElementById("R3_Explained").style.display = "none";
}

///////////// reduce box shows and dims other words ///////////RM/////////

document.getElementById("R1").onclick = function() {reduceBox()};

function reduceBox(){
    document.getElementById("R1").style.opacity = "1";
    document.getElementById("R2").style.opacity = ".3";
    document.getElementById("R3").style.opacity = ".3";
    document.getElementById("R1_Explained").style.display = "block";
    document.getElementById("R2_Explained").style.display = "none";
    document.getElementById("R3_Explained").style.display = "none";
}

///////////// reuse box shows and dims other words //////////RM//////////

document.getElementById("R2").onclick = function() {reuseBox()};

function reuseBox(){
    document.getElementById("R1").style.opacity = ".3";
    document.getElementById("R2").style.opacity = "1";
    document.getElementById("R3").style.opacity = ".3";
    document.getElementById("R1_Explained").style.display = "none";
    document.getElementById("R2_Explained").style.display = "block";
    document.getElementById("R3_Explained").style.display = "none";
}

///////////// recycle box shows and dims other words /////////RM///////////

document.getElementById("R3").onclick = function() {recycleBox()};

function recycleBox(){
    document.getElementById("R1").style.opacity = ".3";
    document.getElementById("R2").style.opacity = ".3";
    document.getElementById("R3").style.opacity = "1";
    document.getElementById("R1_Explained").style.display = "none";
    document.getElementById("R2_Explained").style.display = "none";
    document.getElementById("R3_Explained").style.display = "block";
}

///////////// read more and read less toggle //////////////RM//////

document.getElementById("readMoreOrLess").onclick = function() {readLess()};


function readLess(){
    var buttonLess = document.getElementById("readMoreOrLess"); 
    var hiddenWords = document.getElementById("hiddenWords");
    
    if(buttonLess.innerHTML === "Read Less"){
        buttonLess.innerHTML = "Read More";
        hiddenWords.style.display = "none";
    } else {
        buttonLess.innerHTML = "Read Less";
        hiddenWords.style.display = "block";
    }
}


