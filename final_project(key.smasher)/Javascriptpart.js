var canvas;
var canvasContext;
let x=20;
var string;
let score = 0;
let highscore = 0;
var typeval;



window.onload = function(){
	canvas = document.getElementById('gameCanvas');
	 typeval = document.getElementById("typingValue"); 		//user typed value.
	canvasContext = canvas.getContext('2d');

	let fps=40;
	
	setInterval(function(){
		if(x==20){
			string = str(no);
		}
		moveEverything();
		drawEverything(x,string);
		if(x>820 || check()){
			x=20;
			document.getElementById("val").value = ''; 		//if inputed value get match then blank the input box.
			no++;
		}
	},1000/fps)
}

function drawEverything(x,string){
	canvasContext.fillStyle='black';		//for background.
	canvasContext.fillRect(20,20,canvas.width,canvas.height);

	drawString(x,string);
	scoreBoard(score);
	highScoreBoard(highscore);
}

function moveEverything(){
	x+=2;
}

let no= Math.floor(Math.random()*3+2); 		//random number between 3 to 5.

function drawString(x,string){
	canvasContext.font="40px Verdana";
	canvasContext.fillStyle='darkred';
	canvasContext.fillText(string,x,135);  // place of text appearing.
}

function str(len){
	let random_str='';
	let random_ascii;
	for(let i=0;i<=len;i++){
		random_ascii=Math.floor((Math.random()*25)+97);
		random_str+=String.fromCharCode(random_ascii);
	}
	return random_str;
}

function holdString(no){
	return str(no);
}

function check(){
	var userVal = document.getElementById("val").value;
	if(userVal==string){
		return true;
	}
	return false;
}

function scoreVal(){
	if(check()){
		score++;
	}
}

function highScoreVal(){
	if(score>highscore){
		highscore=score;
	}
}

function scoreBoard(score){
	scoreVal();
	canvasContext.fillStyle = "greenyellow";
	canvasContext.fillText("Score: ",40,60);
	canvasContext.fillStyle = "greenyellow";
	canvasContext.font = "30px Verdana";
	canvasContext.fillText(score, 180, 60);
}
function highScoreBoard(highscore){
	highScoreVal();
	canvasContext.fillStyle = "greenyellow";
	canvasContext.fillText("High Score: ",670,60);
	canvasContext.fillStyle = "greenyellow";
	canvasContext.font = "30px Verdana";
	canvasContext.fillText(highscore, 850, 60);
}


/*
//new things........*****this things will show us how many words we have written
//how much speed.

let startTime;
let endTime;


//start and end time of game 

const playGame = () => {

	let date = new Date();
	startTime = date.getTime();
	
}
const endPlay = () => {

	let date = new Date();
	endTime = date.getTime();
	let totalTime = ((endTime - startTime)/1000);

	console.log(totalTime);


	let totalStr = typeWords.value;
	let wordCount = wordCounter(totalStr);
	let speed = Math.round((wordCount/totalTime)*60);
      let finalMsg = "you typed total at " +speed+ "words per minutes";
	   
	  finalMsg += compareWords(msg.innerText,totalStr);
	   msg.innerText =finalMsg;//it will display speed but it will not work now
	
	}
const wordCounter = (str) => {       //how many words user have written
  
	let response = str.split(" ").length;
	console.log(response);
	return response;
  



}
const compareWords = (str1, str2) => {
	let words1 = str1.split(" ");
	let words2 = str2.split(" ");
	let cnt = 0;

	words1.forEach(function(item, index){

		if(item == words2[index]){


			cnt++;
		}
	})
	let errorWords =(words1.length - cnt );
	return ( cnt + "correct out of " + words1.length + " words and the
	     total number of error are " + errorWords + "." );

}

*/
