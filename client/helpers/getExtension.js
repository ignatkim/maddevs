export default function(url) {
  if (Boolean(url) && typeof(url) === 'string') return url.split(/[#?]/)[0].split('.').pop().trim();
  return null;
}
