import $ from "jquery";
import { clientID } from "./token.js";


function searchMusic (query) {
  return $.ajax({
     url: `https://api.soundcloud.com/tracks?client_id=${clientID}`,
 success: console.log,
    data: {
        q: query,
    }
  });
}

export {searchMusic};
