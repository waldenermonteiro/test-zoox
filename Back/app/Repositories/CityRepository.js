'use strict'
const { validateAll } = use('Validator')
const Database = use('Database')
const BaseRepository = use('App/Repositories/BaseRepository')
class PatientRepository extends BaseRepository {
    constructor(Model, Validator ) {
        super(Model, Validator)
        this.Model = Model
        this.Validator = new Validator()
    }
    async index({ request, response }) {
        const items = await this.Model.query().with('state').fetch()
        return response.ok({
            status: 200,
            data: items
        })
    }
}
module.exports = PatientRepository
