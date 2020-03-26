"use strict";
class StoreState {
  get name() {
    return "Estado";
  }
  get inputs() {
    return ["name", "abbreviation"];
  }
  rules(stateId) {
    stateId = stateId || 0;
    return {
      name: `required|unique:states,name|max:3  0`,
      abbreviation: `required|unique:states,abbreviation|max:2`
    };
  }
  get messages() {
    return {
      "name.required": "O campo nome é obrigatório.",
      "name.unique": "Já existe um estado com esse nome, por favor, escolha outro.",
      "name.max": "O campo nome aceita até 30 caracteres, por favor, tente novamente.",
      "abbreviation.required": "O campo abreviação é obrigatório.",
      "abbreviation.unique": "Já existe um estado com essa abreviação, por favor, escolha outro.",
      "abbreviation.max": "O campo abreviação aceita até 2 caracteres, por favor, tente novamente."
    };
  }
}

module.exports = StoreState;
