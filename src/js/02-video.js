import vimeoPlayer from '@vimeo/player';
import throttle from 'throttleit';
// import vimeo from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new vimeoPlayer(iframe);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(playedTime, 1000));

function playedTime(data) {
  localStorage.setItem('videoplayer-current-time', `${data.seconds}`);
}
