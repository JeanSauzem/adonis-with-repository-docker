'use strict'

const _ = use('loadsh')


class BaseRepository {

    constructor(model) {
        this.model = model;
    }

    // async index(filter) {
        
    //     let result =  this.model.query()
    //     return await result.fetch();
    // }

    async store(request, response) {
        const modelObj = new this.model()

        _.forEach(request.all(), function (e, i) {
            modelObj[i] = e
        })
        
        await modelObj.save()

        return modelObj
    }


    async show(params, response) {
        const modelObj = await this.model.find(params.id)
        if (!modelObj) {
            return response.status(400).send({msg: 'Falha ao encontrar'})
        }
        return modelObj
    }


    async update(params, request, response) {
        const modelObj = await this.model.find(params.id)

        if (!modelObj) {
            return response.status(400).json({msg: 'Falha ao encontrar'})
        }

        _.forEach(request.all(), function (e, i) {
            modelObj[i] = e
        })

        await modelObj.save()

        return modelObj
    }


    async destroy(params, response) {
        const modelObj = await this.model.find(params.id)
        if (!modelObj) {
            return response.status(400).json({data: this.noRecordFound})
        }
        await modelObj.delete()
        return response.status(200).json({msg: this.model.name + " deleted", data: modelObj})
    }
}

module.exports = BaseRepository