'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CitySchema extends Schema {
  up () {
    this.create('cities', (table) => {
      table.increments()
      table.string('name', 254).notNullable().unique()
      table.timestamps()
      table.timestamp('deleted_at')
      table.integer('state_id').unsigned();
      table.foreign('state_id').references('states.id').onDelete('cascade');
    })
  }

  down () {
    this.drop('cities')
  }
}

module.exports = CitySchema
