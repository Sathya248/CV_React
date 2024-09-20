import React from 'react'
import { Element } from "react-scroll"
import Project from './Project'
import "./ProjectContainer.css"




const ProjectContainer = () => {
  const Projects = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoINpgLfXiEeGGC3GEPje_AXssA3qsKlxy7g&s",
      title: "Weather App",
      desc: "A weather app typically allows users to view current weather conditions and forecasts based on their location or a specified city.",
      link: "https://github.com/Sathya248/Weather-App-React.git",
    
    },


    {
      img: "https://i.pinimg.com/originals/79/5c/08/795c081dc5d6c9fe9ab4da6e5614a42c.png",
      title: "Memory Game",
      desc: "These pairs can make the game a bit more challenging and fun! Let me know if you did like more options!",
      link: "https://sathya248.github.io/Memory-Game-Js/",
    },
    
    {
      img: "https://img.freepik.com/premium-vector/comic-speech-bubbles-with-text-quiz-night-neon-icon-symbol-sticker-tag-special-offer-label_100456-7641.jpg",
      title: "Quiz-App",
      desc: "Guess the Number is a simple yet engaging game where players attempt to identify a randomly generated number.",
      link: "https://github.com/Sathya248/Quiz-App-React.git/",
      },

    {
      img: "https://deepikamittal.com/wp-content/uploads/2018/10/thumbnail_guess-the-no.jpg",
      title: "Guess The Number",
      desc: "These pairs can make the game a bit more challenging and fun! Let me know if you did like more options!",
      link: "https://sathya248.github.io/Guess-the-Number.Js/",
    },

    {
      img: "https://wallpaperaccess.com/full/1489353.jpg",
      title: "To Do List",
      desc: "These pairs can make the game a bit more challenging and fun! Let me know if you did like more options!",
      link: "https://github.com/Sathya248/To-Do-List-React.git",
    },
    
    {
      img: "https://img.freepik.com/free-photo/top-view-notebooks-calculator_23-2149103982.jpg",
      title: "Calculator",
      desc: "These pairs can make the game a bit more challenging and fun! Let me know if you did like more options!",
      link: " https://sathya248.github.io/Calculator-Js/",
    },
    
  
    
   

  ]
  return (
    < Element className="projectContainer" id="projects" >
      <h1>Projects</h1>
      <p>Here are some  projects which I done for the making lives of people easy</p>
      <div className='projectContainer__projects'>
        {
          Projects.map((project, index) => {
            return (
              <Project
                key={index}
                img={project.img}
                title={project.title}
                desc={project.desc}
                link={project.link}
              />
            )
          })
        }

      </div>
    </Element >




  )
}

export default ProjectContainer
