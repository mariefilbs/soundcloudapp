import $ from 'jquery';
import {clientID} from './token';


// $.ajaxSetup({
//   data: {
//     client_id: clientID
//   }
// });

function searchMusic (searchTracks) {
  return $.ajax({
    url: "https://api.soundcloud.com/tracks",
    //cached: false,
    data: {
      q:`${searchTracks}`,
      limit: 9,
      client_id: clientID
    }
  });
};
console.log(searchMusic());

export {searchMusic};
