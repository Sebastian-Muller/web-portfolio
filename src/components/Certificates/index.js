import "./index.scss";
import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import AnimatedLetters from "../AnimatedLetters";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';



const Certificates = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [certificates, setCertificates] = useState([]);

    // <-----------  LETTER ANIMATION ----------->    

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    // <-----------  GET CERTIFICATES FROM FIREBASE ----------->

    useEffect(() => {
        getCertificates();
    }, []);

    const getCertificates = async () => {
        const querySnapshot = await getDocs(collection(db, 'certificates'));
        setCertificates(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderCertificates = (certificates) => {
        return (
            <div className="images-container">
                {
                    certificates.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img
                                    src={port.image}
                                    className="portfolio-image"
                                    alt="certificates" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.image)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <>
            <div className="container certificates-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Certificates".split("")}
                        idx={15}
                    />
                </h1>
                    <div>{renderCertificates(certificates)}</div>
            </div>
            <Loader />
        </>
    );
}



export default Certificates