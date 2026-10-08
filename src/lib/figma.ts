// Turns any Figma share link (file, design, proto, or old-style embed) into an embeddable URL.
export function toFigmaEmbed(input: string): string {
  const url = new URL(input);
  if (url.hostname === 'embed.figma.com') {
    url.searchParams.set('embed-host', 'share');
    return url.toString();
  }
  if (url.pathname.startsWith('/embed')) return url.toString();
  url.hostname = 'embed.figma.com';
  url.searchParams.set('embed-host', 'share');
  return url.toString();
}

export function isFigmaUrl(input: string): boolean {
  try {
    const { protocol, hostname } = new URL(input);
    return protocol === 'https:' && (hostname === 'figma.com' || hostname.endsWith('.figma.com'));
  } catch {
    return false;
  }
}
