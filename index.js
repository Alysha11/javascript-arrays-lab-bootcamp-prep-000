const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten (name) {
kittens.push ("Ralph");
}
function destructivelyPrependKitten(name) {
  kittens.unshift ("Bob");
}
function destructivelyRemoveLastKitten (name) {
  kittens.pop ();
}
function destructivelyRemoveFirstKitten (name) {
  kittens.shift();
}
function appendKitten (name) {
  var kittens2 = kittens.slice();
  kittens2.push("Broom");
  return kittens2;

}
function prependKitten (name) {
  var kittens3 = kittens.slice();
  kittens3.unshift("Arnold");
  return kittens3;
}
function removeLastKitten (name) {
  var kittens4 = kittens.slice();
  kittens4.pop();
  return kittens4;
}

}
function removeLastKitten (name) {
  var kittens5 = kittens.slice();
  kittens5.shift();
  return kittens5;
}
