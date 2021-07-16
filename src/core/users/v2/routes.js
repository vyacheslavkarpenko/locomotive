import express from 'express'
import { Controller } from './controllers.js'

const userV2Routes = express()
const userController = new Controller

// get all users
userV2Routes.get('/', async (req, res) => {
  res.status(200).send(userController.users(req))
})

// get user by id
userV2Routes.get('/:id', async (req, res) => {
  res.status(200).send(userController.user(req))
})

// create new user
userV2Routes.post('/create', async (req, res) => {
  res.status(200).send(userController.create(req))
})

// update user
userV2Routes.put('/update', async (req, res) => {
  res.status(200).send(userController.update(req))
})

// delete user
userV2Routes.delete('/delete', async (req, res) => {
  res.status(200).send(userController.delete(req))
})
export { userV2Routes }
