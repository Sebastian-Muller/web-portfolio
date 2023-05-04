import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from '../Loader'



const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    setTimeout(() => { setLetterClass('text-animate-hover') }, 3000)

    const [age, setAge] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const birthdate = new Date('1993-01-26');
            const diffInMs = Date.now() - birthdate.getTime();
            const ageDate = new Date(diffInMs);
            const age = Math.abs(ageDate.getUTCFullYear() - 1970);

            setAge(age);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"About me".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>I'm {age} years old and i live in Santa Fe, Argentina.</p>
                    <p>I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest.</p>
                    <p>My goal is to improve every day to continue growing as a developer.</p>
                    <p>if you're looking for a developer to add to your team, I'd love to hear from you!</p>
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
            <Loader />
        </>
    )
}

export default About