const ball = document.getElementById('ball');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const speedup = document.getElementById('speed-up');
const slowdown = document.getElementById('slow-down');

const rollAnimation = [
  {
    transform: 'rotate(0) translate3D(-50%, -50%, 0)',
    color: 'white',
  },
  {
    color: 'blue',
    offset: 0.3,
  },
  {
    transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
    color: 'white',
  },
];

const rollOptions = {
  duration: 2000,
  iterations: Infinity,
  // easing: 'linear',
};

const roll = ball.animate(rollAnimation, rollOptions);

play.addEventListener('click', () => {
  roll.playbackRate = 1;
  roll.play();
});
pause.addEventListener('click', () => roll.pause());
reverse.addEventListener('click', () => roll.reverse());
speedup.addEventListener(
  'click',
  () => (roll.playbackRate = roll.playbackRate * 2)
);
slowdown.addEventListener(
  'click',
  () => (roll.playbackRate = roll.playbackRate * 0.5)
);
