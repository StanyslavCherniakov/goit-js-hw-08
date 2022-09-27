import vimeoPlayer from '@vimeo/player';
import throttle from 'throttleit';
// import vimeo from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new vimeoPlayer(iframe);

setCurrentTime();

player.on('timeupdate', throttle(playedTime, 1000));

function playedTime(data) {
  localStorage.setItem('videoplayer-current-time', `${data.seconds}`);
}

function setCurrentTime() {
  const savedTimeToPlay = localStorage.getItem('videoplayer-current-time');
  if (savedTimeToPlay) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  }
}
