'use strict'
const State = use('App/Models/State')
const StoreState = use('App/Validators/StoreState')
const BaseController = use('App/Controllers/Http/BaseController')
class StateController extends BaseController {
  constructor() {
    super(State, StoreState)
  }
}
module.exports = StateController
