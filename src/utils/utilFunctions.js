export function dbObjectToJsObject(dbObject) {
  return JSON.parse(JSON.stringify(dbObject));
}
