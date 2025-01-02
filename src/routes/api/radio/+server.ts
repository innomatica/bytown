import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
  const url = event.url.searchParams.get('url');
  // console.log(`url:${url}`);
  if (url) {
    if (url.endsWith('.pls')) {
      // pls format
      // [playlist]
      // File1=https://...
      // ...
      const res = await fetch(url);
      if (res.status === 200) {
        const data = await res.text();
        const lines = data.split('\n')
        const urls: string[] = [];
        lines.forEach((line) => {
          if (line.startsWith('File')) {
            const url = line.split('=')[1];
            urls.push(url);
          }
        });
        if (urls.length) {
          return fetch(urls[0]);
        } else {
          console.error(`data: ${data}`);
          error(400, 'invalid pls: no url found')
        }
      } else {
        error(400, `server returns: ${res.status}`)
      }
      // } else if (url.endsWith('m3u8')) {
      //   error(400, 'm3u8 format not supported yet');
    } else {
      return fetch(url);
    }
  } else {
    error(400, 'url paramter is missing')
  }
};
