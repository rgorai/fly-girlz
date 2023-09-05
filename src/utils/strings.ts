export const parseRoute = (...pathItems: string[]): string =>
  pathItems.reduce(
    (p, c) => p + (c !== '' ? '/' + c.replaceAll(' ', '-').toLowerCase() : ''),
    ''
  )
