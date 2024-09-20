import React from 'react'
import Header from './Components/Header'
import TopContainer from './Components/TopContainer'
import SkillContainer from './Components/SkillContainer'
import ProjectContainer from './Components/ProjectContainer'
import "./App.css"
import ExperienceContainer from './Components/ExperienceContainer'
import Contact from './Components/Contact'


const App = () => {
  return (
    <div>
      <Header />
      <TopContainer />
      <SkillContainer />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact />
    </div>
  )
}

export default App
