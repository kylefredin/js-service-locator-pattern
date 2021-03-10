const test = require("ava");
const { Locator } = require("../src/Locator");

test("is a singleton", (t) => {
  t.is(new Locator(), new Locator());
});

test("allows a service to be registered and looked up", (t) => {
  const locator = new Locator();

  locator.register("number", () => 1);

  t.is(locator.lookup("number"), 1);
});

test("allows an async service to be registered and looked up", (t) => {
  const locator = new Locator();

  locator.register("number", async () => Promise.resolve(1));

  t.is(locator.lookup("number"), 1);
});
