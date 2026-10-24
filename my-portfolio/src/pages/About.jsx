// src/pages/About.jsx
import { FaGraduationCap } from 'react-icons/fa'
import './About.css'
import Reveal from '../components/Reveal'

const skills = [
  { name: 'HTML & CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Node.js & Express', level: 75 },
  { name: 'MongoDB', level: 70 },
]

const education = [
  {
    title: 'Bachelor of Technology (B.Tech)',
    place: 'JSS Academy of Technical Education Noida',
    year: '2021 - 2025',
  },
  {
    title: 'Senior Secondary (12th)',
    place: 'The International School Agra',
    year: '2019 - 2021',
  },
]

function About() {
  return (
    <section className="about">
      <div className="container">
        <Reveal><h2 className="section-title">About <span>Me</span></h2></Reveal>

        {/* Intro */}
        <div className="about-intro">
          <Reveal direction="left">
            <div className="about-img">
              <img src="/me.JPG" alt="about" />
            </div>
          </Reveal>
         <Reveal direction="right">
          <div className="about-info">
                       <h3>MERN Stack Developer from Noida</h3>
              <p>
                I am a MERN stack developer who enjoys turning ideas into fast,
                clean and easy-to-use web applications. I work with React,
                Node.js, Express and MongoDB, and I care about both how a
                website looks and how well it works behind the scenes.
              </p>
              <p>
                 I completed my B.Tech in 2025 and I am always
                learning new tools to build better products.
              </p>
            <div className="about-details">
              <p><strong>Name:</strong> Yogesh Vidhauliya</p>
              <p><strong>Email:</strong> yogeshvidhauliya130@gmail.com</p>
              <p><strong>Location:</strong> Noida, India</p>
            </div>
          </div>
          </Reveal>
        </div>

        {/* Skills */}
        <Reveal><h3 className="sub-title">My <span>Skills</span></h3></Reveal>
        <Reveal>
        <div className="skills">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <div className="skill-top">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
               </div>
        </Reveal>

        {/* Education */}
        <Reveal><h3 className="sub-title">My <span>Education</span></h3></Reveal>
        <Reveal>
        <div className="education">
          {education.map((item) => (
            <div className="edu-card" key={item.title}>
              <FaGraduationCap className="edu-icon" />
              <div>
                <h4>{item.title}</h4>
                <p>{item.place}</p>
                <span>{item.year}</span>
              </div>
            </div>
                    ))}
        </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About