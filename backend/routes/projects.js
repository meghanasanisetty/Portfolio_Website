const express = require("express");
const Project = require("../models/project");

const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new project
router.post("/", async (req, res) => {
  try {
    const { title, description, tech_stack, link } = req.body;
    const project = new Project({ title, description, tech_stack, link });
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
