import { connect } from "mongoose"
import { config } from "../../config/index.js"

export function connect() {
  try {
    connect(config.database.mongoUri)
  } catch (e) {
    console.error(e)
  }
}
