(function (root, factory) {
  var name = 'BackboneStickitForm';
  if (typeof define === 'function' && define.amd) {
    define(['underscore'], function (_) {
      return (root[name] = factory(_));
    });
  }
  else if (typeof exports === 'object') {
    module.exports = factory(require('underscore'));
  }
  else {
    root[name] = factory(root._);
  }
}(this, function (_) {

  var exports = {};


  exports.getBindings = function (options) {

    if (_.isArray(options)) {
      options = {
        attributes: options
      };
    }

    var defaultOptions = {
      extend: {},
      attributes: [],
      selector: function (attribute, options) {
        return '[name="' + attribute + '"]';
      }
    };

    options = _.extend({}, defaultOptions, options);

    var bindings = {};

    _.each(options.attributes, function (attribute) {
      var selector = options.selector(attribute, options);
      var binding = {
        observe: attribute,
        setOptions: {
          validate: true
        }
      };
      var extend = options.extend[attribute];
      if (extend) {
        _.extend(binding, extend);
      }
      bindings[selector] = binding;
    });

    return bindings;
  };


  return exports;
}));
