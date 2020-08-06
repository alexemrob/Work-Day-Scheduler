//provides current date & time
$(document).ready(function () {
    var dateParagraph = $("#currentDay");
    var todayDate = moment().format('LLLL');
    dateParagraph.text(todayDate);
});

//button to clear local storage and refresh the page
$("#clear").click(function () {
    localStorage.clear();
    location.reload()
});

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

