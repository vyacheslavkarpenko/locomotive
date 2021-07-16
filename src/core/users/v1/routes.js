import express from 'express'

import { Controller } from './controllers.js'

const userV1Routes = express()
const userController = new Controller

// get all users
userV1Routes.get('/all', async (req, res) => userController.all(req, res))

// get user by id
userV1Routes.post('/one', async (req, res) => userController.one(req, res))

// create new user
userV1Routes.post('/create', async (req, res) => userController.create(req, res))

// update user
userV1Routes.put('/update', async (req, res) => {
  res.status(200).send(userController.update(req))
})

// delete user
userV1Routes.delete('/delete', async (req, res) => {
  res.status(200).send(userController.delete(req))
})
export { userV1Routes }
