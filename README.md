# metalsmith-typescript

A [TypeScript][typescript] plugin for [Metalsmith][metalsmith].

## Installation

```
npm install metalsmith-typescript
```

## Usage

```js
var typescript = require('metalsmith-typescript')

Metalsmith(__dirname)
  .use(typescript(options))
  .build()
```

### Options

Use any or all of the following:

#### `outDir`

This is a destination path string for compiled files.

#### `filter`

This is a filter string(regex) for compile target files.

Note:
TypeScript compiler requires `.ts` extensions for compile target files,
and this plugin add the extension string to filter string.

#### `moduleType`

This is a module type string for compile target files.

#### `compilerOptions`

Additional, custom compiler options.

## Tests

```
$ npm run test
```

## License

MIT License, see [LICENSE](https://github.com/Shinsuke-Abe/metalsmith-typescript/blob/master/LICENSE.md) for details.

[typescript]: http://www.typescriptlang.org/
[metalsmith]: http://www.metalsmith.io/
