const { getOptions } = require('loader-utils');
const ejs = require('ejs');
module.exports = function(source) {
  console.log(getOptions(this));
  const data = getOptions(this);
  const result = `module.exports = ${JSON.stringify(ejs.render(source, data))}`;
  return result;
};