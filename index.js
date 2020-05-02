const {makePassword, makeNonWordPw} = require('./generator');

for (let x = 0; x < 10; x++) {
  console.log(makePassword());
  console.log(makeNonWordPw());
}
