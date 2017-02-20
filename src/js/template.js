import $ from 'jquery';
import {clientID} from './token';

function displayResults (song) {
  console.log(song)
  return `
    <div class="song" data-songsource="${song.stream_url}" data-formatsource="${song.original_format}"
    data-artistsource="${song.user.username}"
    data-titlesource="${song.title}">
      <img class="image" src="${song.artwork_url || song.user.avatar_url}"/>
      <div class="title">${song.title}</div>
      <div class="artist">${song.user.username}</div>
    </div>`;

  $(".results").append(displayResults);
};

function playMusic (event) {
  console.log(event);
  var field = event.currentTarget.dataset;
  var play = `
    <audio class="controls" controls="controls" autoplay>
      <source src="${field.songsource}?client_id=${clientID}" type="audio/${field.formatsource}">
    </audio>`;

  $(".player").html(play);

  var nowPlay = `
  <p>Now Playing: <strong>
      <span class="song-artist">${field.artistsource}</span> -
      <span class="song-title">${field.titlesource}</span>
  </strong></p>`;

  $(".now-playing").html(nowPlay);
};

export {displayResults, playMusic};
