
var character = document.getElementById("character");
var block = document.getElementById("monster");
var score = 0;

function jump(){
	if(character.classList!="animate"){
	character.classList.add("animate"); 
	}
	setTimeout(function(){
	character.classList.remove("animate");}, 750);
}
function gameWindowRestart(){
	document.getElementById("gameWindow").innerHTML = "<b>You lost.. </b>" + "<br><br>Your score: " + score +'<br><br><span class="reset" onclick = "location.reload()"><div id ="restartBtn"><b>Again?</b></id></span>';;
}

var checkDead = setInterval(function(){
    var characterTop=
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft=
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	
	score++;
	document.getElementById("score").innerHTML = "Your score: " + score;
	
    if(blockLeft<20 && blockLeft>0 && characterTop>=150){
        block.style.animation = "none";
        block.style.display = "none";
		character.style.display = "none";
		floor.style.display = "none";
		document.getElementById("score").style.display = "none";
		gameWindowRestart();
    } 
},10);

