import $ from "jquery";


function displayResults (data) {
//console.log(data);
  data.forEach(function(item){
    console.log(item)
    var resultsHtml = `
    <div class="results-box">
      <img class="image-stream" src = ${item.artwork_url || item.user.avatar_url}/>
      <div class = "song-name">
        <span class = "song-title"> ${item.title} </span>
      </div>
      <div class = "artist-name">
        <span class = "artist"> ${item.user.username} </span>
      </div>
      <div class="secret">${item.stream_url}</div>
    </div>`

    $(".search-results").append(resultsHtml);


  })

  $(".image-stream").click(playMusic);

  function playMusic (event) {
    console.log("apples");
    console.log($(".secret").html());
    ///HINT:currentTarget -->set as a variable. --> currentTarget.html(), zoom or get the right div; that's where the .children comes into play. get your shit together.
  }
};

export { displayResults };

//make an empty array to store the changing parts to use globally and pass that info into other functions.
