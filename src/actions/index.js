import axios from 'axios';

export const TAB_SUGGESTION = 'TAB_SUGGESTION';
export const BAD_ACTION = 'BAD_ACTION';

const SEARCH_URL = "https://myanimelist.net/search/prefix.json?type=all&keyword="


/**
 URL cases handled include:
 - kissanime.ru
**/
export function searchMAL(url) {
  var query = '';

  console.log(url);

  if (!url) return {type: BAD_ACTION};
  switch(url.domain) {
    case "kissanime":
      if (url.one != 'Anime') {
        return {type: BAD_ACTION};
      }
      query = url.two;
      break;
    default:
      return {type: BAD_ACTION}
  }

  const request = axios({
    method: 'get',
    url: `${SEARCH_URL}${query}`
  });

  return {
    type: TAB_SUGGESTION,
    payload: request
  }
}
