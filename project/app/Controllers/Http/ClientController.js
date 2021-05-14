'use strict'

const ClientRepository = use("App/Repositories/ClientRepository")
const BaseController = use("App/Controllers/Http/BaseController")

class ClientController extends BaseController { 
  
  constructor() {
    super(ClientRepository)
  }
}

module.exports = ClientController
