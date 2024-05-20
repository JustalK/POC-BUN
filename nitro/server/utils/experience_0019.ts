export const cachedDate = defineCachedFunction(
  () => {
    return { cached: new Date() };
  },
  {
    maxAge: 60 * 60,
  }
);

export function uncachedDate() {
  return { uncached: new Date() };
}
