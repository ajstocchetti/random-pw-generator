const fs = require('fs');

// care of https://github.com/dwyl/english-words
// const fn = 'words_alpha.txt';
// https://www.ef.com/wwen/english-resources/english-vocabulary/top-1000-words/
const fn = 'ef.txt'
const words = fs.readFileSync(fn, 'utf-8').split('\n');

module.exports = {
  makePassword,
  getWord,
  titleCase,
  randomDigit,
  randSymbol,
};

function getWord(min=4, max=8) {
  const w = words[Math.floor(Math.random()*words.length)].trim();
  if (w.length < min || w.length > max) return getWord(min, max);
  else return w;
}

function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

function randomDigit() {
  return Math.floor(Math.random() * 10);
}

function randSymbol() {
  const a = '!@#$%^&*()|'.split('');
  return a[Math.floor(Math.random() * a.length)];
}

function makePassword() {
  return [
    titleCase(getWord()),
    titleCase(getWord()),
    titleCase(getWord()),
    titleCase(getWord()),
    randomDigit(),
    randSymbol(),
  ].join('');
}
