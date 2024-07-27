/* eslint-disable @typescript-eslint/no-this-alias */
import bcrypt from 'bcrypt'
import { Schema, model } from 'mongoose'
import config from '../../../config'
import { IUser, IUserMethods, UserModel } from './user.interface'

const userSchema = new Schema<IUser, Record<string, never>, IUserMethods>(
  {
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      select: 0,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.isUserExist = async function (
  phoneNumber: string
): Promise<Partial<IUser> | null> {
  const user = await User.findOne(
    { phoneNumber },
    {
      _id: 1,
      phoneNumber: 1,
      password: 1,
      name: 1,
      email: 1,
    }
  )
  return user
}
userSchema.methods.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<Partial<boolean>> {
  const isMatched = await bcrypt.compare(givenPassword, savedPassword)
  return isMatched
}

userSchema.pre('save', async function (next) {
  const user = this
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round)
  )
  next()
})

export const User = model<IUser, UserModel>('User', userSchema)
