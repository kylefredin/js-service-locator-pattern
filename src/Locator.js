class Locator {
  /**
   * Map of names to factory functions
   *
   * @type {Map}
   */
  factories = new Map();

  /**
   * Map of names to instances
   *
   * @type {Map}
   */
  instances = new Map();

  /**
   * Singleton class which stores factories and instances
   *
   * @return {Locator}
   */
  constructor() {
    return this.constructor.instance || (this.constructor.instance = this);
  }

  /**
   * Register a factory
   *
   * @param {string} name
   * @param {function} factory
   * @return {this}
   */
  register(name, factory) {
    this.factories.set(name, factory);
    return this;
  }

  /**
   * Lookup a factory
   *
   * @param {string} name
   * @return {*}
   */
  lookup(name) {
    // if we already have an instance, return it!
    if (this.instances.has(name)) {
      return this.instances.get(name);
    }

    // if we don't have a factory registered, we should inform the user
    if (!this.factories.has(name)) {
      throw new Error(`"${name}" is not a registered name`);
    }

    // call the factory function and register the instance
    this.instances.set(name, this.factories.get(name)(this));

    // now that we have the instance, delete the factory and save the memory
    this.factories.delete(name);

    // return the newly created instance
    return this.instances.get(name);
  }
}

module.exports.Locator = Locator;
