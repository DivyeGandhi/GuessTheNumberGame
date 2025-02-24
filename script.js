let count =0;
const HiddenNumber = parseInt(Math.random()*100+1);

const guessedNumberdiv = document.querySelector("#guess");
const container = document.querySelector(".container");
const TryThisBtn = document.querySelector('#TryThisBtn');
const HintMessage = document.querySelector('.HintMessage');
const prevGuess = document.querySelector('.prevGuess');
const Chances = document.querySelector('.Chances');
Chances.innerHTML=10;
// const gameon=
TryThisBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    // console.log(e.target);
    if(count===9){
        printMessage(`You Lost the number was ${HiddenNumber}`);
        guessedNumberdiv.setAttribute('disable','True');
        EndGame();
    }
    else{
        ValidateInp(guessedNumberdiv);
    }
    
});

function ValidateInp(guessedNumberdiv){
    const guessedNumber = parseInt(guessedNumberdiv.value);
    if(isNaN(guessedNumber)){
        printMessage("Enter Valid Number");
    }
    else if(guessedNumber<=0){
        printMessage("Enter Number More Than equal to 1");
    }
    else if(guessedNumber>100){
        printMessage("Enter Number Less Than 100");
    }
    else{
        count++;
        prevGuess.appendChild(document.createTextNode(guessedNumber + " "));
        Chances.innerHTML=10-count;
        CheckInp(guessedNumber,HiddenNumber);
    }
    guessedNumberdiv.value="";
}
function printMessage(message){
    HintMessage.innerHTML=message;
}
function CheckInp(guessedNumber,HiddenNumber){
    if(guessedNumber<HiddenNumber){
        printMessage("Number Too Small");
    }
    else if(guessedNumber>HiddenNumber){
        printMessage("Number Too Large");
    }
    else{
        printMessage("Congratulations !! It's a Match");
        EndGame();
    }
}
function EndGame(){
    Chances.innerHTML=0;
    let restartbutton =document.createElement("button");
    restartbutton.innerText="NEW GAME";
    restartbutton.addEventListener('click',(e)=>{
        restartbutton.remove();
        StartGame();
    });
    container.appendChild(restartbutton);
}
function StartGame(){
    guessedNumberdiv.value="";
    count=0;
    prevGuess.innerHTML="";
    Chances.innerHTML=10-count;
    HintMessage.innerHTML="";
}