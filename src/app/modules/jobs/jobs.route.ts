import express from 'express'
import { JobController } from './jobs.controller'
const router = express.Router()

router.post('/create-job', JobController.createJob)
router.get('/', JobController.getAllJobs)

export default router
