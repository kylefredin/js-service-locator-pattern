# Service Locator Pattern

This project demonstrates the service locator pattern in plain JavaScript. It uses a central registery
called the "Locator" which exposes methods to `register` and `lookup` services.

## Prerequisites

- [NodeJS](https://nodejs.org)

## Getting Started

- `git clone`
- `cd js-service-locator-pattern`
- `npm i`
- `npm run start`

## Run the tests

- `npm run test`

## Register a service

```js
const { Locator } = require("./Locator");

const locator = new Locator();

locator.register("name-of-service", (locatorInstance) => {
  // const service = locatorInstance.lookup("another-service");
  // return whatever you need here
});
```

## Lookup a service

```js
const { Locator } = require("./Locator");
const { Service } = require("./Service");

const locator = new Locator();

locator.register("service", () => new Service());

const service = locator.lookup("service);
```
