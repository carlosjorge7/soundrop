export function extractSpotifyTrackId(url: string): string | null {
  const startIndex =
    url.indexOf('https://open.spotify.com/track/') +
    'https://open.spotify.com/track/'.length;
  const endIndex = url.indexOf('?');
  return url.substring(startIndex, endIndex);
}
