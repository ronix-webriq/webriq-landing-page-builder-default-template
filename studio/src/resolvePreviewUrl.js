export default function resolveProductionUrl(document) {
  return `http://localhost:3000/api/preview?secret=secret&slug=${document.slug.current}`
}
