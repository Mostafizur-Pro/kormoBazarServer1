import httpStatus from 'http-status'
import mongoose from 'mongoose'
import ApiError from '../../../errors/ApiError'

import { IJob } from './jobs.interface'
import { Job } from './jobs.model'

const getAllJobs = async (): Promise<IJob[] | null> => {
  const result = await Job.find()
  return result
}

const createJob = async (job: IJob): Promise<IJob | null> => {
  const createUser = await Job.create(job)
  if (!createUser) {
    throw new ApiError(400, 'Failed to create job')
  }

  return createUser
}

export const JobService = {
  createJob,
  getAllJobs,
}
