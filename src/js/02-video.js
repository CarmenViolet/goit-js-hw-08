import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const STORAGE_KEY = "videoplayer-current-time";
const player = new Player(iframe);


function onPlay(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
  console.log(data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(Number(localStorage.getItem(STORAGE_KEY)));