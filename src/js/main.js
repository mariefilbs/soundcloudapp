import $ from 'jquery';

import {searchMusic} from './soundcloud';
import {displayResults, playMusic} from './template';

function searchedSongs (songs) {
  var html = songs.map(displayResults);
  $(".results").html(html);
  $(".song").click(playMusic);
};

function getAPIdata (event) {
  event.preventDefault();
  var searchTracks = $("#search").val();
  var result = searchMusic(searchTracks).then(searchedSongs);
  // console.log(result)
}

$("#search-button").click(getAPIdata);
