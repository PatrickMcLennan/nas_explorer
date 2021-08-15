export default function getTmdbId(fileName: string) {
  try {
    console.log(fileName);
    const firstSplit = fileName?.split?.(` [`);
    const number = firstSplit?.[1].split(`].`)?.[0];
    return number ?? ``;
  } catch (err) {
    console.error(err);
    return '';
  }
}
