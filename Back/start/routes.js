'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.group('v1', function () {
    Route.resource('states', 'StateController').apiOnly()
    Route.resource('cities', 'CityController').apiOnly()
}).prefix('api/v1')



