import { Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IJob } from './jobs.interface'
import { JobService } from './jobs.service'

const createJob: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...job } = req.body
    
console.log('data', job)
    const result = await JobService.createJob(job)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Order Placed successfully',
      data: result,
    })
  }
)

const getAllJobs = catchAsync(async (req: Request, res: Response) => {
  const result = await JobService.getAllJobs()

  sendResponse<IJob[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrieved successfully !',
    data: result,
  })
})

export const JobController = {
  createJob,
  getAllJobs,
}
