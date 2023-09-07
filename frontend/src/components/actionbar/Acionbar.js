import React, { useContext } from 'react'
import {AiOutlinePoweroff} from 'react-icons/ai'
import './actionbar.scss'
import { AppContext } from '../../contexts/AppContext'
import { WishlistContext } from '../../contexts/WishlistContext'
import { CartContext } from '../../contexts/CartContext'
import { UserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import admin from '../../assets/admin.jpg' 
import Cookies from 'js-cookie'

const Actionbar = () => {

  const {user, setUser} = useContext(UserContext)
  const {clearCart} = useContext(CartContext)
  const {clearWishlist} = useContext(WishlistContext)
  const {setStateTrack} = useContext(AppContext)
  
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    Cookies.remove('token')
    setUser(null)
    clearCart()
    clearWishlist()
    setStateTrack(0)
    navigate('../')
  }

  return (
    <div className="main-ribbon">
        <div className="inventory-management-text">
            Main Dashboard
        </div>

        <div className="user-details">
          <img className='user-image' src={user?.image ? user.image : admin} alt="profile" />
          <div className="profile-details">
              <span className='username'>{user?.username}</span>
              <span className='designation'>Manager</span>
          </div>
          <button className='logout-user' onClick={logout}>
            <AiOutlinePoweroff className='logout-user-icon'/>
          </button>
        </div>
    </div>
  )
}

export default Actionbar