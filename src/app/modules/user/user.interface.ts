import { Model } from 'mongoose'

export type IUser = {
  phoneNumber: string
  password: string
  name: string
  email: string
}
export type IUserMethods = {
  isUserExist(email: string): Promise<Partial<IUser> | null>
  
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>
}

export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>
