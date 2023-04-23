import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    setTimeout(() => { setLetterClass('text-animate-hover') }, 3000)

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"About".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>primer parrafo</p>
                    <p>segundo parrafo</p>
                    <p>tercer parrafo</p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face2">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faNodeJs} color="#8CC64D" />
                        </div>
                    </div>
                </div>

            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About