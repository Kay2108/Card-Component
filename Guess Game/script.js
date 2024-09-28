
let user_Guess = document.getElementById("user_GuessInput");
let btn_Guess = document.getElementById("btn_Guess");
let resultParagraph = document.getElementById("result");


function handleUser_GuessInput(event){
    user_Guess = e.target.value;
}
user_Guess.addEventListener("Input",handleUser_GuessInput);

function handleBtn_Guess(event){
    btn_Guess.addEventListener("click", handleBtn_Guess);
    
    let inputNumber = parseInt(user_Guess.value);
    let result = Math.floor(Math.random() *10);

    resultParagraph.innerHTML = 'Generated Number : ' + result;

    if (inputNumber == result) {
        resultParagraph.innerHTML += "Congratulations!!! You win";
    }
    else {
        resultParagraph.innerHTML += "Sorry You lose!!!";
    }
}
