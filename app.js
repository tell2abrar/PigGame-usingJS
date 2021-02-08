//Selecting Elements of DOM
var newButton=document.querySelector(".btn-new");
var rollButton=document.querySelector(".btn-roll");
var holdButton=document.querySelector(".btn-hold");
var totallScorePlayer1=document.getElementById('score-0');
var totallScorePlayer2=document.getElementById('score-1');
var currentScorePlayer1=document.getElementById('current-0');
var currentScorePlayer2=document.getElementById('current-1');
var diceImage=document.querySelector(".dice");
var turnPlayer1=document.querySelector(".player-0-panel");
var turnPlayer2=document.querySelector(".player-1-panel");
var turn,currentScore,dice,gameStatus,temp1,temp2;

start();


//Roll Button Functionality is being defined here
rollButton.addEventListener("click",function(){

	if(turn===0 && gameStatus==true) //For Player1 Turn
	{
		turnPlayer1.classList.add("active");
		turnPlayer2.classList.remove("active");
		currentScorePlayer2.textContent=0;
		dice=diceRoll();
		if(dice!==1)
		{
			diceImage.src="dice-"+dice+".png";
			diceImage.style.display="block";
			currentScore+=dice;
			currentScorePlayer1.textContent=currentScore;
			if(temp1>=100)
			{
				totallScorePlayer1.textContent=currentScore;
				document.querySelector("#name-0").textContent="Winner!";
				gameStatus=false;
			}
		}else {
			diceImage.src="dice-"+dice+".png";
			diceImage.style.display="block";
			currentScore=0;
			currentScorePlayer1.textContent=currentScore;
			turn=1;
		}

	}
	else if (turn===1 && gameStatus==true){ //For Player2 Turn
		turnPlayer2.classList.add("active");
		turnPlayer1.classList.remove("active");
		currentScorePlayer1.textContent=0;
		dice=diceRoll();
		if(dice!==1)
		{
			diceImage.src="dice-"+dice+".png";
			diceImage.style.display="block";
			currentScore+=dice;
			currentScorePlayer2.textContent=currentScore;
			if(temp2>=100)
			{
				totallScorePlayer2.textContent=currentScore;
				document.querySelector("#name-1").textContent="Winner!";
				gameStatus=false;
			}
		}else{
			diceImage.src="dice-"+dice+".png";
			diceImage.style.display="block";
			currentScore=0;
			currentScorePlayer2.textContent=currentScore;
			turn=0;
		}
	}
});




//Hold Button Functionality is being defined here

holdButton.addEventListener("click",function(){

	if(turn===0 && dice>1 && gameStatus==true) //for Player1
	{
		
		temp1=Number(totallScorePlayer1.textContent);
		temp1+=currentScore;
		totallScorePlayer1.textContent=temp1;
		if(temp1>=100)
		{
			document.querySelector("#name-0").textContent="Winner";
			gameStatus=false;
		}
		else{
			turn=1;
			turnPlayer2.classList.add("active");
			turnPlayer1.classList.remove("active");
			currentScore=0;
			currentScorePlayer1.textContent=0;
		}


	}else if (turn===1 && dice>1 && gameStatus==true){ //for Player2

		temp2=Number(totallScorePlayer2.textContent);
		diceImage.style.display = 'none';
		temp2+=currentScore;
		totallScorePlayer2.textContent=temp2;
		if(temp2>=100)
		{
			document.querySelector("#name-1").textContent="Winner";
			gameStatus=false;
		}
		else{
			turn=0;
			turnPlayer1.classList.add("active");
			turnPlayer2.classList.remove("active");
			currentScore=0;
			currentScorePlayer2.textContent=0;
		}
	}
});



//New Game Button functionality is being defined here
newButton.addEventListener("click",start);





//General/common functions decleration
function diceRoll()
{
	 return Math.floor(Math.random() * 6) + 1 ;
} 

function start()
{
	turn=0;
    gameStatus=true;
    diceImage.style.display = 'none';
    currentScore=0;
    temp1=temp2=0;
    dice=0;
    currentScore=0;
    document.querySelector("#name-1").textContent="Player 2";
    document.querySelector("#name-0").textContent="Player 1";
    totallScorePlayer1.textContent=0;
    totallScorePlayer2.textContent=0;
    currentScorePlayer1.textContent=0;
    currentScorePlayer2.textContent=0;

}
