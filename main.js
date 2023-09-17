import "dotenv/config"

import cors from "cors"
import express from "express"

import { config } from "./config/index.js"
import { indexRouter } from "./Routes/indexRouter.js"
import { connect } from "./database/mongodb/index.js"

const app = express()

connect()

app.use(cors())
app.use(express())
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ extended: true }))
app.use(indexRouter)

app.listen(config.app.port, () => console.log(`Server is running.`))
