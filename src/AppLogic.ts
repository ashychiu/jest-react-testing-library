export function convertCamelWithSpaces(colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}
