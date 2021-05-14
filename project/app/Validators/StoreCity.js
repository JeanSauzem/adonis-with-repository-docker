'use strict'

class StoreCity {
  get rules () {
    return {
      name: 'required',
      state: 'required'
    }
  }
  async fails (errorMessages) {
    return this.ctx.response.status(422).send(errorMessages)
  }

  get messages () {
    return {
      'name.required': 'Obrigatorio o nome cidade.',
      'state.required': 'Obrigatorio o estado',
    }
  }


  get validateAll() {
    return true
  }
}

module.exports = StoreCity
