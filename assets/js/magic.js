/* 매직 팝업 */

var magicNextBtn1A = document.getElementById("magic-next-buttons-1-a");
var magicNextBtn1B = document.getElementById("magic-next-buttons-1-b");
var magicNextBtn2A = document.getElementById("magic-next-buttons-2-a");
var magicNextBtn2B = document.getElementById("magic-next-buttons-2-b");
var magicNextBtn3A = document.getElementById("magic-next-buttons-3-a");
var magicNextBtn3B = document.getElementById("magic-next-buttons-3-b");
var magicNextBtn4A = document.getElementById("magic-next-buttons-4-a");
var magicNextBtn4B = document.getElementById("magic-next-buttons-4-b");
var magicNextBtn5A = document.getElementById("magic-next-buttons-5-a");
var magicNextBtn5B = document.getElementById("magic-next-buttons-5-b");

var magicPopup1 = document.getElementById("magic-popup-1");
var magicPopup2 = document.getElementById("magic-popup-2");
var magicPopup3 = document.getElementById("magic-popup-3");
var magicPopup4 = document.getElementById("magic-popup-4");
var magicPopup5 = document.getElementById("magic-popup-5");

var btn1 = document.getElementById("magic-popup-btn-1");
var btn2 = document.getElementById("magic-popup-btn-2");
var btn3 = document.getElementById("magic-popup-btn-3");
var btn4 = document.getElementById("magic-popup-btn-4");
var btn5 = document.getElementById("magic-popup-btn-5");

var closeBtn1 = document.getElementById("magic-popup-close-1");
var closeBtn2 = document.getElementById("magic-popup-close-2");
var closeBtn3 = document.getElementById("magic-popup-close-3");
var closeBtn4 = document.getElementById("magic-popup-close-4");
var closeBtn5 = document.getElementById("magic-popup-close-5");

/* btn onclick */

btn1.onclick = function() {
    magicPopup1.style.display = "block";
}

btn2.onclick = function() {
    magicPopup2.style.display = "block";
}

btn3.onclick = function() {
    magicPopup3.style.display = "block";
}

btn4.onclick = function() {
    magicPopup4.style.display = "block";
}

btn5.onclick = function() {
    magicPopup5.style.display = "block";
}

/* close button */

closeBtn1.onclick = function() {
    magicPopup1.style.display = "none";
}

closeBtn2.onclick = function() {
    magicPopup2.style.display = "none";
}

closeBtn3.onclick = function() {
    magicPopup3.style.display = "none";
}

closeBtn4.onclick = function() {
    magicPopup4.style.display = "none";
}

closeBtn5.onclick = function() {
    magicPopup5.style.display = "none";
}

/* window onclick */

window.onclick = function(event) {
    if (event.target == magicPopup1) {
        magicPopup1.style.display = "none";
    }
    else if (event.target == magicPopup2) {
        magicPopup2.style.display = "none";
    }
    else if (event.target == magicPopup3) {
        magicPopup3.style.display = "none";
    }
    else if (event.target == magicPopup4) {
        magicPopup4.style.display = "none";
    }
    else if (event.target == magicPopup5) {
        magicPopup5.style.display = "none";
    }
}

/* next button */

magicNextBtn1A.onclick = function() {
    if (magicPopup2.style.display == "block") {
        magicPopup2.style.display = "none";
        magicPopup1.style.display = "block";
    }
}

magicNextBtn1B.onclick = function() {
    if (magicPopup5.style.display == "block") {
        magicPopup5.style.display = "none";
        magicPopup1.style.display = "block";
    }
}

magicNextBtn2A.onclick = function() {
    if (magicPopup1.style.display == "block") {
        magicPopup1.style.display = "none";
        magicPopup2.style.display = "block";
    }
}

magicNextBtn2B.onclick = function() {
    if (magicPopup3.style.display == "block") {
        magicPopup3.style.display = "none";
        magicPopup2.style.display = "block";
    }
}

magicNextBtn3A.onclick = function() {
    if (magicPopup2.style.display == "block") {
        magicPopup2.style.display = "none";
        magicPopup3.style.display = "block";
    }
}

magicNextBtn3B.onclick = function() {
    if (magicPopup4.style.display == "block") {
        magicPopup4.style.display = "none";
        magicPopup3.style.display = "block";
    }
}

magicNextBtn4A.onclick = function() {
    if (magicPopup3.style.display == "block") {
        magicPopup3.style.display = "none";
        magicPopup4.style.display = "block";
    }
}

magicNextBtn4B.onclick = function() {
    if (magicPopup5.style.display == "block") {
        magicPopup5.style.display = "none";
        magicPopup4.style.display = "block";
    }
}

magicNextBtn5A.onclick = function() {
    if (magicPopup1.style.display == "block") {
        magicPopup1.style.display = "none";
        magicPopup5.style.display = "block";
    }
}

magicNextBtn5B.onclick = function() {
    if (magicPopup4.style.display == "block") {
        magicPopup4.style.display = "none";
        magicPopup5.style.display = "block";
    }
}