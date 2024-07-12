export function dbObjectToJsObject(dbObject) {
  return JSON.parse(JSON.stringify(dbObject));
}

export function convertToSubCurrency(amount, factor = 100) {
  return Math.round(amount * factor);
}
