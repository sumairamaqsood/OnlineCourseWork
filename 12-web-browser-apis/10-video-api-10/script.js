const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const time = document.getElementById('current-time');

play.addEventListener('click', () => video.play());
pause.addEventListener('click', () => video.pause());
stop.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
});

video.addEventListener(
  'timeupdate',
  () => (time.innerText = video.currentTime)
);
