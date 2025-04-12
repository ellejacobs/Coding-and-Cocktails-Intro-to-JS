const addDevSkill = function (skill) {
    let listItem = document.createElement('li');
    listItem.innerHTML = skill;
    document.getElementById("coding-section").appendChild(listItem);
};

const dance = function (item) {
   return 'I\'d like a ' + item + ', please!';
};
 
const jersey = 'cocktail';

let numberofclicks = 0
const clickHandler = function (text) {
    numberofclicks = numberofclicks + 1;
    console.log('numberOfClicks', numberofclicks);
    if (numberofclicks <= 3) {
        alert(text);
} else {
    alert("Drink in moderation --- no more cocktails for you!");
}
};

// Declare brainSkills array below this line

document.addEventListener("DOMContentLoaded", function (event) {

   document.getElementById('cocktail-section').innerHTML = dance(jersey);

});
