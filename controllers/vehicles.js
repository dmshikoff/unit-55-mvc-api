const model = require('../models/vehicles')

function getAll(req, res, next) {
    const limit = req.query.limit
    const data = model.getAll(limit)
    res.status(200).json({data})
}

function getOne(req, res, next) {
    specificVehicleId = req.params.id
    const data = model.getOne(specificVehicleId)
  res.status(200).json({ data })
}

function create(req, res, next) {
    const result = model.create(req.body)

    if (result.errors) {
        return next({ status: 400, message: `Could not create new vehicle`, errors: result.errors })
      }
    
      res.status(201).json({ data: result })
}

function update(req, res, next) {
    specificVehicleId = req.params.id
    const data = model.update(specificVehicleId, req.body)
    res.status(200).json({ data })
}

function destroy(req, res, next) {
    specificVehicleId = req.params.id
    const data = model.destroy(specificVehicleId)
    res.status(200).json({data})
}

module.exports = { getAll, create, getOne, update, destroy }