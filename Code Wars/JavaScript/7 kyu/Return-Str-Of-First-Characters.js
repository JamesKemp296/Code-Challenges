// "This Is A Test" ==> "TIAT"

function makeString(s) {
  return s
    .split(" ")
    .map((char) => char[0])
    .join("")
}
