import $ from "jquery";
import {searchMusic} from "./soundcloud.js";
import {displayResults} from "./template.js";


//run ajax and then display results
searchMusic().then(displayResults);


//connects the search button
function searchFunction (event) {
  var input = $(".artist-search");
  searchMusic(input).then(displayResults);
  event.preventDefault();
};

//had to set the 'prevent default' above to keep page from refreshing
$(".search-box").submit(searchFunction);
