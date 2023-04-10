import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    setTimeout(() => {setLetterClass('text-animate-hover')}, 3000)

    return (
        <div className='contauner about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>primer parrafo</p>
                <p>segundo parrafo</p>
                <p>tercer parrafo</p>
            </div>
        <div className='stafe-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#28a4d' />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faNodeJs} color='#8cc84b' />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color='#ec428' />
                </div>
            </div>
        </div>

        </div>
    )
}

export default About