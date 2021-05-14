'use strict'

const Model = use('Model')

class Client extends Model {

    city () {
        return this.hasMany('App/Models/City','city_id', 'id')
    }
}

module.exports = Client
