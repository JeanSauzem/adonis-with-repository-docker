'use strict'

const {ioc} = require('@adonisjs/fold')
const BaseRepository = use('App/Repositories/BaseRepository.js')

class ClientRepository extends BaseRepository {
    
    #model

    constructor(model) {
        super(model)
        this.#model = model
    }

    async index(filter) {
        
        let result =  this.#model.query().with('city')

        if (filter.name_full != undefined) {
           result.where('name_full', 'like', '%'+filter.name_full+'%')
        }
        
        return await result.fetch();
    }
    
}

ioc.singleton('ClientRepository', function (app) {
    const model = app.use('App/Models/Client')
    return new ClientRepository(model)
})

module.exports = ioc.use('ClientRepository')