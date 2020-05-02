const {makePassword, makeNonWordPw} = require('./generator');

exports.handler = () => ({
  statusCode: 200,
  body: JSON.stringify([
    makePassword(),
    makeNonWordPw(),
    makePassword(),
    makeNonWordPw(),
    makePassword(),
    makeNonWordPw(),
    makePassword(),
    makeNonWordPw(),
    makePassword(),
    makeNonWordPw(),
  ]),
});
