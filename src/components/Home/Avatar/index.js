import Selfie from '../../../assets/images/selfie.jpg'
import './index.scss'

const Avatar = () => {
  
  return (
    <div className="logo-container">
      <img
        className="solid-logo"
        src={Selfie}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Avatar