import React, { useState } from 'react'
import './SigninSignupStyles.scss'
import LoginPic from '../../assets/sign-in-asset-2.jpg'
import SigninSignupContainer from './SigninSignupContainer'
import Header from '../../components/store/Header'
import Footer from '../../components/store/Footer'
import { useNavigate } from 'react-router-dom'

function SigninPage() {
    // state variable to track whether we are in sign in or sign up
    const [tracker , setTracker] = useState(true)
    const [activeOne , setActiveOne] = useState(0)

    // if tracker == true display sign in
    // if tracker == false display sign up

    const navigate = useNavigate()

  return (
    <div>
    <Header />
    <div className="background">
        <img className="bg-image-cover" src="" alt="" />
        <div className="form-container-signin-signup">
            <div className="left-partition-reg-user">
                <div className="switch-buttons-container">
                    <div className={activeOne === 0 ? `signer-btn btn-active` : `signer-btn`} onClick={()=>{
                        setActiveOne(0) 
                        setTracker(true)
                        navigate('../signin')
                    }}>Sign In</div>
                    <div className={activeOne === 1 ? `signer-btn btn-active` : `signer-btn`} onClick={()=>{
                        setActiveOne(1)
                        setTracker(false)
                        navigate('../signup')
                    }}>Sign Up</div>
                </div>
                <SigninSignupContainer trackState={tracker}/>
            </div>
            <img src={LoginPic} alt="" className="right-partition-reg-user"/>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default SigninPage