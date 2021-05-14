'use strict'

class BaseController {
    
    constructor(repo, relation = null, consta = []){
        this.repo = repo
        this.relation = relation
        this.consta = consta
    }

    async index({request,response}){
        try {
            return this.repo.index(request.all(),this.relation, this.consta);
        } catch (e) {
            return response.status(400).send({
                'error': 'Falha na requisição'
            })
        }
    }

    async store({request,response}){
        try {
            return this.repo.store(request,response)
        } catch (e) {
            return response.status(400).send({
                'error': 'Falha na requisição'
            })
        }
    }

    async show({params,response}){
        try {
            return this.repo.show(params,response)
        } catch (e) {
            return response.status(400).send({
                'error': 'Falha na requisição'
            })
        }
    }

    async update({params,request,response}){
        try {
            return this.repo.update(params,request,response)
        } catch (e) {
            return response.status(400).send({
                'error': 'Falha na requisição'
            })
        }
    }

    async destroy({params,response}){
        try {
            return this.repo.destroy(params,response)
        } catch (e) {
            return response.status(400).send({
                'error': 'Falha na requisição'
            })
        }
    }    
}

module.exports = BaseController