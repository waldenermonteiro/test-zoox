"use strict";
const { validateAll } = use("Validator");
const Database = use("Database");
const BaseRepository = use("App/Repositories/BaseRepository");
class StateRepository extends BaseRepository {
  constructor(Model, Validator, City) {
    super(Model, Validator, City);
    this.Model = Model;
    this.City = City;
    this.Validator = new Validator();
  }
  async destroy({ request, response, params }) {
    try {
      const state = await this.Model.findByOrFail("_id", params.id);
      const verifyStateUse = await this.City.query()
        .where("state_id", params.id)
        .first();
      if (verifyStateUse !== null) {
        return await response.badRequest({
          status: 400,
          errors: [{ message: `Estado ${state.name} está sendo utilizado.` }]
        });
      }
      await state.delete();
      return await response.ok({
        status: 200,
        message: `${this.Validator.name} ${state.name || ""} excluído(a) com sucesso`
      });
    } catch (error) {
      return this.messageNotExistItem(response);
    }
  }
}
module.exports = StateRepository;
