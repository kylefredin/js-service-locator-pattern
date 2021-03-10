class Service {
  /**
   * Mock Service
   *
   * @param {Client} client
   */
  constructor(client) {
    this.client = client;
  }

  /**
   * Retrieves the user with the specified id
   *
   * @param {string|number} id
   * @return {Promise<object>}
   */
  async getUser(id) {
    return this.client.send(`/user/${id}`);
  }
}

module.exports.Service = Service;
