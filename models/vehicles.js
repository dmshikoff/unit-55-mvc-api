const uuid = require('uuid/v4')
const vehicles = []

function getAll (limit) {
    return limit ? cats.slice(0, limit) : vehicles
}

function getOne (specificVehicleId) {
    const errors= []
  let response = vehicles.find(vehicle => vehicle.id === specificVehicleId)
  if(response){
    return response
  }
  else{
    errors.push('Vehicle does not exist')
    response = { errors }
    return response
  }
}

function create (body) {
    const errors = []
    const type = body.type
    const make = body.make
    const model = body.model
    const color = body.color
    let response;

    if(!type){
        errors.push('type is required')
    }
    if(!make){
        errors.push('make is required')
    }
    if(!model){
        errors.push('model is required')
    }
    if(!color){
        errors.push('color is required')
    }
    if(errors.length > 0){
        response = { errors }
    }
    else{
        const vehicle = { id: uuid(), type , make , model , color }
        vehicles.push(vehicle)
        response = vehicle
    }
    return response
}

module.exports = { getAll, create, getOne }

