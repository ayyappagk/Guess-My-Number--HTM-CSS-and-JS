
let secretNum=Math.trunc(Math.random()*20)+1;
console.log(secretNum);

let score=20;
let highScore=0;

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
    
}

document.querySelector('#btn_check').addEventListener('click',()=>{
    const guessNum=Number(document.querySelector('.guessNum').value);

    // If Input is not Empty
    if(guessNum!='' && guessNum>0 && guessNum<=20){

       // If Input does not match Secret number
      if(guessNum != secretNum)
      {
        if(score>1)
        {
          score--;
          document.querySelector('.score').textContent=score;
          displayMessage(guessNum>secretNum?"Too High!":"Too Low!");
          document.querySelector('.score').textContent=score;
          document.querySelector('body').style.backgroundColor='black';
        }else
          {
            displayMessage('Busted! You Lost the Game');
            document.querySelector('.score').textContent=0;
            document.querySelector('body').style.backgroundColor='red';
          }

      }else{
        // If Input match with Secret number
        if(score > highScore){
          highScore=score;
          document.querySelector('.highScore').textContent=highScore;
        displayMessage('You Guessed Correct..!');
        document.querySelector('.questionMark').textContent=secretNum;
        document.querySelector('.message').style.color='white';
        document.querySelector('body').style.backgroundColor='green';
        
        }
        
      }
      
    }else 
      // If Input is Empty
      {
       displayMessage("Please Enter Number Between 1 and 20")
       document.querySelector('.message').style.color='red';
      }
  });


// reset to play again
  document.querySelector('#btn_again').addEventListener('click',()=>{
    displayMessage("Start Guessing...")
    score=20;
    secretNum=Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=score;
    document.querySelector('.questionMark').textContent="?";
    document.querySelector('.guessNum').value='';
    document.querySelector('.message').style.color='white';
    document.querySelector('body').style.backgroundColor='black';

  });



