
const button = document.querySelector('#check-btn')
const input = document.querySelector('#text-input')
const result = document.querySelector('#result')
let resultado;

button.addEventListener('click',() =>{
    if(input.value.length == 0){
        alert('Please input a value');
    } else {

        var cleanText =  input.value.trim().toLowerCase();

        if(esPalindromo(cleanText)){

            result.textContent = cleanText + " is a palindrome.";

        } else{

            result.textContent = cleanText + " is not a palindrome.";

        }
    }

});

function esPalindromo(text){
    var re = /[^A-Za-z0-9]/g;
    var reversedText =  text.replace(re,'').split('').reverse().join('');
    console.log(text.replace(re,''));
    console.log(reversedText);
    return reversedText === text.replace(re,'');
}
