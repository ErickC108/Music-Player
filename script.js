let progess = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function() {
  progess.max = song.duration;
  progess.value = song.currentTime;
}

function playPause(){
  if
}