// Sort the given strings in alphabetical order,
// case insensitive.

const sortme = names => {
  return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
}
