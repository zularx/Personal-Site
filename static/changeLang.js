const button = document.getElementById("changeLangBtn");
const englishText = document.querySelectorAll(".enTxt")
const russianText = document.querySelectorAll(".ruTxt")
const englishH1 = document.querySelector(".enTxtH1")
const englishH2 = document.querySelectorAll(".enTxtH2")
const russianH1 = document.querySelector(".ruTxtH1")
const russianH2 = document.querySelectorAll(".ruTxtH2")
let lang = 'en'


button.addEventListener("click", function() {
    if (lang === 'en') {
        lang = 'ru';
        englishH1.id = 'noDisp'
        russianH1.id = 'disp'
        englishText.forEach(el => el.id = 'noDisp')
        russianText.forEach(el => el.id = 'disp')
        englishH2.forEach(el => el.id = 'noDisp')
        russianH2.forEach(el => el.id = 'disp')
    } else {
        lang = 'en';
        englishH1.id = 'disp'
        russianH1.id = 'noDisp'
        englishText.forEach(el => el.id = 'disp')
        russianText.forEach(el => el.id = 'noDisp')
        englishH2.forEach(el => el.id = 'disp')
        russianH2.forEach(el => el.id = 'noDisp')
    }
  });