monetizeThis
============

This is a simple utility function to check whether a given URL is monetizable, using an external API. If the URL is monetizable, the function returns an object with a boolean `isMonetizable` property and a `response` object that includes a `monetize` function. If the URL is not monetizable or an error occurs, an exception is thrown.

Installation
------------

To use `monetizeThis`, you first need to install it as a dependency in your project. You can do this using npm:

```sh
npm install monetize-this
```

Usage
-----

To use `monetizeThis`, you need to import it into your code and call it with an object that contains a `url` and an `apiKey`. Here's an example:

```typescript
import monetizeThis from 'monetize-this';

try {
    const result = await monetizeThis({ url: 'https://asos.com', apiKey: '1234-4567-7890' });
    console.log(result.isMonetizable);
    result.response.monetize();
} catch (error) {
    console.error(error);
}
```

The `monetizeThis` function returns a promise that resolves to a `MonetizationResponse` object.

API
---

### `monetizeThis({ url, apiKey })`

The `monetizeThis` function takes an object with two properties: `url` (a string representing the URL to check) and `apiKey` (a string representing the API key to use).

The function returns a promise that resolves to a `MonetizationResponse` object. If an error occurs, the promise is rejected with an error message.

### `MonetizationResponse`

The `MonetizationResponse` object has two properties:

* `isMonetizable`: A boolean value indicating whether the URL is monetizable.
* `response`: An object with a `monetize` function that can be called to perform some action if the URL is monetizable.

License
-------

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
