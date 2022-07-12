const video = document.getElementById("video");
const aidarVideo = document.getElementById("aidar-video");

const musicPlay = document.getElementById("music-play");

const trackList = ["phrase1", "phrase2", "phrase3"];
const trackList1 = ["phrase1", "phrase2", "phrase3"];
let num = 0;
var random_file = trackList[Math.floor(Math.random() * trackList.length)];

var audio = new Audio(random_file);

// audio.play();

// audio.addEventListener('ended', function(){
// audio.play();e
// }

const playPause = (audio) => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

musicPlay.addEventListener("click", playMusic);

aidarVideo.addEventListener("click", () => {
  playPause(aidarVideo);
});
