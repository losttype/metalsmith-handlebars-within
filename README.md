# metalsmith-handlebars-within

A metalsmith plugin to specify dynamic metadata for `{{#with}}` in Handlebars templates.

## Installation

```
npm install metalsmith-handlebars-within
```

## CLI Usage

Install the node module, and then add the `metalsmith-handlebars-within` key to your `metalsmith.json` plugins.

```json
{
  "plugins": {
    "metalsmith-handlebars-within": {}
  }
}
```

There are no options for this plugin. It is intended for use alongside [Handlebars](https://github.com/segmentio/metalsmith-templates) and external [metalsmith-metadata](https://github.com/segmentio/metalsmith-metadata), for example:

```json
{
  "plugins": {
    "metalsmith-metadata": {
      "authors": "./path/to/authors.json"
    },
    "metalsmith-handlebars-within": {},
    "metalsmith-templates": "handlebars"
  }
}
```

Now, within a Handlebars template, you can access a specific object in the `authors.json` metadata, based on a YAML variable:

```hbt
{{#within authors author }}
  <a href="{{ this.url }}">{{this.name}}</a>
{{/within}}
```

## Notes

This all seems excessive to me: it’s something I would expect to be able to access easily in Handlebars:

```hbs
<a href="/about/{{ author }}">{{ authors.[author].name }}</a>
```

…but as far as I can tell, this isn’t possible without a Handlebars helper with `author` is dynamic. If I’m incorrect, please [open an issue](https://github.com/losttype/metalsmith-handlebars-within/issues), and I’ll see if this plugin is actually necessary! Thanks.

## License

[The MIT License (MIT)](LICENSE.md)

Copyright © 2015 [Kenneth Ormandy](http://kennethormandy.com)
