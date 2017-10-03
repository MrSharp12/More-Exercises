var score;
var timer;
var playing = false;
var action;
var correctAnswer;

//if we click on start/reset button
document.getElementById('startreset').onclick = function () {
//if we are playing    
    if (playing === true) {
        location.reload();// reload the page
        
    } else { //if we are not playing
        
//change mode to playing
    playing = true;
        
//set score to zero
    score = 0;
    document.getElementById('scorevalue').textContent = score;
        
//makes timer appear
    show('timeremaining');
    timer = 60;
    document.getElementById('timeremainingvalue').textContent = timer;
  
  //hide game over box
    hide('gameOver');      
        
//change button to reset
    document.getElementById('startreset').textContent = 'Reset Game';
     
          
//start countdown
    startCountdown();
        
//generate new Q&A
    createQA();
    }    
};

 //clicking on the answer box   
 for(i = 1; i < 5; i++) {
     document.getElementById('box' + i).onclick = function() {
     //check if we are playing
     if (playing === true){
         if(this.innerHTML == correctAnswer) {
             
             //correct answer
             score++;
             
             document.getElementById('scorevalue').textContent = score;
             
           //hide wrong box and show correct box
             hide('wrong');
             show('correct');
             setTimeout(function(){
                 hide('correct');
             }, 1000);
             
             //generate new Q&A
             createQA();
             
                      }else {
             
             //wrong answer
             hide('correct');
             show('wrong');
             setTimeout(function(){
                 hide('wrong');
             }, 1000);
         }
    }
};
}
  

// functions
    
//start timer
function startCountdown() {
    action = setInterval(function (){
       timer -= 1; 
        
    document.getElementById('timeremainingvalue').textContent = timer;
        if(timer == 0) { //game over
        stopCountdown();
            
        show('gameOver');
            
        document.getElementById('gameOver').innerHTML = '<p>Game over!  Your score is ' + score + '.</p>';
            
        hide('timeremaining');
        hide('correct');
        hide('wrong');
        playing = false;
        document.getElementById('startreset').textContent = 'Start Game';
        }
    }, 1000);
}

//stop timer
function stopCountdown () {
    clearInterval(action);
 }
    
//hide element         
function hide(Id) {
    document.getElementById(Id).style.display = 'none';
}
//show element
function show(Id) {
    document.getElementById(Id).style.display = 'block';
}

//generate new Q&A
function createQA() {
    var x = 1 + Math.round(9 * Math.random());  
    var y = 1 + Math.round(9 * Math.random());
    correctAnswer = x * y;
    document.getElementById('question').textContent = x + 'x' + y;
    
    var correctPosition = 1 + Math.round(3 * Math.random());
    
    //fills box with correct answer
    document.getElementById('box' + correctPosition).textContent = correctAnswer;
    
    //fill with wrong answers
    var answers = [correctAnswer];
    
    for (i = 1; i < 5; i++) {
        if(i != correctPosition) {
           var wrongAnswer; 
           do {
           wrongAnswer = (1 + Math.round(9 * Math.random())) * (1 + Math.round(9 * Math.random())); // a wrong answer
         } while(answers.indexOf(wrongAnswer)>-1)//prevents identical wrong answer from entering answers array
            
            document.getElementById('box' + i).textContent = wrongAnswer;
            
            answers.push(wrongAnswer);
        }
    }
}


