
/*window.onresize = displayHiddenNavLinksOnDesktop;*/

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


