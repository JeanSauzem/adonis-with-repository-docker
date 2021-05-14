'use strict'

const BaseController = use("App/Controllers/Http/BaseController")
const CityRepository = use("App/Repositories/CityRepository")

class CityController extends BaseController {
  constructor() {
    super(CityRepository)
  }
}

module.exports = CityController
