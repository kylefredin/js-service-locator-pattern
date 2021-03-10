class Client {
  /**
   * Mock Http Client
   *
   * @param {string} apiKey
   */
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  /**
   * Mock sending an http request to the specified path
   *
   * @param {string} _path
   * @return {Promise<object>}
   */
  async send(_path) {
    return Promise.resolve({ user: { id: 1234 } });
  }
}

module.exports.Client = Client;
