let mode = document.getElementById("mode");
let theme = document.getElementById("theme");

function changeMode() {
  console.log(mode.checked);
  console.log(theme);
  mode.checked
    ? ((document.getElementById("themeName").textContent = "Dark"),
      (theme.href = "dark.css"))
    : ((document.getElementById("themeName").textContent = "Light"),
      (theme.href = "light.css"));
}

mode.addEventListener("click", changeMode);

let counter_up = document.querySelector(".counterUp");
counter_up.addEventListener("mouseover", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 100; // The lower the slower

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      // Lower inc to slow and higher to slow
      const inc = Math.floor(target / speed);

      // console.log(inc);
      // console.log(count);

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = count + inc;
        // Call function every ms
        setTimeout(updateCount, 30);
      } else counter.innerText = `${target}+`;
    };

    updateCount();
  });
});

AOS.init({
  disable: function () {
    var maxWidth = 746;
    return window.innerWidth < maxWidth;
  },
});

// play and stop the videos

const arrOfVideos = [
  "restaurantVideo",
  "hiratoVideo",
  "learnorbVideo",
  "zerodhaVideo",
  "baillyVideo",
  "expenseManagerVideo",
];

const play = document.querySelectorAll(".playVideo");

const stopButton = document.querySelectorAll(".stopVideo");
console.log(play, stopButton);
for (let i = 0; i < arrOfVideos.length; i++) {
  let video = document.getElementById(arrOfVideos[i]);
  console.log(video, i);
  play[i].addEventListener("click", function () {
    video.play();
  });
  stopButton[i].addEventListener("click", function () {
    video.pause();
  });
}
