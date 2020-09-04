'use strict';

console.log('the js is aliiive!');

// Prompt the user
var user = prompt('What is your name?');


var ready = prompt('wanna play a guessing game? Y/N');
var answer1 = null;
var answer2 = null;
var answer3 = null;
var answer4 = null;
var answer5 = null;
var score = 0;

function question1() {
    answer1 = prompt('Am I from Tennessee? Y/N');
    console.log('Still a country bumpkin')
    if(answer1.toUpperCase() ==='Y' || answer1.toUpperCase() === 'YES') {
        alert('Shoot Fire..');
    }

    if (answer1.toLowerCase() === 'n' || answer1.toLowerCase() === 'no') {
        alert('Git R Done');
        ++score;
        console.log(score);
    }

}

    function question2() {
    answer2 = prompt('Did I use to live in a small town? Y/N');
    console.log('Everyone knows everybody!')
    if(answer2.toUpperCase() === 'Y' || answer2.toUpperCase() === 'YES') {
        alert('Dang Skippy');
        ++score;
        console.log(score);
    }

    if(answer2.toLowerCase() === 'n' || answer2.toLowerCase() === 'no') {
        alert('Dang..That aint it');
    }

}

    function question3() {
    answer3 = prompt('Do I like VR systems? Y/N');
    console.log('Things are getting real..')
    if(answer3.toUpperCase() === 'Y' || answer3.toUpperCase() === 'YES') {
        alert('Out of this world!');
        ++score;
        console.log(score);
    }
    if(answer3.toLowerCase() === 'n' || answer3.toLowerCase() === 'no'){
        alert('Game Over');
    }

}


    function question4() {
    answer4 = prompt('Do i like Software Development? Y/N');
    console.log('Coding is my game..')
    if(answer4.toUpperCase() === 'Y' || answer4.toUpperCase() === 'YES') {
        alert('Lovin it!');
        ++score;
        console.log(score);
    }
    if(answer4.toLowerCase() === 'n' || answer4.toLowerCase() === 'no'){
        alert('Where am I?');
    }

}
 


    function question5() {
    answer5 = prompt('Do I like Musicals? Y/N');
    console.log('I am not throwin away my shot!')
    if(answer5.toUpperCase() === 'Y' || answer5.toUpperCase() === 'YES') {
        alert('You are a mind at work!');
       ++score;
        console.log(score);
    }
    if(answer5.toLowerCase() === 'n' || answer5.toLowerCase() === 'no'){
        alert('Noone mourns the Wicked.. ):' )
    }
}
if(ready.toUpperCase() === 'Y' || ready.toUpperCase() ==='YES'){
    question1();
    question2();
    question3();
    question4();
    question5();
}
    alert('Welcome, ' + user);
    
    
 

    function guessingGame(){
    var correctAnswer = 25;
    var gameTime = prompt("want to play different game?");

    if (gameTime.toLowerCase() === 'n' || gameTime.toLowerCase() === 'no') {
        alert("fine then... I didn't want to play with you either...): ");

    }else if (gameTime.toUpperCase() === 'Y' || gameTime.toUpperCase() === 'YES') {
        
            for (var i =0; i < 4; i++) {
            var playGame = prompt('I am thinking of a number between 1 and 100');

             if (parseInt(playGame) === correctAnswer) {
                alert('YAAAaAAAASSSSSS');
                ++score;
                console.log(score);
                break;
            }else if (parseInt(playGame) < correctAnswer) {
                alert('not quite high enough');

            }else if (parseInt(playGame) > correctAnswer) {
                alert(" whoa... not that high..");

            } 
            if (i == 3) {
                alert("You know what's funnier than 24?.....  " + correctAnswer);
            } 
        }  
    }
}
    guessingGame();

    function myFavoriteFlowers() {
    var flowers = new Array('tulip', 'rose', 'blossum', 'buttercup', "gray's lily", 'lily');
   
        loop1: for (var i = 0; i < 6; i++){
        var question = prompt ('what are my favorite flowers?'); 
        console.log(question);
            loop2: for (var j = 0; j < flowers.length; j++){
                console.log(flowers[j]);
              if (flowers[j] === question ){
                  alert('Correct!!');
                  ++score;
                console.log(flowers);
                break loop1;
              }
            }
            if (i == 5){
                alert("These are my favorites! " + flowers);
            }
    }
}      
    myFavoriteFlowers();

    alert('You got ' + score + ' right!')