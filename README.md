# Optimizely AI Backend TypeScript Browser Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/optimizely-browser)](https://www.npmjs.com/package/@fern-api/optimizely-browser)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

This Optimizely TypeScript library provides access to the AI Backend API from the browser.

## Installation

```
npm install --save @fern-api/optimizely-browser
# or
yarn add @fern-api/optimizely-browser
```

## Usage

```typescript
import { Optimizely, OptimizelyClient } from '@fern-api/optimizely-browser';

const optimizely = new OptimizelyClient({
  token: 'YOUR_API_KEY',
});

const modelResponse = await optimizely.models.get();

console.log('Received models', modelResponse);
```

## Handling errors

When the API returns a non-success status code (4xx or 5xx response), a subclass of [OptimizelyError](./src/errors/OptimizelyError.ts) will be thrown:

```ts
import { OptimizelyError } from '@fern-api/optimizely-browser';

try {
  await optimizely.models.get();
} catch (err) {
  if (err instanceof OptimizelyError) {
    console.log(err.statusCode);
    console.log(err.message);
    console.log(err.body);
  }
}
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
