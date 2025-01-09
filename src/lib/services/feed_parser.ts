export async function parse_feed(url: string) {
  url = 'https://www.cbc.ca/webfeed/rss/rss-canada-ottawa/';

  const res = await fetch(url);
  // console.log(`res:${res.status}`);
  if (res.status === 200) {
    const payload = await res.text();
    // console.log(payload)
    return payload;
  }
}