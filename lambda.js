const {makePassword} = require('./generator');

exports.handler = async () => ({
  statusCode: 200,
  body: JSON.stringify({password:makePassword()}),
});
