'use strict'
const City = use('App/Models/City')
const StoreCity = use('App/Validators/StoreCity')
const BaseController = use('App/Controllers/Http/BaseController')
const CityRepository = use('App/Repositories/CityRepository')
class CityController extends BaseController {
  constructor() {
    super(City, StoreCity)
    this.CityRepository = new CityRepository(City, StoreCity)
  }
  async index({ request, response }) {
    return await this.CityRepository.index({ request, response })
  }
  async store({ request, response, params }) {
    return await this.CityRepository.store({ request, response, params })
  }
  async update({ request, response, params }) {
    return await this.CityRepository.update({ request, response, params })
  }
}
module.exports = CityController
