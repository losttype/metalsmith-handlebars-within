var Handlebars = require('handlebars');

module.exports = plugin;

function plugin(options) {
  return function(context, metalsmith, done) {
      Handlebars.registerHelper('within', function(context, child, options) {
        return options.fn(context[child]);
      });
      done();
  };
}
