
import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
  email: String,
  password: String,
});

export { UserModelSchema }