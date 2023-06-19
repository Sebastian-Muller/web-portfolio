import { useRef } from 'react';
import { auth, storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';


const Home = () => {
    const portfolioForm = useRef();
    const certificateForm = useRef();

// <-----------  UPLOAD PORTFOLIO DATA ----------->

    const submitPortfolio = (e) => {
        e.preventDefault();
        const name = portfolioForm.current[0]?.value;
        const description = portfolioForm.current[1]?.value;
        const url = portfolioForm.current[2]?.value;
        const image = portfolioForm.current[3]?.files[0];

        const storageRef = ref(storage, `portfolio/${image.name}`);

        uploadBytes(storageRef, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: downloadUrl
                    })
                }, (error) => {
                    console.log(error);
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: null
                    })
                })
            }, (error) => {
                console.log(error);
                savePortfolio({
                    name,
                    description,
                    url,
                    image: null
                })
            }
        )
    }

    const savePortfolio = async (portfolio) => {
        try {
            await addDoc(collection(db, 'portfolio'), portfolio);
            window.location.reload(false);
        } catch (error) {
            alert('Failed to add portfolio');
        }
    }

    // <-----------  UPLOAD CERTIFICATES DATA ----------->
    
    const submitCertificate = (e) => {
        e.preventDefault();
        const name = certificateForm.current[0]?.value;
        const description = certificateForm.current[1]?.value;
        const image = certificateForm.current[2]?.files[0];

        const storageRef = ref(storage, `certificates/${image.name}`);

        uploadBytes(storageRef, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    saveCertificate({
                        name,
                        description,
                        image: downloadUrl
                    })
                }, (error) => {
                    console.log(error);
                    saveCertificate({
                        name,
                        description,
                        image: null
                    })
                })
            }, (error) => {
                console.log(error);
                saveCertificate({
                    name,
                    description,
                    image: null
                })
            }
        )
    }

    const saveCertificate = async (certificate) => {
        try {
            await addDoc(collection(db, 'certificates'), certificate);
            window.location.reload(false);
        } catch (error) {
            alert('Failed to add certificate');
        }
    }

    return (
        <div className="dashboard">
<h2>Upload portfolio</h2>
            <form ref={portfolioForm} onSubmit={submitPortfolio}>
                <p><input type="text" placeholder="Name" /></p>
                <p><textarea placeholder="Description" /></p>
                <p><input type="text" placeholder="Url" /></p>
                <p><input type="file" placeholder="Image" /></p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>Sign out</button>
            </form>
<h2>Upload certificate</h2>
            <form ref={certificateForm} onSubmit={submitCertificate}>
                <p><input type="text" placeholder="Name" /></p>
                <p><textarea placeholder="Description" /></p>
                <p><input type="file" placeholder="Image" /></p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>Sign out</button>
            </form>
        </div>
    )
}

export default Home;
