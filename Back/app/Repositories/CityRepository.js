"use strict";
const { validateAll } = use("Validator");
const BaseRepository = use("App/Repositories/BaseRepository");
class PatientRepository extends BaseRepository {
  constructor(Model, Validator) {
    super(Model, Validator);
    this.Model = Model;
    this.Validator = new Validator();
  }
  async index({ request, response }) {
    const cities = await this.Model.query()
      .with("state")
      .fetch();
    return response.ok({
      status: 200,
      data: cities
    });
  }
  async show({ request, response, params }) {
    console.log(params);
    try {
      const city = await this.Model.query()
        .where("_id", params.id)
        .with("state")
        .fetch();
      return response.ok({
        status: 200,
        data: city
      });
    } catch (error) {
      console.log(error);
      return this.messageNotExistItem(response);
    }
  }
  async update({ request, response, params }) {
    const data = request.only(this.Validator.inputs);
    const validation = await validateAll(data, this.Validator.rules(params.id), this.Validator.messages);
    if (validation.fails()) {
      return this.messagesValidation(validation, response);
    }
    try {
      const city = await this.Model.findByOrFail("_id", params.id);
      await city.merge(data);
      await city.save();
      return response.ok({
        status: 200,
        data: city,
        message: `${this.Validator.name} ${city.name} atualizado(a) com sucesso`
      });
    } catch (error) {
      return this.messagesValidation(validation, response);
    }
  }
}
module.exports = PatientRepository;
