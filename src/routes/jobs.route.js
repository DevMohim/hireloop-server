import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getJobById,
  getSingleJob,
  updateJob,
} from "../controllers/jobs.controller.js";

const router = Router();

router.get("/", getAllJobs); // public
router.get("/:id", getJobById); // public
router.get('/job/:id' , getSingleJob)
router.post("/", createJob); // login লাগবে
router.delete('/:id' , deleteJob) //delete a job
router.patch('/:id',updateJob)

export default router;
