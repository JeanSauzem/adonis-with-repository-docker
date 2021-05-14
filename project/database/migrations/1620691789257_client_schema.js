'use strict'

const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('name_full', 100)
      table.string('gender',20)
      table.timestamp('birthday_date')
      table.integer('age')
      table.integer('city_id').unsigned().references('id').inTable('cities')
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
