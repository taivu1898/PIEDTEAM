import User from '~/models/schemas/User.schema'
import databaseServices from './database.services'
import { RegisterReqBody } from '~/models/requests/users.request'
import { hashPassword } from '~/utils/crypto'

class UsersServices {
  async checkEmailExist(email: string): Promise<Boolean> {
    const user = await databaseServices.users.findOne({ email })
    return Boolean(user)
  }

  async register(payload: RegisterReqBody) {
    // Gọi server lưu vào
    const result = await databaseServices.users.insertOne(
      new User({
        ...payload,
        password: hashPassword(payload.password),
        date_of_birth: new Date(payload.date_of_birth)
      })
    )
    return result
  }
}

const usersServices = new UsersServices()
export default usersServices
