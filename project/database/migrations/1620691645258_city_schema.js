'use strict'

const Schema = use('Schema')

class CitySchema extends Schema {
  up () {
    this.create('cities', (table) => {
      table.increments()
      table.string('name')
      table.string('state')
      table.timestamps()
    })
  }

  down () {
    this.drop('cities')
  }
}

module.exports = CitySchema
