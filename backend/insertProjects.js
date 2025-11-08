const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Project = require("./models/project");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    const projects = [
      {
        title: "Personal Portfolio",
        description: "My full-stack portfolio built with React, Tailwind, Express, and MongoDB.",
        tech_stack: ["React", "Tailwind", "Express", "MongoDB"],
        link: "https://github.com/meghanasanisetty/Portfolio_Website"
      },
      {
        title: "Weather App",
        description: "A React app that shows weather info using API.",
        tech_stack: ["React", "API", "CSS"],
        link: "https://github.com/meghanasanisetty/weather-app"
      }
    ];

    await Project.insertMany(projects);
    console.log("Projects inserted successfully");
    mongoose.disconnect();
  })
  .catch(err => console.log(err));
