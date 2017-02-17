import $ from "jquery";
import {searchMusic} from "./soundcloud.js";
import {displayResults} from "./template.js";




//connects the search button
function searchButton (event) {
  var input = $(".artist-search").val();
  searchMusic(input).then(displayResults);
  event.preventDefault();
};

//had to set the 'prevent default' above to keep page from refreshing
$(".search-box").submit(searchButton);
