import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
  const url = event.url.searchParams.get('url');
  console.log(`url:${url}`);
  if (url) {
    // To avoid 403 error, needs some headers
    const res = await fetch(url, {
      headers: {
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Sec-Fetch-Site": "none",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1"
      }
    });
    // To avoid ERR_CONTENT_DECODING_FAILED, decode the content here
    const text = await res.text();
    // console.log(text);
    // Then send decoded
    return new Response(text);
  } else {
    error(400, 'url paramter is missing')
  }
};