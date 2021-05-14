'use strict'

const {ioc} = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/BaseRepository')

class CityRepository extends BaseRepository {
    #model

    constructor(model) {
        super(model)
        this.#model = model;
    }

    async index(filter) {
        
        let result =  this.#model.query()

        if (filter.name != undefined) {
           result.where('name', 'like', '%'+filter.name+'%')
        }
        
        if (filter.state != undefined) {
            result.where('state', 'like', '%'+filter.state+'%')
        }

        return await result.fetch();
    }
    
    
}

ioc.singleton('CityRepository', function (app) {
    return new CityRepository(app.use('App/Models/City'));
});

module.exports = ioc.use('CityRepository');