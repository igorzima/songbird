import React from 'react';

import './audioPlayer.css';

import PlayButton from '../../play-button.svg';
import PauseButton from '../../pause.svg';

// export default function AudioPlayer({ src, isNextLevel }) {
//   const [isPlay, setIsPlay] = React.useState(false);
//   // const [nextLevel] = React.useState(isNextLevel);

//   function calculateTotalValue(length) {
//     const minutes = Math.floor(length / 60);
//     const seconds_int = length - minutes * 60;
//     const seconds = seconds_int.toFixed();
//     const time =
//       (minutes < 10 ? `0${minutes}` : minutes) + ':' + (seconds < 10 ? `0${seconds}` : seconds);

//     return time;
//   }

//   function calculateCurrentValue(currentTime) {
//     const current_minute = parseInt(currentTime / 60) % 60;
//     const current_seconds_long = currentTime % 60;
//     const current_seconds = current_seconds_long.toFixed();
//     const current_time =
//       (current_minute < 10 ? '0' + current_minute : current_minute) +
//       ':' +
//       (current_seconds < 10 ? '0' + current_seconds : current_seconds);

//     return current_time;
//   }

//   function initProgressBar() {
//     const player = document.querySelector('.player');
//     const length = player.duration;
//     const current_time = player.currentTime;

//     const totalLength = calculateTotalValue(length);
//     document.querySelector('.end-time').innerText = totalLength;

//     const currentTime = calculateCurrentValue(current_time);
//     document.querySelector('.start-time').innerText = currentTime;

//     const progressbar = document.querySelector('.seekObj');
//     progressbar.value = player.currentTime / player.duration;
//     progressbar.addEventListener('click', seek);

//     if (player.currentTime === player.duration) {
//       document.querySelector('.play-btn').classList.remove('pause');
//     }

//     function seek(evt) {
//       const percent = evt.offsetX / this.offsetWidth;
//       player.currentTime = percent * player.duration;
//       progressbar.value = percent / 100;
//     }
//   }

//   function initPlayers() {
//     (function () {
//       const player = document.querySelector('.player');
//       const playBtn = document.querySelector('.play-btn');

//       console.log(player.duration);

//       player.volume = 0.3;

//       if (playBtn != null) {
//         playBtn.addEventListener('click', function () {
//           togglePlay();
//         });
//       }

//       function togglePlay() {
//         if (player.paused === false) {
//           player.pause();
//           document.querySelector('.play-btn').classList.remove('pause');
//           document.querySelector('.play-btn').classList.add('play');
//           setIsPlay(true);
//         } else {
//           player.play();
//           document.querySelector('.play-btn').classList.add('pause');
//           document.querySelector('.play-btn').classList.remove('play');
//           setIsPlay(false);
//         }
//       }
//     })();
//   }

//   document.addEventListener('DOMContentLoaded', () => {
//     console.log(123);
//     initPlayers();
//   });

//   return (
//     <>
//       <div className="audio-player">
//         <div className="play-btn play" onClick={() => setIsPlay((prev) => !prev)}>
//           {isPlay ? (
//             <img className="pause-ico" src={PauseButton} alt="" />
//           ) : (
//             <img className="play-ico" src={PlayButton} alt="" />
//           )}
//         </div>
//         <div className="audio-wrapper player-container">
//           <audio className="player" src={src} onTimeUpdate={initProgressBar}></audio>
//         </div>
//         <div className="player-controls scrubber">
//           <span className="seekObjContainer">
//             <progress className="seekObj" value="0" max="1"></progress>
//           </span>
//           <div className="audio-time">
//             <small className="start-time"></small>
//             <small className="end-time"></small>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPlay: false };
  }

  componentDidMount() {
    window.onload = () => {
      this.initPlayers();
      console.log(document.querySelector('.player').duration);
      document.querySelector('.player').addEventListener('timeupdate', this.timeUpdate);
    };
  }

  componentWillUnmount() {
    document.querySelector('.seekObjContainer').remove();
    console.log('delete');
  }

  play = () => {
    this.setState({ isPlay: !this.state.isPlay });
  };

  calculateTotalValue = (length) => {
    const minutes = Math.floor(length / 60);
    const seconds_int = length - minutes * 60;
    const seconds = seconds_int.toFixed();
    const time =
      (minutes < 10 ? `0${minutes}` : minutes) + ':' + (seconds < 10 ? `0${seconds}` : seconds);

    return time;
  };

  calculateCurrentValue = (currentTime) => {
    const current_minute = parseInt(currentTime / 60) % 60;
    const current_seconds_long = currentTime % 60;
    const current_seconds = current_seconds_long.toFixed();
    const current_time =
      (current_minute < 10 ? '0' + current_minute : current_minute) +
      ':' +
      (current_seconds < 10 ? '0' + current_seconds : current_seconds);

    return current_time;
  };

  initProgressBar = () => {
    const player = document.querySelector('.player');
    const length = player.duration;
    const current_time = player.currentTime;

    // console.log(player);
    // console.log(length);

    const totalLength = this.calculateTotalValue(length);
    document.querySelector('.end-time').innerText = totalLength;

    const currentTime = this.calculateCurrentValue(current_time);
    document.querySelector('.start-time').innerText = currentTime;

    const progressbar = document.querySelector('.seekObj');
    progressbar.value = player.currentTime / player.duration;
    progressbar.addEventListener('click', seek);

    if (player.currentTime === player.duration) {
      document.querySelector('.play-btn').classList.remove('pause');
    }

    function seek(evt) {
      const percent = evt.offsetX / this.offsetWidth;
      player.currentTime = percent * player.duration;
      progressbar.value = percent / 100;
    }
  };

  initPlayers = () => {
    const player = document.querySelector('.player');
    const playBtn = document.querySelector('.play-btn');

    player.volume = 0.3;

    if (playBtn != null) {
      playBtn.addEventListener('click', function () {
        togglePlay();
      });
    }

    function togglePlay() {
      if (player.paused === false) {
        player.pause();
        document.querySelector('.play-btn').classList.remove('pause');
        document.querySelector('.play-btn').classList.add('play');
      } else {
        player.play();
        document.querySelector('.play-btn').classList.add('pause');
        document.querySelector('.play-btn').classList.remove('play');
      }
    }
  };

  timeUpdate = () => {
    this.initProgressBar();
  };

  render() {
    const { src, isNextLevel } = this.props;

    console.log(isNextLevel);

    return (
      <>
        <div className="audio-player">
          <div className="play-btn play" onClick={this.play}>
            {this.state.isPlay ? (
              <img className="pause-ico" src={PauseButton} alt="" />
            ) : (
              <img className="play-ico" src={PlayButton} alt="" />
            )}
          </div>
          <div className="audio-wrapper player-container">
            <audio className="player" src={src}></audio>
          </div>
          <div className="player-controls scrubber">
            <span className="seekObjContainer">
              <progress className="seekObj" value="0" max="1"></progress>
            </span>
            <div className="audio-time">
              <small className="start-time"></small>
              <small className="end-time"></small>
            </div>
          </div>
        </div>
      </>
    );
  }
}
