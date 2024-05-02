const Task=require('../model/task')
const Section=require('../model/section')
const express=require('express')
const router=express.Router()

router.post("/create", async (req, res) => {
    const {sectionId}=req.body
    try {
       const section=await Section.findById(sectionId)
       const taskCount=await Task.find({section:sectionId}).count()
       const task= await Task.create({
        section:sectionId,
        position : taskCount>0 ? taskCount:0
       })
       task._doc.section=section
       res.status(201).json(task)
      } catch (err) {
        res.status(500).json(err);
    }
})