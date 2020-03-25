"use strict";
const State = use("App/Models/State");
const City = use("App/Models/City")
const StoreState = use("App/Validators/StoreState");
const BaseController = use("App/Controllers/Http/BaseController");
const StateRepository = use("App/Repositories/StateRepository");
class StateController extends BaseController {
  constructor() {
    super(State, StoreState);
    this.StateRepository = new StateRepository(State, StoreState, City);
  }
  async destroy({ request, response, params }) {
    return await this.StateRepository.destroy({ request, response, params });
  }
}
module.exports = StateController;
