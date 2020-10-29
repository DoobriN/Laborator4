document.addEventListener("touchstart", on_touch);
document.addEventListener("mousedown", on_touch);

var recognition = new webkitSpeechRecognition(); (creem obiectul webkitSpeechRecognition care furnizeaza interfata de vorbire)
recognition.lang = |'cn-US';

function on_touch()
{
	if(recogntion.start){
		recognition.start();
		
		recogntion_started = true;
		
	}
	
}

function onend()
{
	recogntion.stop();
	recognition_started = false;
}

recogntion.onend = onend;
recogntion.onsoundend = onend;
recogntion.onspeechend = onend;
recogntion.onresult = on_results;

function on_results(e)
{
	document.getElementById("text").innerHTML +=  "Ati rostit cuvantul:   "+   e.results[0][0].transcript   +  ",   acuratete:  "+e.results[0][0].confidence + "<br>";
}

