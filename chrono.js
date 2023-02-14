var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
lap = 0;
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotimer").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}
//minuterie de démarrage 
function chronoStart(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
	chrono()
}
//En cas de pause, minuterie Relaunhc
function chronoContinue(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
//Réinitialiser le minuteur 0:00:00:000
function chronoReset(){
	document.getElementById("chronotimer").innerHTML = "0:00:00:000"
    start = new Date()
    $("#tours").empty();
    lap =0;
}
//lorsque stop ON réinitialiser la minuterie 0:00:00:000
function chronoStopReset(){
	document.getElementById("chronotimer").innerHTML = "0:00:00:000"
    document.chronoForm.startstop.onclick = chronoStart
    $("#tours").empty();
    lap = 0;
}
// Minuterie d’arrêt/relancement
function chronoStop(){
	document.chronoForm.startstop.value = "start!"
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
}
// Tours NBR
function laptimer(){
    lap = lap+1;
    laps = document.getElementById("chronotimer").innerHTML;
    $("#tours").append(lap);
    $("#tours").append('  :');
    $("#tours").append(laps);
    $("#tours").append('</br>');
}