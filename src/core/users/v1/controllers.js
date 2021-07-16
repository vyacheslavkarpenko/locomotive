import { allUser, oneUser, createUser } from './model.js'
import { inform } from './messages.js'

class Controller {
  async all(req, res) {
    const users = await allUser()
    return res.status(200).send(users)
  }

  async one(req, res) {
    const { body } = req
    const user = await oneUser(body)
    if (user){
      return res.status(200).send(user)
    } else {
      return res.status(200).send(inform.userNotFound)
    }
  }

  async create(req, res) {
    const { body } = req
    try {
      await createUser(body)
      return  res.status(200).send(inform.userCeated)
    } catch (error) {
      return  res.status(200).send(error)
    }
  }

  update() {
    return 'updated'
  }

  delete() {
    return 'deleted'
  }
}

export { Controller }