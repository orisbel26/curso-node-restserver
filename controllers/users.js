const { response, request } = require('express')

const usersGet = (req = request, res = response) => {
  res.status(200).json({
    msg: 'get API - Controller'
  })
}

const usersPut = (req = request, res = response) => {
  const { id } = req.params

  res.json({
    msg: 'put API - Controller',
    id
  })
}

const usersPost = (req = request, res = response) => {
  res.json({
    msg: 'post API - Controller'
  })
}

const usersDelete = (req = request, res = response) => {
  res.json({
    msg: 'delete API - Controller'
  })
}

const usersPatch = (req = request, res = response) => {
  res.json({
    msg: 'patch API - Controller'
  })
}

module.exports = {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
  usersPatch
}
