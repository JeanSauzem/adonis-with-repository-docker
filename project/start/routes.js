'use strict'

const Route = use('Route')

Route.resource('client', 'ClientController')
      .validator(new Map([
        [['client.store'], ["StoreClient"]],
        [['client.update'], ["UpdateClient"]]
      ]))
Route.resource('city', 'CityController')
      .validator(new Map([
        [['city.store'], ["StoreCity"]],
        [['city.update'], ["UpdateCity"]]
      ]))