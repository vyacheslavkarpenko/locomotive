import mongoose from 'mongoose'

const objectID = (_id) => mongoose.Types.ObjectId(_id)

export { objectID }
