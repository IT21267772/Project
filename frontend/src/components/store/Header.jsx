import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {UserContext} from '../../contexts/UserContext';

import account from '../../assets/account.png'
import {RiArrowDownSFill} from 'react-icons/ri'
import { CartContext } from '../../contexts/CartContext';
import { WishlistContext } from '../../contexts/WishlistContext';
import Cookies from 'js-cookie';

const Container = styled.div`
    display: flex;
    background-color: #E9E3FF;
    padding: 15px 50px;
    font-family: "Poppins", sans-serif;
`;

const Left = styled.div`
    flex: 1;
`;

const Brand = styled.h1`
  color: #9980fa;
  cursor: pointer;
`;

const Right = styled.div`
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: right;
`;

const Item = styled(NavLink)`
    margin-left: 40px;
    padding: 4px 20px;
    border: ${({border}) => border ? '2px solid #9980fa' : '3px solid transparent'};
    border-radius: ${({border}) => border ? '20px' : 'none'};
    cursor: pointer;
    transition: 0.2s;
    text-decoration: none;
    color: black;

    &:hover, &.active {
      background-color: ${({border}) => border ? '#9980fa' : 'none'};
      border: ${({border}) => border ? '2px solid #9980fa' : '3px solid transparent'};
      color: ${({border}) => border ? 'white' : 'none'};
      border-bottom: ${({border}) => border ? '2px solid #9980fa' : '3px solid #9980fa'};

    }

`;

const Profile = styled.img`
  margin-left: 40px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;

`;

const Menu = styled.ul`
  list-style: none;
  position: absolute;
  top: 80px;
  right: 5px;
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px 20px; 
  z-index: 2;
`;

const MenuItem = styled.li`
  cursor: pointer;
  margin-bottom: 5px;

  &:hover {
    color: #9980fa;
  }
`;

const Header = () => {

  // const [isLogged, setIsLogged] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigate = useNavigate()

  const {user, setUser} = useContext(UserContext)
  const {clearCart} = useContext(CartContext)
  const {clearWishlist} = useContext(WishlistContext)

  const handleProfileClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const logout = () => {
    localStorage.clear()
    Cookies.remove('token')
    setUser(null)
    clearCart()
    clearWishlist()
    navigate('../')
  }

  return (
    <Container>
        <Left>
          <Brand onClick={() => navigate('../')}>
            <span style={{color: '#2c2c54'}}>Central</span>PetCare
          </Brand>
        </Left>
        <Right>
          <Item to='../'>Home</Item>
          <Item to='../services'>Services</Item>
          <Item to='../store'>Store</Item>
          {
            user?.isAdmin &&  <Item to='../admin/products/insights'>Dashboard</Item>
          }
          {
            user ? (
              <>
                <Profile src={user.image ? user.image : account} onClick={handleProfileClick} />
                <RiArrowDownSFill onClick={handleProfileClick} />

                {
                  isMenuOpen && (
                    <Menu>
                      <MenuItem onClick={() => navigate('/account/profile')}>Profile</MenuItem>
                      <MenuItem onClick={() => navigate('/account/myOrders')}>My Orders</MenuItem>
                      <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                  )
                }
              </>
            ) : (
              <>
                <Item to='../signin' border={true}>Sign In</Item>
                <Item to='../signup' border={true}>Sign Up</Item>
              </>
            )
          }
        </Right>
    </Container>
  )
}

export default Header