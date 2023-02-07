var min = 0
var time = 0
var timer = 0
var sec = 0
var minute = 0
var secondes = 0
var affichagesec = 0  
function demarageminuteur(){
	timer = time
	ticktok()
}
function ajoutsec(){
	sec = 1
	time = time+sec
	affichagesec= affichagesec + sec
	secondes = (time%60)
	console.log(time)
	setTimeout("affichage()", (20))
}
function retraitsec(){
	sec = -1
	affichagesec= affichagesec + sec
	console.log(affichagesec)
	time = time +sec
	secondes = (time%60)
	if (time<0)
	{
		time = 0
	}
	setTimeout("affichage()", (20))
	console.log(time)
}
function ajoutmin(){
	min = 1
	time =time +(min*60)
	minute = time/60
	console.log(minute)
	setTimeout("affichage()", (20))


}
function retraitmin(){
	min = -1
	time =time+(min*60)
	minute = time/60
	if (time<0)
	{
		time = 0
	}
	setTimeout("affichage()", (20))
	console.log(minute)
}
function ticktok(){
	calculinter = (time/60)
	minute = calculinter.toFixed(1)
	secondes = (time%60)
	console.log(minute)
	console.log(secondes)
	if (time>0)
	{
		time = time-1
		setTimeout("affichage()", (500))
		setTimeout("ticktok()", (1000))
	}else
	{
		alert('cest win')
		
	}


}
function affichage(){
	if (secondes < 10){
		if (secondes==0)
		{
			secondes = "00"
		} else {
			secondes = "0" + secondes
	}}
	if (minute < 10){
		if (minute==0)
		{
			minute = "00"
		} else {
			minute = "0" + Math.trunc(minute)
	}
	}
	document.getElementById("chronotime").innerHTML =  minute + ":" + secondes
}