import { Collection, Db, MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import User from '~/models/schemas/User.schema'
dotenv.config() // Liên kết với .env

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@shoppingcardprojectk19f.e10tw.mongodb.net/?retryWrites=true&w=majority&appName=shoppingCardProjectK19F2Cluster`

// Bản chất db chỉ là cục server

class DatabaseServices {
  [x: string]: any
  private client: MongoClient
  private db: Db

  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }

  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  // accessor property
  get users(): Collection<User> {
    return this.db.collection(process.env.DB_USERS_COLLECTION as string)
  }
}

// Tạo bản thể
const databaseServices = new DatabaseServices()
export default databaseServices
