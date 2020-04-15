
//content
const content = document.querySelector('.showAge');
//button
const button = document.querySelector('.sub-btn');
//Input
const birthdateitem = document.querySelector('#bday-input');

//EventListner
button.addEventListener('click', output );

//works
function output() {    
    // input value
    var birthdayValue = birthdateitem.value;
    //convert dateTime
    var birthday = new Date(birthdayValue);
    // Substruct current time from birthday time
    var diff = Date.now() - birthday.getTime();
    // store that on new variable
    var ageDate = new Date(diff);
    //substruct new variable from 1970
    content.innerText = ageDate.getUTCFullYear() - 1970;
}




