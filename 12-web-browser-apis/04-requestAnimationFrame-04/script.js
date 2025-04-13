const image = document.querySelector('img');
let start;
let done = false;

function step(timestamp) {
  if (start === undefined) start = timestamp;

  const elapsed = timestamp - start;
  if (elapsed > 2000) {
    done = true;
  }
  if (done) {
    return;
  }
  image.style.transform = `translateX(${elapsed / 5}px) rotate(${
    elapsed / 5
  }deg)`;
  requestAnimationFrame(step);
}
requestAnimationFrame(step);
