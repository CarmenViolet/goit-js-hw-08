import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const STORAGE_KEY = "videoplayer-current-time";
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

 function onPlay(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
  console.log(data.seconds);
};

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));