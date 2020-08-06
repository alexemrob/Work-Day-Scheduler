//create variables from HTML
var inputText1 = document.querySelector('#plan1');
var saveBtn1 = document.querySelector('#savePlan1');
var inputText2 = document.querySelector('#plan2');
var saveBtn2 = document.querySelector('#savePlan2');
var inputText3 = document.querySelector('#plan3');
var saveBtn3 = document.querySelector('#savePlan3');
var inputText4 = document.querySelector('#plan4');
var saveBtn4 = document.querySelector('#savePlan4');
var inputText5 = document.querySelector('#plan5');
var saveBtn5 = document.querySelector('#savePlan5');
var inputText6 = document.querySelector('#plan6');
var saveBtn6 = document.querySelector('#savePlan6');
var inputText7 = document.querySelector('#plan7');
var saveBtn7 = document.querySelector('#savePlan7');
var inputText8 = document.querySelector('#plan8');
var saveBtn8 = document.querySelector('#savePlan8');
var inputText9 = document.querySelector('#plan9');
var saveBtn9 = document.querySelector('#savePlan9');

//provides current date & time
$(document).ready(function () {
    var dateParagraph = $("#currentDay");
    var todayDate = moment().format('LLLL');
    dateParagraph.text(todayDate);
});

//function to save input text to local storage when save button is clicked
saveBtn1.addEventListener('click', updateOutput1);
function updateOutput1() {
    localStorage.setItem('content1', inputText1.value);
};
saveBtn2.addEventListener('click', updateOutput2);
function updateOutput2() {
    localStorage.setItem('content2', inputText2.value);
};
saveBtn3.addEventListener('click', updateOutput3);
function updateOutput3() {
    localStorage.setItem('content3', inputText3.value);
};
saveBtn4.addEventListener('click', updateOutput4);
function updateOutput4() {
    localStorage.setItem('content4', inputText4.value);
};
saveBtn5.addEventListener('click', updateOutput5);
function updateOutput5() {
    localStorage.setItem('content5', inputText5.value);
};
saveBtn6.addEventListener('click', updateOutput6);
function updateOutput6() {
    localStorage.setItem('content6', inputText6.value);
};
saveBtn7.addEventListener('click', updateOutput7);
function updateOutput7() {
    localStorage.setItem('content7', inputText7.value);
};
saveBtn8.addEventListener('click', updateOutput8);
function updateOutput8() {
    localStorage.setItem('content8', inputText8.value);
};
saveBtn9.addEventListener('click', updateOutput9);
function updateOutput9() {
    localStorage.setItem('content9', inputText9.value);
};

//shows previously saved text on scheduler if page is refreshed
inputText1.value = localStorage.getItem('content1');
inputText1.value = localStorage.getItem('content2');
inputText1.value = localStorage.getItem('content3');
inputText1.value = localStorage.getItem('content4');
inputText1.value = localStorage.getItem('content5');
inputText1.value = localStorage.getItem('content6');
inputText1.value = localStorage.getItem('content7');
inputText1.value = localStorage.getItem('content8');
inputText1.value = localStorage.getItem('content9');

//statements to change hourly color display depending on time of day
var now= new Date().getHours();

if (now > 9) {
    $("#plan1").addClass("past");
	}	
    else if (now >= 9 && now < 10) {
        $("#plan1").addClass("present");
	}
    else if (now < 9) {
        $("#plan1").addClass("future");
	}



//keep this @ end of script
//button to clear local storage and refresh the page
$("#clear").click(function () {
    localStorage.clear();
    location.reload()
});