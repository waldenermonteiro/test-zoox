'use strict'
const Validator = use('Validator')
const existCustomRule = use('App/Validators/Customs/Exists')
Validator.extend('exists', existCustomRule)
class StoreCity {
  get name() {
    return 'Cidade'
  }
  get inputs() {
    return ['name', 'state_id']
  }
  rules(cityId) {
    cityId = cityId || 0
    return {
      name: `required|unique:cities,name,id,${cityId}|max:100`,
      state_id: 'required|exists:states,id'
    }
  }
  get messages() {
    return {
      'name.required': 'O campo nome é obrigatório.',
      'name.unique': 'Já existe uma cidade com esse nome, por favor, escolha outro.',
      'name.max': 'O campo nome aceita até 100 caracteres, por favor, tente novamente.',
      'state_id.required': 'O campo estado é obrigatório.'
    }
  }
}

module.exports = StoreCity
