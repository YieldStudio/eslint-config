# @yieldstudio/js-config

Our base [eslint](https://eslint.org/) and [prettier](https://prettier.io/) configurations.

[![Latest Version](https://img.shields.io/github/release/yieldstudio/js-config?style=flat-square)](https://github.com/yieldstudio/js-config/releases)
[![Total Downloads](https://img.shields.io/npm/dt/@yieldstudio/js-config?style=flat-square)](https://www.npmjs.com/package/@yieldstudio/js-config)

We use both to lint our code:

* eslint for code-quality.
* prettier for formatting.

Our eslint config is mainly based on [Airbnb's eslint config](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb).

## Installation

```sh
yarn add --dev @yieldstudio/js-config eslint prettier
```

Extend the shared eslint config in your `.eslintrc.js`:

```js
// .eslintrc.js

module.exports = {
  extends: '@yieldstudio/eslint-config', 
  // Your project-specific config
};
```

**Available eslint configs:**

| Config                           | For what ?         |
|----------------------------------|--------------------|
| @yieldstudio/eslint-config       | Javascript project |
| @yieldstudio/eslint-config/react | React project      |
| @yieldstudio/eslint-config/next  | Next.js project    |


Extend the shared prettier config in your `.prettierrc.js`:

```js
// .prettierrc.js
module.exports = require("@yieldstudio/eslint-config/prettier.config");
```

## Credits

- [James Hemery](https://github.com/jameshemery)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.