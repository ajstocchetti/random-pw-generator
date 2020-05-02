const fs = require('fs');

// care of https://github.com/dwyl/english-words
// const fn = 'words_alpha.txt';
// https://www.ef.com/wwen/english-resources/english-vocabulary/top-1000-words/
const fn = 'ef.txt'
const words = fs.readFileSync(fn, 'utf-8').split('\n');

module.exports = {
  makePassword,
  makeNonWordPw,
  getWord,
  titleCase,
  randomDigit,
  randSymbol,
  randChar,
};

function randRange(limit) {
  // allow passing in number, string, or array
  // this is a little hacky, and will probaly break with other variable types

  // will return integer in range [0, limit)
  const range = limit.hasOwnProperty('length') ? limit.length : limit;
  return Math.floor(Math.random() * range);
}

function getWord(min=4, max=8) {
  const w = words[randRange(words)].trim();
  if (w.length < min || w.length > max) return getWord(min, max);
  else return w;
}

function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

function randomDigit() {
  return randRange(10);
}

function randSymbol() {
  const a = '!@#$%^&*()|'.split('');
  return a[randRange(a)];
}

function randChar(isCap = false) {
  const alphabet = 'abcdefghijklmnopqrstuvwzyz';
  const char = alphabet[randRange(alphabet)];
  return isCap ? char.toUpperCase() : char;
}

function makeNonWordPw(maxLength = 24) {
  const chars = [
    randChar(),
    randChar(),
    ...getWord(4, 16),
    ...getWord(4, 16),
    ...getWord(4, 16),
    ...getWord(4, 16),
  ];
  if (chars.length > maxLength) chars.length = maxLength; // truncate to 20 chars

  for (let x = 1; x < chars.length - 1; x++) {
    const r = Math.random();
    if (r < 0.08) chars[x] = randSymbol();
    else if (r < 0.2) chars[x] = randomDigit();
    else if (r < 0.45) chars[x] = randChar(true);
    else if (r < 0.6) chars[x] = randChar();
  }

  return chars.join('');
}

function makePassword() {
  return [
    titleCase(getWord()),
    titleCase(getWord()),
    titleCase(getWord()),
    randomDigit(),
    randSymbol(),
    titleCase(getWord()),
  ].join('');
}
