'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StateSchema extends Schema {
  up() {
    this.create('states', (table) => {
      table.increments()
      table.string('name', 30).notNullable().unique()
      table.string('abbreviation', 2).notNullable().unique()
      table.timestamps()
      table.timestamp('deleted_at')
    })
  }

  down() {
    this.drop('states')
  }
}

module.exports = StateSchema
