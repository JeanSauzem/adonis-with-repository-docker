'use strict'

class UpdateClient {
  get rules () {
    return {
      name_full:'required',
      gender:'required|in:F,M',
      birthday_date:[
        rule('required'),
        rule('date'),
        rule('dateFormat', 'YYYY-MM-DD')
      ],
      age:'required',
      city_id:'required'
    }
  }

  async fails (errorMessages) {
    return this.ctx.response.status('422').send(errorMessages)
  }

  get messages () {
    return {
      'name_full.required': 'Obrigatorio o nome completo.',
      'gender.required': 'Obrigatorio o sexo completo',
      'gender.in':'Valor é diferente de F e M',
      'birthday_date.required': 'Obrigatorio a Data de Nascimento.',
      'birthday_date.date': 'Data Invalida.',
      'birthday_date.dateFormat': 'Data não está no formato YYYY-MM-DD',
      'age.required':'Obrigatorio a idade',
      'city_id.required':'Obrigatorio a Cidade'
    }
  }


  get validateAll() {
    return true
  }
}

module.exports = UpdateClient
