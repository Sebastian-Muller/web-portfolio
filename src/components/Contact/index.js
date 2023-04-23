import Loader from 'react-loaders'
import './index.scss'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (

        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Contact me".split("")}
                            idx={15} />
                    </h1>

                    <p>
                        Ver parrafo!!!
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='text' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required>
                                    </textarea>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>

                </div>
                <div className='info-map'>
                    Sebastian Müller
                    <br />
                    Argentina
                    <br />
                    Ciudad de Santa Fe, Santa Fe
                    <br />
                    <span>seba.muller13@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[-31.63487, -60.70659]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[-31.63487, -60.70659]}>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )


}

export default Contact