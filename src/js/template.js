import $ from "jquery";

function displayResults (data) {

  // console.log(data);
  $(".search-results").empty();

  data.forEach(function(item){
    //console.log(item)
    var resultsHtml = `
    <div class="results-box"
    data-stream="${item.stream_url}">
      <img src = ${item.artwork_url || item.user.avatar_url}>
      <div class = "song-name">
        <span class = "song-title"> ${item.title} <span>
      </div>
      <div class = "artist-name">
        <span class = "artist"> ${item.user.username} <span>
      </div>
    </div>`

    $(".search-results").append(resultsHtml);

  })
};

export { displayResults };
