import express from 'express'

import { userV1Routes } from '../users/v1/routes.js'
import { userV2Routes } from '../users/v2/routes.js'

const routes = express()

routes.use('/v1/users', userV1Routes)
routes.use('/v2/users', userV2Routes)

export { routes }
