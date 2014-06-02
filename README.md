backbone.stickit.form
=====================

Automate form bindings for [backbone.stickit][stickit].

Simple, but keeps your binding declarations DRY.

## Install

```sh
$ bower install --save backbone.stickit.form
```

Include `src/backbone.stickit.form.js` in your code.

## Use

To build `bindings` for your View, use `BackboneStickitForm.getBindings` as follows:

```js
var MyFormView = Backbone.View.extend({
  // pass attributes to bind
  bindings: BackboneStickitForm.getBindings(['username', 'email', 'country', 'age'])
});
```

Advanced usage demonstrating more options:

```js
var MyFormView = Backbone.View.extend({

  bindings: function () {
  
    // for example, include some non-form bindings:
    var bindings = {
      '#mood': 'mood'
    };
    
    // now extend with our generated form bindings
    _.extend(bindings, BackboneStickitForm.getBindings({
      /**
       * Required. List the model attributes to bind here.
       */
      attributes: ['username', 'email', 'country', 'age'],
      /**
       * Optional. Defaults options for each binding.
       */
      defaults: {
        validate: true
      },
      /**
       * Optional. If attributes require extra stickit options, these will extend generated bindings.
       */
      extend: {
        'country': {
          selectOptions: {
            collection: ['Norway', 'Sweden', 'Denmark', 'Finland', 'Iceland']
          },
        },
        'age': {
          events: ['change'],
          onSet: function(val) {
            return parseInt(val, 10) || undefined;
          }
        }
      },
      /**
       * Optional. Function to build selector for given model attribute. Uses name attributes by default.
       * `function (attribute, options)`
       */
      selector: function (attribute, options) {
        return '[data-stickit-attr="' + attribute + '"]';
      }
    });
    
    return bindings;
  }
}); 
```

[stickit]: http://nytimes.github.io/backbone.stickit/

