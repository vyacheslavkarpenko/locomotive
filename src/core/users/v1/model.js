
import mongoose from 'mongoose'

import { UserModelSchema } from './schema.js'
import { objectID } from './helper.js'
import { errors, inform } from './messages.js'

const User = mongoose.model('User', UserModelSchema );

const allUser = async () => await User.find({})

const oneUser = async (body) => {
  const { _id } = body
  const query = {}
  if (_id) query._id = objectID(_id)
  await User.findOne(query)
}

const createUser = async (body) => {
  const { password, repeatPassword } = body
  console.log('body', body)
  if (password !== repeatPassword) {
    console.log('+++++++++++++++++++++++++++++', errors.passwordUnmathed)
    throw errors.passwordUnmathed
  } else {
    await User.create(body)
  }
}

export { allUser, oneUser, createUser }