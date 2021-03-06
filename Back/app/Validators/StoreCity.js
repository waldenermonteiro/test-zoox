"use strict";
const Validator = use("Validator");
const existCustomRule = use("App/Validators/Customs/Exists");
const uniqueCustomRule = use("App/Validators/Customs/UpdateUnique");
Validator.extend("exists", existCustomRule);
Validator.extend("uniqueCustom", uniqueCustomRule);
class StoreCity {
  get name() {
    return "Cidade";
  }
  get inputs() {
    return ["name", "state_id"];
  }
  rules(cityId) {
    cityId = cityId || false
    return {
      name: `required|uniqueCustom:cities,name,${cityId}|max:100`,
      state_id: "required|exists:states,_id"
    };
  }
  get messages() {
    return {
      "name.required": "O campo nome é obrigatório.",
      "name.uniqueCustom": "Já existe uma cidade com esse nome, por favor, escolha outro.",
      "name.max": "O campo nome aceita até 100 caracteres, por favor, tente novamente.",
      "state_id.required": "O campo estado é obrigatório.",
      "state_id.exists": "Nâo existe um estado com este id, por favor, tente novamente"
    };
  }
}

module.exports = StoreCity;
