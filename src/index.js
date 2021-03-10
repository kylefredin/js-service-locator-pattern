const { Locator } = require("./Locator");
const { Client } = require("./Client");
const { Service } = require("./Service");

// create a new instance of the locator
const locator = new Locator();

// register the api key needed for the client
// could also be an entire configuration object
// but for the sake of this example, it's just a single value
locator.register("apiKey", () => "STIJNIOJDHOKJOLNONXJBKJABJKD");

// register the client
locator.register("client", (l) => new Client(l.lookup("apiKey")));

// register the service
locator.register("service", (l) => new Service(l.lookup("client")));

// no top-level-await yet! so we wrap in an IIFE
(async function () {
  console.log(await locator.lookup("service").getUser(1234));
})();

// example of trying to lookup an invalid name
try {
  locator.lookup("invalid");
} catch (error) {
  console.error(error);
}
