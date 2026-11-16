import { ObjectId } from "mongodb";
import { db } from "../config/db.js";

const jobs = db.collection("jobs");

export const createJob = async (req, res) => {
const data = req.body
const result = await jobs.insertOne(data)
res.send(result)
};

export const getAllJobs = async (req, res) => {
  const list = await jobs.find().toArray();
  res.send(list);
};

export const getSingleJob = async(req,res)=> {
   const {id} = req.params
   const job = await jobs.findOne({_id: new ObjectId(id)})
   res.send(job)
}


//recruiter id base job find
export const getJobById = async (req, res) => {
  const { id } = req.params;
  const job = await jobs.find({ creatorId: id }).toArray();
  res.send(job);
};

export const deleteJob = async(req,res) => {
   const {id }= req.params
   const job = await jobs.deleteOne({_id: new ObjectId(id)})
   res.send(job)
}


export const updateJob = async(req,res) => {
   const {id} = req.params
   const data = req.body
   console.log(data)
   const result = await jobs.updateOne(
      {_id: new ObjectId(id)},
      {$set: data})
   res.send(result)
}